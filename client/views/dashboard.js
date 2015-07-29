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
  tasks: function(){ return TaskCollection.find(); }
});

Template.dashboard.events({

});