Meteor.publish("tasks", function () {
  return TaskCollection.find();
});
Meteor.publish("comments", function () {
  return CommentCollection.find();
});