import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/tailwind/style.css'
import './styles/element/theme.scss'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import { vEdit, vScale } from '@/directives'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .directive('edit', vEdit)
  .directive('scale', vScale)

app.mount('#app')
