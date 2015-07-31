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
  var validator = $('.register').validate({
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
    },
    submitHandler: function(){
      var username = $(event.target).find('#registerUsername').val();
      var emailVar = $(event.target).find('#registerEmail').val();
      var passwordVar = $(event.target).find('#registerPassword').val();
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
      }, function(error){

        if(error){
          if(error.reason == "Email already exists."){
            validator.showErrors({
                registerEmail: "email already in the systesm"
            });
          }
          if(error.reason == "Username already exists."){
          console.log('error', error.reason);
            validator.showErrors({
                username: "That user already exitst"
            });
          }
        } else {
          var currentRoute = Router.current().route.getName();
          if(currentRoute == "login"){
              Router.go("/dashboard");
          }
        }
      });
    }
  });
});


Template.login.onRendered(function(){

  var validator = $('.login').validate({
    submitHandler: function(){
      var username = $(event.target).find('#loginUsername').val();
      var password = $(event.target).find('#loginPassword').val();
      Meteor.loginWithPassword(username, password, function(error){
        if(error){
          if(error.reason == "User not found"){
            validator.showErrors({
                username: "That Username does not exists in our system."
            });
          }
          if(error.reason == "Incorrect password"){
            validator.showErrors({
                loginPassword: "You entered an incorrect password."
            });
          }
        } else {
          var currentRoute = Router.current().route.getName();
          if(currentRoute == "login"){
              Router.go("/dashboard");
          }
        }
      });
    }
  });

});


if (Meteor.isClient) {
// Template.register.events({
//     'submit form': function(event) {
//         event.preventDefault();
//         var username = event.target.username.value;
//         var emailVar = event.target.registerEmail.value;
//         var passwordVar = event.target.registerPassword.value;
//         var firstName = 'Click Me to Edit!';
//         var lastName = 'Click Me to Edit!';
//         Accounts.createUser({
//             username: username,
//             email: emailVar,
//             password: passwordVar,
//             profile : {
//               firstName : firstName,
//               lastName : lastName
//             }
//         }, function (error){
//           if(error){
//             alert('there was an error with the register');
//           }else{
//             Router.go('/dashboard');
//           }
//         });
//     }
// });

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