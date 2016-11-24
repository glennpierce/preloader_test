import {Aurelia, inject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {Shimmy} from './shimmy';

@inject(Shimmy)
export class App {
  router: Router;

  constructor(private shimmy: Shimmy) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Shimmy';

    config.map([
      { name: 'test',  route: ['', 'test'],  moduleId: './test',   title: 'About' },
    ]);

    this.router = router;
  }

  activate(params) {
  }
}
