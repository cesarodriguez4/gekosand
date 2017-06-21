export class API {
  constructor($http) {
    this.$http = $http;
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
}
