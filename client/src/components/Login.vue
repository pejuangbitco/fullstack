<template>
  <v-container>
    <v-layout column>
      <v-flex xs6 offset-xs1>
        <panel title="Masuk">
          <form name="login-user" autocomplete="off">
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="password"
              v-model="password"
              type="password"
              aria-autocomplete="new-password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn class="cyan" @click="login">Masuk</v-btn>
          </form>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
