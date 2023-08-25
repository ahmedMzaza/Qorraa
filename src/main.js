import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* BootStrap v5.3.0 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* add some free styles */
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
/* import specific icons */
import { faMagnifyingGlass, faBars, faArrowRight, faArrowRightLong, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMagnifyingGlass, faBars, faArrowRight, faArrowRightLong, faArrowLeftLong, faInstagram, faLinkedinIn, faYoutube, faFacebookF, faTwitter);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");

