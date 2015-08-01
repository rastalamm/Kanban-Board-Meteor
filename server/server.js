'use strict';

Meteor.startup(function(){
    if(TaskCollection.find().fetch().length === 0){
      TaskCollection.insert({
        title: "Get Shit Done",
        body: "Don't forget to delete mi meow.",
        status: 'todo',
        added: Date.now()
      });
    }
    if(CommentCollection.find().fetch().length ===0){
      CommentCollection.insert({
        userId:Meteor.userId(),
        username:'admin',
        taskId:'noTask',
        body:'test comment',
        added: Date.now()
      })
    }
});