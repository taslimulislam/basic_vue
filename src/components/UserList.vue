<template>
  <pre>UserList</pre>
  <div class="row">
    <div class="col">
          <div v-if="loading">
            <spinner/>
          </div>
          <div v-if="errorMessage">
            <p class="text-dender">{{ errorMessage }}</p>
          </div>
          <table v-if="!loading && users.length > 0" class="table table-hover text-center table-striped">
            <thead class="bg-info">
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Website</th>
              <th>Location</th>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td><router-link :to="'/users/'+user.id" >{{ user.name }}</router-link></td>
                <td>{{ user.email }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.website }}</td>
                <td>{{ user.address.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>
<script>
import Spinner from './Spinner.vue'
import { UserService } from '../services/UserService.js'
export default {
  name: 'UserListtem',
  components: { Spinner },
  data: function () {
    return {
      loading: false,
      users: [],
      errorMessage: null
    }
  },
  created: async function () {
    try {
      this.loading = true
      const response = await UserService.getAllUsers()
      this.loading = false
      this.users = response.data
    } catch (error) {
      this.loading = false
      this.errorMessage = error
    }
  }
}
</script>
