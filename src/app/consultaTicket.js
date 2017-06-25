export const consultaTicket = {
  template: require('../views/consultaTicket.html'),
  controller(API, $state) {
    this.sendQuery = ticket => {
      this.loading = true;
      API.questTicket(ticket).then(result => {
        this.loading = false;
        if (result.data.length > 0) {
          $state.go('ticket', {ticket});
        } else {
          this.errorTicket = true;
        }
      }, () => {
        this.error = true;
      });
    };
  }
};
