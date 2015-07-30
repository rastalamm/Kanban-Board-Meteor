
Template.profile.rendered = function(){
  console.log('rendered');
};

Template.profile.created = function(){
  console.log('created');

};

Template.profile.destroyed = function(){
  console.log('destroyed');
};

Template.profile.helpers({
  todoCount : function (){
    if(TaskCollection.find({userId: Meteor.userId(), status: 'todo'}).fetch().length > 0){
      return TaskCollection.find({userId: Meteor.userId(), status: 'todo'}).fetch().length
    }else {
      return 0;
    }
  },

  inProgressCount : function (){
    if(TaskCollection.find({userId: Meteor.userId(), status: 'inProgress'}).fetch().length > 0){
      return TaskCollection.find({userId: Meteor.userId(), status: 'inProgress'}).fetch().length
    }else {
      return 0;
    }
  },
  doneCount : function (){
    if(TaskCollection.find({userId: Meteor.userId(), status: 'done'}).fetch().length > 0){
      return TaskCollection.find({userId: Meteor.userId(), status: 'done'}).fetch().length
    }else {
      return 0;
    }
  },
  username: function () {return Meteor.user().username},
  password: function () {return Meteor.user().username},
  name: function () {
    if(Meteor.user().name){
      return Meteor.user().name
    }else{
      return "Click me to edit!"
    }
  },
  email : function () {
    if(Meteor.user().email){
      return Meteor.user().email
    }else{
      return "Click me to edit!"
    }
  }
});

Template.profile.events({
  'keypress .profile_input': function(evt,tmpl){
    event.target.blur();
    if (event.keyCode == 13) {
//*********************working on this

    }
  }
})

