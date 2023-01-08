<template>
   <div class="container">
      <p>user details</p>
      <div v-if="loading">
        <spinner/>
      </div>
      <div class="row" v-if="!loading && Object.keys(user).length > 0">
        <div class="col">
          <pre>{{ user }}</pre>
        </div>
      </div>
   </div>
</template>
<script>
import { UserService } from '../services/UserService.js'
import Spinner from './Spinner.vue'
export default {
  name: 'UserDetails',
  components: { Spinner },
  data: function () {
    return {
      loading: false,
      user: {},
      errorMessage: null
    }
  },
  created: async function () {
    const userId = this.$route.params.userId
    try {
      this.loading = true
      const response = await UserService.getUser(userId)
      this.loading = false
      this.user = response.data
    } catch (error) {
      this.loading = false
      this.errorMessage = error
    }
  }
}
</script>
