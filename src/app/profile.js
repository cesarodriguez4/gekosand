export const profile = {
  template: require('../views/perfil.html'),
  controller(API) {
    this.fecha = new Date();
    this.hour = new Date().getHours();
    API.getQuery().then(result => {
      this.result = result.data;
    }, error => {
      this.result = error;
    });
  }
};
