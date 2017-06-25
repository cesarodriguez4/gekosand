export const consulta = {
  template: require('../views/consulta.html'),
  controller(API, $state) {
    this.sendForm = () => {
      this.loading = true;
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
        this.loading = false;
        angular.element('#modal').modal('show');
      }, error => {
        this.error = error;
      });
    };

    angular.element('#modal').on('hidden.bs.modal', () => {
      $state.go('app');
    });
  }
};
