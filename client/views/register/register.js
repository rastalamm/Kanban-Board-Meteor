  // Accounts.config({
  //   passwordSignupFields: "USERNAME_ONLY"
  // });




if (Meteor.isClient) {
Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var username = event.target.username.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        Accounts.createUser({
            username: username,
            email: emailVar,
            password: passwordVar,
            profile : {
              firstName : firstName,
              lastName : lastName
            }
        });
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});

}