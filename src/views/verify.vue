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
                <h1 class="text-center mb-10 mt-5 indigo--text">Your account is almost ready</h1>
                <h3 class="mt-3 text-center">
                        An email to [email address] has been sent with
                        instructions to activate your account. The activation
                        link is only valid for 48 hours. If you don't receive
                        the instructions try checking your junk or spam
                        filters..
                      </h3>
                      <div class="text-center mt-3">
                      <v-btn color="indigo" dark>
                          <router-link
                            class="text-decoration-none white--text"
                            to="/Login"
                            >Go to Login Page</router-link
                          >
                        </v-btn>
                      </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    </div>
  </v-app>
</div> 
</template>

<script>

export default {
  name : 'verify',
  
  data(){
    return{
      
    }
  },
  methods:{
   
  }
}
</script>
<style>
.background{
  background-image: url('https://images.unsplash.com/photo-1581423793081-2c07e7a0b92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  height: 100%;
}
</style>
