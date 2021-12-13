<template>
  <div>
    <Navbar />
    <v-container>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
          <v-card>
            <v-toolbar flat color="primary" dark>
              <v-toolbar-title>User Profile</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
              <v-tab style="justify-content: start">
                <v-icon left> mdi-account </v-icon>
                Profile Settings
              </v-tab>
              <v-tab>
                <v-icon left> mdi-lock </v-icon>
                Password Privacy
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <h1 class="text-center mb-10 mt-5 indigo--text">Profile</h1>
                    <v-form v-on:submit.prevent="updateProfileInfo" ref="form">
                      <v-row>
                        <v-col class="mx-auto" cols="12" sm="12" md="12" lg="6">
                          <v-avatar size="150" class="mb-10">
                            <img
                              :src="
                                currentUser.user_profile_image_path +
                                '/' +
                                currentUser.profile_image
                              "
                              alt="upload"
                            />
                          </v-avatar>
                          <v-avatar size="150" color="indigo">
                            <img
                              src="https://images.unsplash.com/photo-1578399146091-18082eb00bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80"
                            />
                          </v-avatar>

                          <!-- <div class="d-flex align-center mb-3">
                       
                        <v-btn
                          v-on:click="updateProfileInfo"
                          color="blue darken-4"
                          class="white--text px-10 ms-5"
                          large
                          >Upload</v-btn
                        >
                      </div> -->

                          <v-file-input
                            accept="image/*"
                            label="Upload Profile Picture"
                            v-on:change="storeImg"
                            filled
                            shaped
                          ></v-file-input>

                          <v-text-field
                            v-model="userData.name"
                            label="Enter your name"
                            prepend-icon="mdi-account"
                            name="name"
                            type="text"
                            filled
                            shaped
                          >
                          </v-text-field>

                          <!-- <v-text-field
                        v-model="email"
                        label="Enter your email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="email"
                        filled
                        shaped
                      >
                      </v-text-field> -->

                          <!-- <v-text-field
                       v-model="password"
                        label="Enter your password"
                        name="password"
                        prepend-icon="mdi-lock"
                        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow"
                        :type="passwordShow ? 'text' : 'password'"
                        filled
                        shaped
                      >
                      </v-text-field> -->

                          <v-text-field
                            v-model="userData.age"
                            label="Enter your Age"
                            name="age"
                            prepend-icon="mdi-calendar"
                            type="number"
                            filled
                            shaped
                          >
                          </v-text-field>

                          <v-btn
                            type="submit"
                            color="indigo"
                            large
                            block
                            outlined
                            >Update Profile</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <h1 class="text-center mb-10 mt-5 indigo--text">
                      Reset Password
                    </h1>
                    <v-form @submit.prevent="submitHandler1" ref="form">
                      <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6" class="mx-auto">
                          <v-text-field
                            v-model="userpass.old_password"
                            label="Enter your Old password"
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

                          <v-text-field
                            v-model="userpass.password"
                            label="Enter your New password"
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

                          <v-text-field
                            v-model="userpass.password_confirmation"
                            label="Enter your Confirm password"
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
                          <v-btn
                            type="submit"
                            color="indigo"
                            large
                            block
                            outlined
                            >Change Password</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text> </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      currentUser: "",
      userData: {
        name: "",
        age: "",
        profile_image: "",
      },
      userpass: {
        old_password: "",
        password: "",
        password_confirmation: "",
      },
      passwordShow: false,
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
    updateProfileInfo() {
      this.$store.dispatch("updateProfile", this.userData);
    },
    updateProfileInfo1() {
      this.$store.dispatch("resetPass", this.userpass);
    },
  },
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currentUser);
    this.userData.name = this.currentUser.name;
    this.userData.age = this.currentUser.age;
    this.userData.profile_image = this.currentUser.profile_image;
    console.log(this.userData);
  },
};
</script>