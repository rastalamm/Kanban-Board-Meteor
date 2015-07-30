
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

