<template>
  <pre>UserList</pre>
      <div class="row">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-light">
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
                <td>{{ user.name }}</td>
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
import { UserService } from '../services/UserService.js'
export default {
  name: 'UserListtem',
  data: function () {
    return {
      users: UserService.getAllUsers()
    }
  }
}
</script>
