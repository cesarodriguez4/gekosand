export const login = {
  template: require('../views/login.html'),
  controller(API, $cookies, $state) {
    this.login = () => {
      const correo = this.correo;
      const password = this.password;
      API.login({correo, password}).then(result => {
        if (result.data.error) {
          this.result = result.data;
        } else {
          $cookies.put('session', true);
          $state.go('profile');
          location.reload();
        }
      }, error => {
        this.result = error;
      });
    };
  }
};
