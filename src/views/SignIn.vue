<template>
  <h1>Sign In to an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password"></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>



<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from 'vue-router' // import router

const email = ref("")
const password = ref("")
const errMsg = ref() // firebase auth error codes
const router = useRouter() // get a reference to our vue router

const register = () => {
  // need .value because ref()
  const auth = getAuth() // from firebase/auth
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in!")
      console.log(auth.currentUser)
      router.push("/feed")
    })
    // show firebase auth error codes
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        default:
          errMsg.value = "Email or password was incorrect"
          break
        case "auth/invalid-email":
          errMsg.value = "Invalid email!"
          break
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found"
          break
        case "auth/wrong-password":
          errMsg.value = "Incorrect password"
          break
      }
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed")
    })
    .catch((error) => {
      // handles error codes
    })
}
</script>