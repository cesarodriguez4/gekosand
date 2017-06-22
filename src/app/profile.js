export const profile = {
  template: require('../views/perfil.html'),
  controller(API) {
    API.getQuery().then(result => {
      this.result = result.data;
    }, error => {
      this.result = error;
    });

    this.calculoDias = date => {
      const origin = new Date(date).getDate();
      const now = new Date().getDate();
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
    this.submitDelete = ticket => {
      angular.element('button.close').click();
      API.deleteClient(ticket);
      // Borrar ticket en cliente con for in
    };
  }
};
