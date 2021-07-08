<template>
  <div id="nav">
    <top-bar :authUser="authUser" :is_signed_in="is_signed_in"
            :username="username"></top-bar>
  </div>
  <router-view :authUser="authUser" />
</template>

<script>
  import topBar from './components/top-bar.vue'
  import firebase from './utilities/firebase'

  export default {
    name: 'App',
    components: {
      topBar,
    },
    data () {
      return {
        is_signed_in: false,
        username: null,
        authUser: {},
      }
    },
    mounted() {
        // this.TestBackEnd();
        this.firebaseAuthCheck();
    },
    methods: {
      firebaseAuthCheck()
      {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log("Signed In")
            this.is_signed_in = true;
            this.authUser = user;
            this.username = this.authUser.displayName;
            console.log(user)
            // console.log(this.is_signed_in)
          } else {
            console.log("Signed Out")
            this.is_signed_in = false;
            this.username == null;
            this.authUser = {};
            // console.log(this.is_signed_in)
          }
        });
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  /* font-weight: bold; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ceedff;
}
</style>
