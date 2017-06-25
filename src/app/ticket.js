export const ticket = {
  template: require('../views/ticket.html'),
  controller($state, API) {
    const ticket = $state.params.ticket;
    this.estados = ['RECIBIDA', 'EN PROCESO', 'OFERTA ENVIADA', 'OFERTA ENVIADA', 'OFERTA ENVIADA'];
    API.getMessages(ticket).then(result => {
      this.messages = result.data;
    }, error => {
      this.messages = error;
    });

    API.questTicket(ticket).then(result => {
      this.data = result.data;
      if (result.data.length === 0) {
        $state.go('app');
      }
    }, error => {
      this.data = error;
    });

    this.newMessClient = () => {
      const fecha = new Date();
      const obj = {
        correo: this.messages[0].correo,
        mensaje: this.nuevoMensaje,
        ticket: this.messages[0].ticket,
        fecha
      };

      API.sendAnswerClient(obj).then(() => {
        this.messages.push({
          mensaje: this.nuevoMensaje,
          envia: 1
        });
        this.nuevoMensaje = '';
      });
    };
  }
};
