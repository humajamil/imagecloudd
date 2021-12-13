<template>
  <div>
    <Navbar />
    <v-app style="background-color: #e2e2e2">
      <v-main style="padding: 0px">
        <v-container>
           <v-row align="center" justify="center" dense>
          <v-col cols="12"  xs="3" sm="3" md="3" lg="2">
             <v-avatar size="150" color="indigo">
              <img  src="https://images.unsplash.com/photo-1578399146091-18082eb00bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80"/>
            </v-avatar>
          </v-col>
           <v-col cols="12"  xs="9" sm="9" md="9" lg="10">
            <h1>Huma jamil</h1>
            <p>humajamil12@gmail.com</p>
            <a>0 Following | 0 Followers</a>  
          </v-col>
           </v-row>
        </v-container>

        <v-container fluid>
          <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="6" lg="8">
              <v-card>
                <v-card-text>
                  <div class="mt-10 mb-10">
                    <h1 class="black--text text-center">
                      Upload and share your images.
                    </h1>
                  </div>

                  <div>
                    <div class="text-center">
                      <!-- <v-btn color="blue" dark @click="sheet = !sheet">
                        START UPLOAD
                      </v-btn> -->
                      <div class="py-3">
                            <v-container>
                              <vue-dropzone
                                ref="myVueDropzone"
                                id="dropzone"
                                :options="dropzoneOptions"
                              >
                              </vue-dropzone>
                            </v-container>
                          </div>
                      <v-bottom-sheet v-model="sheet">
                        <v-sheet class="text-center" height="400px">
                          <v-btn
                            class="mt-6"
                            text
                            color="red"
                            @click="sheet = !sheet"
                          >
                            close
                          </v-btn>
                          <div class="py-3">
                            <v-container>
                              <vue-dropzone
                                ref="myVueDropzone"
                                id="dropzone"
                                :options="dropzoneOptions"
                              >
                              </vue-dropzone>
                            </v-container>
                          </div>
                        </v-sheet>
                      </v-bottom-sheet>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
    vueDropzone: vue2Dropzone,
  },
  data: () => ({
    sheet: false,
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { "My-Awesome-Header": "header value" },
    },
  }),
};
</script>

<style>
</style>