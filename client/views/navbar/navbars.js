
Template.navbarLoggedIn.rendered = function(){
  console.log('rendered');
};

Template.navbarLoggedIn.created = function(){
  console.log('created');

};

Template.navbarLoggedIn.destroyed = function(){
  console.log('destroyed');
};

Template.navbarLoggedIn.helpers({
  username: function () {return Meteor.user().username}
});

