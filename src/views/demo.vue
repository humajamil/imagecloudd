<template>
  <div class="hello">
<input v-model="name" placeholder="edit me">
<p>Message is: {{ name }}</p>
<input v-model="email" placeholder="edit me">
<p>Message is: {{ email }}</p>
<input v-model="password" placeholder="edit me">
<p>Message is: {{ password }}</p>
<input v-model="age" placeholder="edit me">
<p>Message is: {{ age }}</p>
<input v-model="profile_picture" placeholder="edit me">
<p>Message is: {{ profile_picture }}</p>
<button v-on:click="getInfo">sign up</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data: function () {
  return {
    name: 'Enter your Name',
    email: 'Enter your Email',
    password: 'Enter Your Password',
    age: 'Enter Your age',
    profile_picture: 'Enter Your picture',
  }
},
  props: {
    msg: String
  },

  methods: {
    getInfo() {
       const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name:this.name,email:this.email,password:this.password,age:this.age,profile_picture:this.profile_picture })
      };
      fetch('http://192.168.88.214:8080/user/signup' ,requestOptions)
        .then(res => this.items = res.json())
        .then(res =>console.log(res.message));
    }
  },
}
</script>

