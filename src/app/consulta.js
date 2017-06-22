export const consulta = {
  template: require('../views/consulta.html'),
  controller(API) {
    this.sendForm = () => {
      const today = new Date();
      const data = {
        nombre: this.name,
        correo: this.email,
        motivo: this.motivo,
        consulta: this.consulta,
        pais: this.selectedCountry,
        fecha: today
      };
      API.sendQuery(data).then(() => {
        angular.element('#modal').modal('show');
      }, error => {
        this.error = error;
      });
    };
  }
};
