
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
Router.route('/welcome',{
  template: 'welcomePage'
});

// Router.route('/',{
//   template: 'dashboard',
//   onBeforeAction :  function(pause) {
//       if (!Meteor.userId()) {
//         this.render('welcome');
//         pause();
//       }
//       this.next();
//   }
// })
Router.route('/',{
  template: 'dashboard'
})

