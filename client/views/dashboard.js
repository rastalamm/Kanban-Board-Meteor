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

Template.newTaskTemplate.events({
  'click #addTaskSubmit' : function(evt, tmpl){
    console.log('hello there')
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