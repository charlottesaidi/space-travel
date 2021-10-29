import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import datas from './static/data.json'

const app = createApp(App)
app.use(router)

app.config.globalProperties.$json = {
    datas
}
app.config.globalProperties.$destinations = {
    moon: datas.destinations[0],
    mars: datas.destinations[1],
    europa: datas.destinations[2],
    titan: datas.destinations[3],
}
app.config.globalProperties.$crew = {
    hurley: datas.crew[0],
    shuttle: datas.crew[1],
    glover: datas.crew[2],
    ansari: datas.crew[3],
}
app.config.globalProperties.$tech = {
    launch: datas.technology[0],
    spaceport: datas.technology[1],
    capsule: datas.technology[2],
}

app.mount('#app')
