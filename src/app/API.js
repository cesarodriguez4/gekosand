export class API {
  constructor($http) {
    this.$http = $http;
  }
  questTicket(ticket) {
    return this.$http.get(`https://gekoapi.herokuapp.com/ticket/${ticket}`);
  }
  sendQuery(data) {
    return this.$http.post('https://gekoapi.herokuapp.com/query', data);
  }
  login(data) {
    return this.$http.post('https://gekoapi.herokuapp.com/login', data);
  }
  getQuery() {
    return this.$http.get('https://gekoapi.herokuapp.com/query');
  }
  getMessages(ticket) {
    return this.$http.get(`https://gekoapi.herokuapp.com/messages/${ticket}`);
  }
  deleteClient(ticket) {
    return this.$http.get(`https://gekoapi.herokuapp.com/users/delete/${ticket}`);
  }
  sendAnswer(obj) {
    return this.$http.post(`https://gekoapi.herokuapp.com/query/answer`, obj);
  }
  sendAnswerClient(obj) {
    return this.$http.post(`https://gekoapi.herokuapp.com/query/answer/client`, obj);
  }
  updateState(ticket, estado) {
    return this.$http.put(`https://gekoapi.herokuapp.com/query/state`, {ticket, estado});
  }
}
