<!--
System: image upload App using Api
Developer: huma Jamil
Date: Dec 12, 2021
Organization: Programmer Force
Purpose:  this file View/SignIn.vue is responsible for user authentication and login into the system -->
<template>
  <v-app>
    <div class="backgruond">
      <v-main class="d-flex justify-center align-center mt-16 mb-16">
        <v-col cols="12" sm="6" md="4" lg="4" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <h1 class="indigo--text mt-5">Sign-in</h1>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  v-model="userData.email"
                  :rules="emailRule"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  prepend-inner-icon="mdi-account"
                  required
                />
                <v-text-field
                  v-model="userData.password"
                  :rules="passwordRule"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                />
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn type="submit" color="indigo" block>
                  <span class="white--text px-8">Login</span>
                </v-btn>
              </v-card-actions>
              <div class="mt-5">
                <router-link class="text-decoration-none" to="/Signup"
                  >Don't have an Account?</router-link
                >
              </div>
              <div class="mt-2 mb-5">
                <router-link class="text-decoration-none" to="/Forgetpass"
                  >Forget Password?</router-link
                >
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-main>
      <v-snackbar top color="red" :value="getSnackbarStutes" timeout="5000">
        {{ getSnackbarErrorMsg }}
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { emailRule, passwordRule } from "./validation/validation.js";

export default {
  name: "Login",

  data: () => ({
    userData: {
      email: "",
      password: "",
    },
    emailRule: emailRule,
    passwordRule: passwordRule,
    snackbar: false,
    passwordShow: false,
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateSnackBarStatus");
        this.$store.dispatch("loginUser", this.userData);
        this.$router.push({ name: "Uploadimage" });
      }
    },
  },
  computed: {
    ...mapGetters(["getSnackbarStutes"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
  },
};
</script>
<style>
.backgruond {
  background-image: url("https://images.unsplash.com/photo-1581423793081-2c07e7a0b92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  height: 100%;
}
</style>