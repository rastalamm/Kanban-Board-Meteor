Meteor.publish("tasks", function () {
  return TaskCollection.find();
});