Hooks.init();

Hooks.onLoggedIn = function () {
  Router.go("dashboard");
   }
Hooks.onLoggedOut = function (userId) {
    Router.go("/");
}
Hooks.onCreateUser = function (userId) { }