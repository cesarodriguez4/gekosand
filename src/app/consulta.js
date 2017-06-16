export const consulta = {
  template: require('../views/consulta.html'),
  controller(API) {
    this.sendForm = () => {
      const data = {
        nombre: this.name,
        email: this.email,
        motivo: this.motivo,
        consulta: this.consulta,
        pais: this.selectedCountry
      };
      API.sendQuery(data).then(result => {
        this.result = result;
      }, error => {
        this.error = error;
      });
    };
  }
};
