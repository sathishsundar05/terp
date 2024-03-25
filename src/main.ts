import { registerPlugins } from '@/plugins'

import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './routes'

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
