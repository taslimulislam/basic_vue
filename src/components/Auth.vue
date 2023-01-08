<template>
  <pre>Conditional LogIn and LogOut</pre>
      <div class="row">
            <div v-if="isLoggedIn">
              <p class="h3 fw-bold text-success">Welcome Back</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed culpa beatae vitae quaerat natus voluptates maxime soluta inventore, tenetur repudiandae accusamus nam laboriosam veritatis assumenda pariatur sapiente officia et debitis!</p>
            </div>
            <div v-if="!isLoggedIn">
              <p class="h3 fw-bold text-danger">Thank you!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed culpa beatae vitae quaerat natus voluptates maxime soluta inventore, tenetur repudiandae accusamus nam laboriosam veritatis assumenda pariatur sapiente officia et debitis!</p>
            </div>
            <div>
              <button v-if="!isLoggedIn" class="btn btn-success btn-sm m-1" @click="login()">Login</button>
              <button v-if="isLoggedIn" class="btn btn-danger btn-sm m-1" @click="logout()">LogOut</button>
            </div>
          </div>
</template>
<script>
export default {
  name: 'AuthItem',
  data: function () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    login: function () {
      this.isLoggedIn = true
    },
    logout: function () {
      this.isLoggedIn = false
    }
  }
}
</script>
