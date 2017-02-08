import { SocialNetwork } from './social-network';
import * as _ from 'lodash';

class App implements SocialNetwork {
  title = "Egghead";
  getUsers() {
    return [{name: "Philip"}];
  }
}

console.log(_.isArray(new App().getUsers()));
