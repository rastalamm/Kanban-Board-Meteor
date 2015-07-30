
// Router.onBeforeAction(function(pause) {
//     if (!Meteor.user()) {
//         // pause();
//         Router.go('/register');
//     }
//     this.next();
// }, {except: ['/register']});


Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/dashboard',{
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
// Router.route('/',{
//   template: 'dashboard'
// })

