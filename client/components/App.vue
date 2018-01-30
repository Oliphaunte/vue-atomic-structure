<template>
  <div id="app">
    <HeaderMain />
    <router-view></router-view>
    <FooterMain />
  </div>
</template>

<script>
  import HeaderMain from "./templates/layout/header_main" 
  import FooterMain from "./templates/layout/footer_main" 

  export default {
    name: 'app',
    components: {
      HeaderMain,
      FooterMain
    }
  }
</script>