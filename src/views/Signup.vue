<template>
  <div>
    <v-app>
      <div class="background">
        <v-main>
          <v-container class="fill-height mt-10" fluid>
            <v-row align="center" justify="center" dense>
              <v-col cols="12" sm="8" md="6" lg="6">
                <v-card>
                  <v-card-text>
                    <h1 class="text-center mb-10 mt-5 indigo--text">Sign-Up</h1>
                    <v-form @submit.prevent="submitHandler" ref="form">
                      <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                          <v-text-field
                            v-model="userData.name"
                            :rules="UsernameRule"
                            label="Enter your name"
                            prepend-icon="mdi-account"
                            name="name"
                            type="text"
                            filled
                            shaped
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="6">
                          <v-text-field
                            v-model="userData.email"
                            :rules="emailRule"
                            label="Enter your email"
                            name="email"
                            prepend-icon="mdi-email"
                            type="email"
                            filled
                            shaped
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="6">
                          <v-text-field
                            :rules="passwordRule"
                            v-model="userData.password"
                            label="Enter your password"
                            name="password"
                            prepend-icon="mdi-lock"
                            :append-icon="
                              passwordShow ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="passwordShow = !passwordShow"
                            :type="passwordShow ? 'text' : 'password'"
                            filled
                            shaped
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="6">
                          <v-text-field
                            :rules="passwordRule"
                            v-model="userData.password_confirmation"
                            label="Enter your password"
                            name="Conform password"
                            prepend-icon="mdi-lock"
                            :append-icon="
                              passwordShow ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="passwordShow = !passwordShow"
                            :type="passwordShow ? 'text' : 'password'"
                            filled
                            shaped
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="12">
                          <v-text-field
                            v-model="userData.age"
                            :rules="numberRule"
                            label="Enter your Age"
                            name="age"
                            prepend-icon="mdi-calendar"
                            type="number"
                            filled
                            shaped
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="12">
                          <v-file-input
                            v-on:change="storeImg"
                            label="File input"
                            filled
                            shaped
                            prepend-icon="mdi-camera"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                      <v-btn type="submit" color="indigo" large block outlined
                        >Register</v-btn
                      >
                      <v-card-actions class="text--secondary">
                        <div>
                          Already have an account?
                          <router-link class="text-decoration-none" to="/Login"
                            >Sign In</router-link
                          >
                        </div>
                      </v-card-actions>
                      <div>
                        <router-link class="text-decoration-none" to="/verify"
                          >Verification</router-link
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </div>
    </v-app>
    <v-snackbar top color="green" :value="getSnackbarStutes" timeout="5000">
      {{ getSnackbarErrorMsg }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  UsernameRule,
  emailRule,
  passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";
export default {
  name: "Signup",

  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        age: "",
        profile_image: "",
      },
      emailRule: emailRule,
      passwordRule: passwordRule,
      UsernameRule: UsernameRule,
      numberRule: numberRule,
      imageRule: imageRule,
      passwordShow: false,
      snackbar: false,
    };
  },
  methods: {
    storeImg(event) {
      let vm = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          vm.userData.profile_image = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    submitHandler() {
      console.log(this.userData);
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateSnackBarStatus");
        this.$store.dispatch("loadUser", this.userData);
        // this.$router.push({ name: "Login" });
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
.background {
  background-image: url("https://images.unsplash.com/photo-1581423793081-2c07e7a0b92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  height: 100%;
}
</style>
