export class API {
  constructor($http) {
    this.$http = $http;
  }
  sendQuery(data) {
    return this.$http.post('https://gekoapi.herokuapp.com/query', data);
  }
}
