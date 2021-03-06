import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions)
    .use(router)
    .mount('#app')
