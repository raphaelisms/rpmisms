<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" fixed='top' xstyle="light">

        <b-navbar-brand><router-link to='/'>Raphael Platte</router-link></b-navbar-brand>

       <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="mr-auto ml-3">
  
              <b-nav-item class="">
                <router-link to='/MyWork'>My Work</router-link>
              </b-nav-item>
  
              <b-nav-item class="">
                <router-link to='/about'>About Me</router-link>
              </b-nav-item>
              
            </b-navbar-nav>
       </b-collapse>

      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
</style>
