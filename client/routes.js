
Router.onBeforeAction(function(pause) {
    if (!Meteor.user()) {
      console.log('srtainstrneitsrneio')
        // pause();
        Router.go('/welcome');
    }
    this.next();
}, {except: ['/register']});


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
  template:'register'
});
Router.route('/welcome',{
  template: 'welcome'
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

