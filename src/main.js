import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import { initializeApp } from "firebase/app";
const firebaseConfig = {

  
  // place your firebase config here...


};
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
