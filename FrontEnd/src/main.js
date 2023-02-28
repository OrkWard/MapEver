import Layout from './Layout.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

let app = createApp(Layout);
app.mount('#app');
const pinia = createPinia();
app.use(pinia);