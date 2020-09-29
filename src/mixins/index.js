import axios from "./modules/axios";
import methods from "./modules/methods";
import appInterworking from "./modules/appInterworking";

let mixins = {
  mixins: [axios, methods, appInterworking],
};

export default mixins;
