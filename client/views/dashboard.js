Template.dashboard.rendered = function(){
  console.log('rendered');
};

Template.dashboard.created = function(){
  console.log('created');

};

Template.dashboard.destroyed = function(){
  console.log('destroyed');
};

Template.dashboard.helpers({
  toDoTasks: function(){ return TaskCollection.find({status: 'todo'}); },
  inProgressTasks: function(){ return TaskCollection.find({status: 'inProgress'}); },
  doneTasks: function(){ return TaskCollection.find({todo: 'done'}); }
});

Template.editTaskTemplate.helpers({

})

Template.newTaskTemplate.events({
  'click #addTaskSubmit' : function(evt, tmpl){
    var taskTitle = tmpl.find('#newTaskTitle').value;
    var taskBody = tmpl.find('#newTaskBody').value;
    if(taskTitle){
      TaskCollection.insert({
        title: taskTitle,
        body: taskBody,
        status: 'todo',
        added: Date.now()
      })
    tmpl.find('#newTaskTitle').value = '';
    tmpl.find('#newTaskBody').value = '';

    } else{
      return;
    }
    $('.close-reveal-modal').click();
  }

});

Template.editTaskTemplate.events({
  'click .editLink' : function(evt, tmpl){
    var taskId = tmpl.data._id;

    $('.editTaskTitle').val(this.title);
    $('.editTaskBody').val(tmpl.data.body);

    $('.deleteTask').click(deleteTask);
    $('.editTaskSubmit').click(editSubmit);

    function deleteTask(){
      TaskCollection.remove({_id:taskId})
      $('.close-reveal-modal').click();

    }

    function editSubmit(event){
      console.log('taskId:',taskId)
      console.log($(event.target).parent().find('.editTaskTitle').val(),'event')

      var newTaskTitle = $(event.target).parent().find('.editTaskTitle').val();
      var newTaskBody = $(event.target).parent().find('.editTaskBody').val();
      console.log(newTaskBody,newTaskTitle)
      TaskCollection.update({_id:taskId},{$set:{title:newTaskTitle, body: newTaskBody}})
      $('.close-reveal-modal').click();
    };
  }
  // 'click .editTaskSubmit' : function(evt,tmpl){
  //   console.log('were in')
  // }

});