<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

const isLoggedIn = ref(false)

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/feed"> Feed </router-link>
    <router-link to="/register"> Register </router-link>
    <router-link to="/sign-in"> Login </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view />
</template>

<style>
body {
  display: flex;
  justify-content: center;
}
</style>
