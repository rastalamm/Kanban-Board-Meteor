
Template.dashboard.rendered = function(){

};

Template.dashboard.created = function(){


};

Template.dashboard.destroyed = function(){

};


Template.task.rendered = function(){
};

Template.dashboard.helpers({
  toDoTasks: function(){
    if(Router.current().route.getName() === 'dashboard'){
      return TaskCollection.find({userId: Meteor.userId(), status: 'todo'});
    }else if(Router.current().route.getName() === 'globaldashboard'){
      return TaskCollection.find({status: 'todo' , privacy: 'public'});
    }
 },

  inProgressTasks: function(){
    if(Router.current().route.getName() === 'dashboard'){
      return TaskCollection.find({userId: Meteor.userId(), status: 'inProgress'});
    }else if(Router.current().route.getName() === 'globaldashboard'){
      return TaskCollection.find({status: 'inProgress' , privacy: 'public'});
    }
 },
  doneTasks: function(){
    if(Router.current().route.getName() === 'dashboard'){
      return TaskCollection.find({userId: Meteor.userId(), status: 'done'});
    }else if(Router.current().route.getName() === 'globaldashboard'){
      return TaskCollection.find({status: 'done' , privacy: 'public'});
    }
 },
 localDashboard : function(){
  if(Router.current().route.getName() === 'dashboard'){
    return true;
  }else{
    return false;
  }
 }
});

Template.task.helpers({
  currentColor: function(){
    return 'taskHouse '+this.color
  },
  myTask: function(){
    if(this.userId === Meteor.userId()){
      return true;
    }
    return false;
  },
  taskOwner: function(){
    return this.username;
  },
  commentArray: function(){
    var taskComments = CommentCollection.find({taskId:this._id}).fetch();
    console.log('taskComments',taskComments);
    return taskComments;
  }
});

Template.comment.helpers({
  commentAuthor: function(){
    return this.username;
  },
  commentBody: function(){
    return this.body;
  },
  commentId: function(){
    return this._id;
  }
})

Template.dashboard.events({
  'click #archiveTaskButton' : function(evt, tmpl){
    var doneTasks = TaskCollection.find({userId:Meteor.userId(), status:'done'}).fetch();
    doneTasks.forEach(function(val){
      TaskCollection.update({_id :val._id},{$set:{status:'archived'}})
    })
  }
});

Template.newTaskTemplate.events({
  'click #addTaskSubmit' : function(evt, tmpl){
    var taskTitle = tmpl.find('#newTaskTitle').value;
    var taskBody = tmpl.find('#newTaskBody').value;
    var taskColor = tmpl.find('.colorSelect').value;
    console.log('color',taskColor)
    if(taskTitle){
      TaskCollection.insert({
        title: taskTitle,
        body: taskBody,
        color: taskColor,
        status: 'todo',
        complete: false,
        privacy: 'public',
        added: Date.now(),
        userId: Meteor.userId(),
        username: Meteor.user().username
      })
    tmpl.find('#newTaskTitle').value = '';
    tmpl.find('#newTaskBody').value = '';

    } else{
      return false;
    }
    $('.close-reveal-modal').click();
    return false;
  }

});

Template.editTaskTemplate.events({
  'click .editLink' : function(evt, tmpl){
    var taskId = tmpl.data._id;
    // var currentColor = TaskCollection.find({_id:taskId}).fetch().color;
    console.log('current color',tmpl.data.color)


    $('.editTaskTitle').val(this.title);
    $('.editTaskBody').val(tmpl.data.body);
    $('.editStatus').val(tmpl.data.status);
    $('.colorSelect').val(tmpl.data.color);
    $('.privacySelect').val(tmpl.data.privacy);

    $('.archiveTask').click(archiveTask);
    $('.editTaskSubmit').click(editSubmit);


    function archiveTask(){
      TaskCollection.update({_id:taskId},{$set:{status:'archived'}})
      $('.close-reveal-modal').click(function(){
        $('.archiveTask').unbind('click');
      });
      $('.close-reveal-modal').click();
      return false;

    }

    function editSubmit(event){
      // event.preventDefault();
      console.log('sumbmitting edit')
      var newTaskTitle = $(event.target).parent().find('.editTaskTitle').val();
      var newTaskBody = $(event.target).parent().find('.editTaskBody').val();
      var newStatus = $(event.target).parent().find('.editStatus').val();
      var newColor = $(event.target).parent().find('.colorSelect').val();
      var newPrivacy = $(event.target).parent().find('.privacySelect').val();

      TaskCollection.update({
              _id: taskId
            },
              {$set:{
                title:newTaskTitle,
                body: newTaskBody,
                status: newStatus,
                color: newColor,
                privacy: newPrivacy
            }});
      if(newStatus === 'complete'){
        TaskCollection.update({_id:taskId},{$set:{complete:true}});
      }else{
        TaskCollection.update({_id:taskId},{$set:{complete:false}});
      }

      $('.close-reveal-modal').click(function(){
        $('.editTaskSubmit').unbind('click');
      });
      $('.close-reveal-modal').click();
      return false;
    };
  }
});

Template.task.events({
  'click .moveTaskAlong' : function(evt, tmpl){
    var currStatus = tmpl.data.status;
    var taskId = tmpl.data._id;
    switch(currStatus){
      case 'todo':
        $(tmpl.data.status).val('inProgress');
        TaskCollection.update({_id:taskId},{$set:{status:'inProgress'}})
        break;
      case 'inProgress':
        TaskCollection.update({_id:taskId},{$set:{status:'done',complete:true}})
        break;
    };
  },
  'keypress .taskTitle': function(evt, tmpl){
    event.target.blur();
    if(event.keyCode == 13){
      // var newEntry = $(event.target).text();
      var newEntry = evt.target.innerHTML;
      console.log('newEntry',newEntry);
      if(newEntry){
        TaskCollection.update({_id:tmpl.data._id},{$set:{title:newEntry}});
      }else{
        var oldTaskTitle = TaskCollection.find({_id:tmpl.data._id}).fetch()[0].title;
        evt.target.innerHTML = oldTaskTitle;
      }
      // event.stopPropagation();
      event.preventDefault();
      return false;
    }
  },
  'keypress .taskBody': function(evt, tmpl){
    event.target.blur();
    if(event.keyCode == 13){
      // var newEntry = $(event.target).text();
      var newEntry = evt.target.innerHTML;
      console.log('newEntry',newEntry);
      if(newEntry){
        TaskCollection.update({_id:tmpl.data._id},{$set:{body:newEntry}});
      }else{
        var oldTaskTitle = TaskCollection.find({_id:tmpl.data._id}).fetch()[0].body;
        evt.target.innerHTML = oldTaskTitle;
      }
      // event.stopPropagation();
      event.preventDefault();
      return false;
    }
  },
  'keypress .addCommentInput' : function(evt, tmpl){
      event.stopPropagation();
    if (event.keyCode == 13) {
      event.target.blur();
      var newComment = $(event.target).val();
      console.log('new comment:',newComment);
      console.log(tmpl.data)
      if(newComment){
        CommentCollection.insert({
          userId: Meteor.userId(),
          username: Meteor.user().username,
          taskId: tmpl.data._id,
          body: newComment,
          added: Date.now()
        });
        $(event.target).val('');
      }
      return false;
    }
  }


});
