<template>
  <div class="container mt-3 mb-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla blanditiis, accusamus velit expedita vel reprehenderit aliquam facilis magni veritatis architecto vitae, provident id quidem! Velit nihil temporibus laboriosam eum eveniet!</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
            <div class="card-body">
              <Counter/>
            </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-lg">
            <div class="card-body">
              <Greeting/>
            </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-lg">
            <div class="card-body">
              <Register/>
            </div>
        </div>
      </div>
      <div class="col-md-12 mt-3">
        <div class="card shadow-lg">
            <div class="card-body">
              <Auth/>
            </div>
        </div>
      </div>
      <div class="col-md-12 mt-3">
        <div class="card shadow-lg">
            <div class="card-body">
              <UserList/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Counter from '../components/Counter.vue'
import Greeting from '../components/Greeting.vue'
import Register from '../components/Register.vue'
import Auth from '../components/Auth.vue'
import UserList from '../components/UserList.vue'

export default {
  name: 'HomeView',
  components: {
    Counter, Greeting, Register, Auth, UserList
  }
}
</script>
