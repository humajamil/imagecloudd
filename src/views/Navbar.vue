<template>
  <div>
    <v-app-bar color="indigo" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>ImageCloud</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="blue" @click="sheet = !sheet">
        <v-icon class="mr-2">mdi-cloud-check</v-icon>
        START UPLOAD
      </v-btn>
      <v-btn to="/login" text>
        <v-icon class="mr-2">mdi-logout</v-icon>
        logout
      </v-btn>
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="400px">
          <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
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
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              ><router-link class="text-decoration-none" to="/Uploadimage"
                >Home</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              ><router-link class="text-decoration-none" to="/Profile"
                >Account</router-link
              ></v-list-item-title
            >
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-image-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              ><router-link class="text-decoration-none" to="/Gallery"
                >Gallery</router-link
              ></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: () => ({
    sheet: false,
    drawer: false,
    group: null,
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { "My-Awesome-Header": "header value" },
    },
  }),
};
</script>