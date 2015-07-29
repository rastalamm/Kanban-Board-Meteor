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

Router.route('/',{
  template: 'welcome'
})
