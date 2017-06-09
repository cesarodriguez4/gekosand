export const consulta = {
  template: require('../views/consulta.html'),
  controller(paises) {
    this.paises = paises;
  }
};
