Template.welcomePage.onCreated(function(){
    console.log("The 'welcomePage' template was just created.");

});

Template.welcomePage.onRendered(function(){
    console.log("The 'welcomePage' template was just rendered.");

});

Template.welcomePage.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});

Template.register.onRendered(function(){
  $('.register').validate({
    rules: {
      registerEmail : {
        required: true,
        email : true
      },
      username : {
        minlength : 4,
        maxlength : 10
      },
      registerPassword: {
        minlength: 6
      }
    },
    messages : {
      email : {
        required: "You must enter your email",
        email : "You've entered an invalid email address"
      },
      username : {
        minlength : "Your Username must be at least 4 characters long",
        maxlength : "Your Username can't be more than 10 characters long"
      },
      registerPassword : {
        minlength : "Minimum password length is 6 characters"
      }
    }
  });
});


Template.login.onRendered(function(){
var validator =  $('.login').validate();
//     console.log("happpen");

  var validator = $('.login').validate({
    submitHandler : function(event){
      var username = event.target.username.value;
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(username, passwordVar, function (error){
          alert(error.reason);
        if(error){
          validator.showErrors({
            username: error.reason
          });
        }else{
          Router.go('/dashboard')
        }
      });
    }

  });

});


if (Meteor.isClient) {
Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var username = event.target.username.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var firstName = 'Click Me to Edit!';
        var lastName = 'Click Me to Edit!';
        Accounts.createUser({
            username: username,
            email: emailVar,
            password: passwordVar,
            profile : {
              firstName : firstName,
              lastName : lastName
            }
        }, function (error){
          if(error){
            alert('there was an error with the register');
          }else{
            Router.go('/dashboard');
          }
        });
    }
});

// Template.login.events({
//     'submit form': function(event){
//         event.preventDefault();
//         var username = event.target.username.value;
//       var passwordVar = event.target.loginPassword.value;
//       Meteor.loginWithPassword(username, passwordVar, function (error){
//           // alert(error.reason);
//         if(error){
//           validator.showErrors({
//             username: error.reason
//           });
//         }else{
//           Router.go('/dashboard')
//         }
//       });
//     }
// });

}