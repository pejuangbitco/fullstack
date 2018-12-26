<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link  v-if="!$store.state.isUserLoggedIn" to="/login">Masuk</router-link>
      <router-link  v-if="!$store.state.isUserLoggedIn" to="/register">Daftar</router-link>
      <v-btn v-if="$store.state.isUserLoggedIn" @click="logout">logout</v-btn>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      this.$route.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
