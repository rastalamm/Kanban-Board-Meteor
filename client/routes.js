Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/dashboard',{
  template:'dashboard'
});
Router.route('/globaldashboard',{
  template:'dashboard'
});
Router.route('/profile',{
  template:'profile'
});
Router.route('/register',{
  template:'welcomePage'
});

Router.route('/',{
  template: 'dashboard',
  onBeforeAction :  function(pause) {
      if (!Meteor.userId()) {
        this.render('welcomePage');
        pause();
      }
      this.next();
  }
})

