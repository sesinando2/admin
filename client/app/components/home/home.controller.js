class HomeController {

  /* @ngInject */
  constructor(authenticationService) {
    this.name = 'home';
    this.authenticationService = authenticationService;
  }

  $onInit() {
    this.authenticationService.login('admin', 'admin');
  }
}

export default HomeController;
