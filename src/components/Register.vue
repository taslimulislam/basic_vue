<template>
  <pre>Form handeling </pre>
      <div class="row">
         <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-success text-white">
              <p class="h3">Register</p>
            </div>
            <div class="card-body bg-light">
              <form @submit.prevent="register()">
                <div class="md-2">
                  <input v-model="user.name" type="text" placeholder="Name" class="form-control">
                </div>
                <div class="md-2 mt-1">
                  <input v-model="user.email" type="email" placeholder="Email" class="form-control">
                </div>
                <div class="md-2 mt-1">
                  <input v-model="user.password" type="Password" placeholder="Password" class="form-control">
                </div>
                <div class="md-2 mt-1 float-end">
                  <input type="submit" value="Register" class="btn btn-success">
                </div>
              </form>
            </div>
          </div>
         </div>
      </div>
</template>
<script>
export default {
  name: 'RegisterItem',
  data: function () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register: function () {
      console.log(this.user)
    }
  }
}
</script>
