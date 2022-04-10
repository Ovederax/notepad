import * as Vue from 'vue'
import {store} from './store'
import HomeView from '@/views/HomeView.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.createApp(HomeView).use(store).mount('#app')
