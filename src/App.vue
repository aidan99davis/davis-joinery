<template>
  <div id="app">
    <div class="container">
      <nav-bar :pages="pages" class="navigation">
      </nav-bar>
      <router-view class="page"></router-view>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/navigation/navbar'
  export default {
    name: 'app',
    components: {
        NavBar
    },
      data() {
        return {
            pages: [
                {to: '/', label: 'Home'},
                {to:'/About', label: 'About'},
                {to: '/Contact', label: 'Contact Us'},
                {to: '/Gallery', label: 'Gallery'},
                // {to: '/Schedule', label: 'Schedule'}
            ]
        }
      }
  }
</script>

<style lang="less">
  html, body, .container  {
    height: 100%;
    max-width: 100% !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #FFFFFF;
  color: #2c3e50;
  height: 100%;
}
.row { height: 100%;}

  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .page {
    margin-top: 35px; /* Add a top margin to avoid content overlay */
    background-color: #e6e6e6;
  }

  .navigation {
    overflow: hidden;
    background-color: #333;
    position: fixed !important; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
  }
</style>
