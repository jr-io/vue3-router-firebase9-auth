import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCqYcYlo6loeCYPYgU3NiVVFFnLRdAFiG0",
  authDomain: "p90x-entry.firebaseapp.com",
  projectId: "p90x-entry",
  storageBucket: "p90x-entry.appspot.com",
  messagingSenderId: "227402872351",
  appId: "1:227402872351:web:b3c9a013894c09cf0e072a",
  measurementId: "G-T496BD2QKB"
};
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
