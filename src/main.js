import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios';
import { createPinia } from 'pinia';


//createApp(App).mount('#app')

// Cria a instância do app Vue
const app = createApp(App);

// Configura Axios globalmente
app.config.globalProperties.$http = axios.create({
  baseURL: 'http://localhost:3000', // URL do backend
});

// Configura o Pinia (se estiver usando)
app.use(createPinia());

// Monta o aplicativo
app.mount('#app');