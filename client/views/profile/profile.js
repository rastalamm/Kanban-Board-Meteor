
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
      console.log(Meteor.users.find({_id:Meteor.userId()}).fetch()[0])
      // console.log('ist there a user',UserCollection.find({id:Meteor.userId()}))
      var newEntry = $(event.target).text();
      switch(evt.target.className){
        case 'firstName':
          Meteor.users.update({_id:Meteor.userId()},{$set:{firstName:newEntry}})
          break;
        case 'lastName':
          UserCollection.update({_id:Meteor.userId()},{$set:{lastName:newEntry}})
          break;
        case 'email':
          UserCollection.update({_id:Meteor.userId()},{$set:{email:newEntry}})
          break;
      }
      return false;
    }
  }
})

