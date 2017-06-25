export const profile = {
  template: require('../views/perfil.html'),
  controller(API) {
    this.estados = ['RECIBIDA', 'EN PROCESO', 'OFERTA ENVIADA', 'CONCRETADA', 'NO CONCRETADA'];
    API.getQuery().then(result => {
      this.result = result.data;
    }, error => {
      this.result = error;
    });

    this.calculoDias = date => {
      const origin = new Date(date).getTime();
      const now = new Date().getTime();
      const days = Math.floor((now - origin) / (1000 * 60 * 60 * 24));
      if (days === 0) {
        return 'Hoy';
      }
      return days + ' Días.';
    };

    this.openChat = ticket => {
      angular.element('#chat').modal('show');
      API.getMessages(ticket).then(result => {
        this.messages = result.data;
      }, error => {
        this.messages = error;
      });
    };

    this.deleteClient = ticket => {
      angular.element('#delete').modal('show');
      this.deleteSelected = ticket;
    };

    this.newState = (ticket, estado) => {
      const number = this.estados.indexOf(estado);
      API.updateState(ticket, number);
    };

    this.filterOn = estado => {
      const number = this.estados.indexOf(estado);
      this.search = {estado: number};
    };

    this.newMess = () => {
      const fecha = new Date();
      const obj = {
        correo: this.messages[0].correo,
        mensaje: this.nuevoMensaje,
        ticket: this.messages[0].ticket,
        fecha
      };

      API.sendAnswer(obj).then(() => {
        this.messages.push({
          mensaje: this.nuevoMensaje,
          envia: 1
        });
        this.nuevoMensaje = '';
      });
    };

    this.submitDelete = ticket => {
      angular.element('button.close').click();
      API.deleteClient(ticket);
      for (let i = 0; i < this.result.length; i++) {
        if (this.result[i].ticket === ticket) {
          delete this.result[i];
        }
      }
    };
  }
};
