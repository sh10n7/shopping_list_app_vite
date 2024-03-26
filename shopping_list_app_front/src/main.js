import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Modal } from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'

const app = createApp(App)
app.component('Modal', Modal)
app.use(createPinia())

app.mount('#app')
