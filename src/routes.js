export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('consulta', {
      url: '/consulta',
      component: 'consulta'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('recuperar', {
      url: '/recuperar',
      component: 'recuperar'
    });
}
