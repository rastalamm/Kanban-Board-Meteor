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

Template.dashboard.events({

});