<template>
  <v-container>
    <v-layout column>
      <v-flex xs6 offset-xs1>
        <panel title="Manage User">
          <div v-for="user in users" :key="user.id">
            {{user.email}}
            {{user.password}}
            <v-btn>klik</v-btn>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import UserlistService from '@/services/UserlistService'

export default {
  data () {
    return {
      users: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.users = (await UserlistService.getAll()).data.users
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
