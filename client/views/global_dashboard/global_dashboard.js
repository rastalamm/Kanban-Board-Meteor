
Template.globalDashboard.rendered = function(){

};

Template.globalDashboard.created = function(){


};

Template.globalDashboard.destroyed = function(){

};

Template.globalDashboard.helpers({
  toDoTasks: function(){ return TaskCollection.find({status: 'todo' , privacy: 'public'}); },
  inProgressTasks: function(){ return TaskCollection.find({status: 'inProgress', privacy: 'public'}); },
  doneTasks: function(){ return TaskCollection.find({status: 'done', privacy: 'public'}); }
});

// Template.task.helpers({
//   currentColor: function(){return 'taskHouse '+this.color}
// });


// Template.newTaskTemplate.events({
//   'click #addTaskSubmit' : function(evt, tmpl){
//     var taskTitle = tmpl.find('#newTaskTitle').value;
//     var taskBody = tmpl.find('#newTaskBody').value;
//     var taskColor = tmpl.find('.colorSelect').value;
//     console.log('color',taskColor)
//     if(taskTitle){
//       TaskCollection.insert({
//         title: taskTitle,
//         body: taskBody,
//         color: taskColor,
//         status: 'todo',
//         complete: false,
//         added: Date.now(),
//         userId: Meteor.userId(),
//         username: Meteor.user().username
//       })
//     tmpl.find('#newTaskTitle').value = '';
//     tmpl.find('#newTaskBody').value = '';

//     } else{
//       return;
//     }
//     $('.close-reveal-modal').click();
//   }

// });

// Template.editTaskTemplate.events({
//   'click .editLink' : function(evt, tmpl){
//     var taskId = tmpl.data._id;
//     // var currentColor = TaskCollection.find({_id:taskId}).fetch().color;
//     console.log('current color',tmpl.data.color)


//     $('.editTaskTitle').val(this.title);
//     $('.editTaskBody').val(tmpl.data.body);
//     $('.editStatus').val(tmpl.data.status);
//     $('.colorSelect').val(tmpl.data.color);

//     $('.deleteTask').click(deleteTask);
//     $('.editTaskSubmit').click(editSubmit);


//     function deleteTask(){
//       TaskCollection.remove({_id:taskId})
//       $('.close-reveal-modal').click();
//       return;

//     }

//     function editSubmit(event){

//       var newTaskTitle = $(event.target).parent().find('.editTaskTitle').val();
//       var newTaskBody = $(event.target).parent().find('.editTaskBody').val();
//       var newStatus = $(event.target).parent().find('.editStatus').val();
//       var newColor = $(event.target).parent().find('.colorSelect').val();

//       TaskCollection.update({
//               _id: taskId
//             },
//               {$set:{
//                 title:newTaskTitle,
//                 body: newTaskBody,
//                 status: newStatus,
//                 color: newColor
//             }});
//       if(newStatus === 'complete'){
//         TaskCollection.update({_id:taskId},{$set:{complete:true}});
//       }else{
//         TaskCollection.update({_id:taskId},{$set:{complete:false}});
//       }

//       $('.close-reveal-modal').click();
//     };
//   }
//   // 'click .editTaskSubmit' : function(evt,tmpl){
//   //   console.log('were in')
//   // }

// });

// Template.task.events({
//   'click .moveTaskAlong' : function(evt, tmpl){
//     var currStatus = tmpl.data.status;
//     var taskId = tmpl.data._id;
//     switch(currStatus){
//       case 'todo':
//         $(tmpl.data.status).val('inProgress');
//         TaskCollection.update({_id:taskId},{$set:{status:'inProgress'}})
//         break;
//       case 'inProgress':
//         TaskCollection.update({_id:taskId},{$set:{status:'done',complete:true}})
//         break;
//     };
//   },
//   'keypress .taskHouse': function(evt, tmpl) {
//     // event.stopPropagation();
//     // event.preventDefault();
//     event.target.blur();

//     if (event.keyCode == 13) {
//       var newEntry = $(event.target).text();
//       console.log(newTaskTitle)
//       if(evt.target.className === 'taskTitle'){
//         if(newEntry){
//           TaskCollection.update({_id:tmpl.data._id},{$set:{title:newEntry}});
//         }else{
//           var oldTaskTitle = TaskCollection.find({_id:tmpl.data._id}).fetch()[0].title;
//           $(event.target).text(oldTaskTitle);
//         }
//       }else if(evt.target.className === 'taskBody'){
//         if(newEntry){
//           TaskCollection.update({_id:tmpl.data._id},{$set:{body:newEntry}});
//         }
//       }
//         // event.stopPropagation();
//         return false;
//     }
// }


// });