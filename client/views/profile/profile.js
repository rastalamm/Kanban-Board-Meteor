
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
  username: function () {return Meteor.users.find({_id:Meteor.userId()}).fetch()[0].username;},
  password: function () {},
  firstName: function () { return Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.firstName},
  lastName: function () { return Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.lastName},

  email : function () { return Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails[0].address }

});

Template.profile.events({
  'keypress .profile_input': function(evt,tmpl){
    event.target.blur();


    if (event.keyCode == 13) {
      var newEntry = $(event.target).text();
      switch(evt.target.className){
        case 'firstName':
          Meteor.users.update({_id:Meteor.userId()},{$set:{'profile.firstName':newEntry}})
          break;
        case 'lastName':
          Meteor.users.update({_id:Meteor.userId()},{$set:{'profile.lastName':newEntry}})
          break;
        // case 'email':
        //   var emailArray = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails;
        //   emailArray[0].address = newEntry;
        //   console.log('emailArray',emailArray)
        //   Meteor.users.update({_id:Meteor.userId()},{$set:{'emails':emailArray}})
        //   break;
      }

      return false;
    }
  }
})

