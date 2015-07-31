
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
  username: function () {return Meteor.user().username},
  notOnDashboard: function(){
    if (Router.current().route.getName()==='dashboard'){
      return false;
    }
    return true;
  },
  notOnProfile: function(){
    if (Router.current().route.getName()==='profile'){
      return false;
    }
    return true;
  }

});

Template.navbarLoggedIn.events({
    'click .logout': function(event){
        // event.preventDefault();
        Meteor.logout();
    }
});