<template>
  <pre>Click Event</pre>
   <div class="container">
      <div class="row">
         <div class="col-md-12">
                  <p class="h3 ">Hello <span class="fw-bold">{{ this.msg }}</span></p>
                  <button class="btn btn-success m-1" @click="greet('Good Morning')">Good Morning</button>
                  <button class="btn btn-warning m-1" @click="greet('Good Evening')">Good Evening</button>
                  <button class="btn btn-danger m-1" @click="greet('Good Night')">Good Night</button>
         </div>
      </div>
   </div>
</template>
<script>
export default {
  name: 'GreetingItem',
  data: function () {
    return {
      msg: ''
    }
  },
  methods: {
    greet: function (value) {
      this.msg = value
    }
  }
}
</script>
