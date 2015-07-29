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
    } else{
      return;
    }
    $('.close-reveal-modal').click();
  }

});

Template.editTaskTemplate.events({
  'click .editLink' : function(evt, tmpl){
    console.log(tmpl.find('#editTaskTitle'))
    tmpl.find('#editTaskTitle').value += this.title;
    tmpl.find('#editTaskBody').value += tmpl.data.body;

  },
  'click #editTaskSubmit' : function(evt, tmpl){
    console.log('gonigin isen')
    var taskId = tmpl.data._id;
    console.log('taskId:',taskId)
    var newTaskTitle = tmpl.find('#editTaskTitle').value;
    var newTaskBody = tmpl.find('#editTaskBody').value;
    TaskCollection.update({_id:taskId},{$set:{title:newTaskTitle, body: newTaskBody}})
    $('.close-reveal-modal').click();
  }

});