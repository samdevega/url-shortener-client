import { createApp } from 'vue'

import router from './router.js'
import store from './store/'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('base-button', BaseButton)
app.mount('#app')
