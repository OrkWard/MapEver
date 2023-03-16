import Layout from './Layout.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

let pinia = createPinia();
let app = createApp(Layout);
app.use(pinia);
app.mount('#app');