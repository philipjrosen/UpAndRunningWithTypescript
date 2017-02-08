import { SocialNetwork } from './social-network';

class App implements SocialNetwork {
  title = "Egghead";
  getUsers() {
    return [{name: "Philip"}];
  }
}
