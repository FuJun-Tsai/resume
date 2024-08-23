import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

const app = createApp(App);
app.use(bootstrap);
app.mount('#app');
