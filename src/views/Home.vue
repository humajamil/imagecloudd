<template>
 <div>
   <!-- <About/> -->
   <Mainpage/>
 </div>
</template>

<script>
// import About from './About.vue'
import Mainpage from './Mainpage.vue'

  export default {
    name: 'Home',

    components: {
     Mainpage,
        // About
    },
  }
</script>
