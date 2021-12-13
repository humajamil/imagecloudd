<template>
  <div class="background">
    <!-- start of the navbar -->
    <v-app-bar color="indigo" dark app>
      <v-toolbar-title>ImageCloud</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/login" text> Login </v-btn>

      <v-btn class="ml-3" to="/Signup" text> Create Account </v-btn>
    </v-app-bar>
    <!-- end of the navbar -->
    <!-- slider -->
    <v-container fluid>
      <v-row  class="mt-10 mb-13" align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="8" lg="8">
          <v-card color="transparent">
            <v-card-text>
              <div>
                <v-carousel
                  cycle
                  height="400"
                  hide-delimiter-background
                  show-arrows-on-hover
                >
                  <v-carousel-item v-for="(slide, i) in slides" :key="i" >
                    <v-sheet height="100%">
                       <img :src="slide.src" />
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
         
        ],
        slides: [
          {
            src: 'https://images.unsplash.com/photo-1508770232642-16d4252d4a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
           {
            src: 'https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
          },
           {
            src: 'https://images.unsplash.com/photo-1523946638354-61fa6b810524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
           {
            src: 'https://images.unsplash.com/photo-1454473332662-09275b52e5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      }
    },
  }
</script>
<style>
.background{
    background-image: url('https://images.unsplash.com/photo-1581423793081-2c07e7a0b92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    background-size: auto;
    height: 100%;
}
</style>