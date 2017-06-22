export const header = {
  template: require('../views/header.html'),
  controller($cookies) {
    this.session = $cookies.get('session');
  }
};
