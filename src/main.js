import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '/css/main.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from  '@/routes/router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBed, faShower, faCarSide, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faBed)
library.add(faShower)
library.add(faCarSide)
library.add(faQuoteLeft)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')