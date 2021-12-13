<template>
  <v-app>
    <div class="backgruond">
    <v-main class="d-flex justify-center align-center mt-16 mb-16">
      <v-col cols="12" sm="4" md="4" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <h1 class="indigo--text mt-5">Reset Password</h1>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>

              <v-text-field
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="New Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
                <v-text-field
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="Confirm Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn type="submit" color="indigo" block>
                <span class="white--text px-8">Reset Password</span>
              </v-btn>
            </v-card-actions>
              <div class="mt-5">
                 <router-link class="text-decoration-none" to="/Login"> Already have an account?</router-link>
              </div>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    </div>
  </v-app>
</template>

<script>
import {
        emailRule,
        passwordRule, } from './validation/validation.js';

export default {
  name: 'resetpass',

  data: () => ({
    emailRule: emailRule,
    passwordRule:passwordRule,
    passwordShow:false,
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
      
       
      }
    }
  }
};
</script>
<style>

</style>