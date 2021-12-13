<template>
  <v-app>
    <div class="backgruond">
      <v-main class="d-flex justify-center align-center mt-16 mb-16">
        <v-col cols="12" sm="4" md="4" lg="4" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <h1 class="indigo--text mt-5">Forget Password</h1>
              <h4>
                Enter the email address that are associated with your account
              </h4>
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
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn type="submit" color="indigo" block>
                  <span class="white--text px-8">Reset Password</span>
                </v-btn>
              </v-card-actions>
              <div class="mt-5">
                <router-link class="text-decoration-none" to="/Login">
                  Already have an account?</router-link
                >
              </div>
              <!-- <div class="mt-5">
                 <router-link class="text-decoration-none" to="/resetpass"> reset</router-link>
              </div> -->
            </v-form>
          </v-card>
        </v-col>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { emailRule } from "./validation/validation.js";

export default {
  name: "Forgetpass",

  data: () => ({
    userData: {
      email: "",
    },
    emailRule: emailRule,
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        if (this.getTesting != "") {
        }
        this.$store.dispatch("ForpassData", this.userData);
      }
    },
  },
};
</script>
