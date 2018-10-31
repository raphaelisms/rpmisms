<template>
  <div class="hello container col-md-4">
    <h1 class="p-3">{{ msg }}</h1>
    <h2 class="p-3">What this is about:</h2>
    <p class="p-3">
      Hi. I'm Raphael Platte. I made this site over the weekend to show off my skills<br>
      It's built using Node.js, and runs on Vue.js. 
    </p>
    <p>To see more of my work, click over to "My Work". Enjoy!</p>
    <h2></h2>
    <div class="pb-3">
      <ul class="">
        <li><router-link to='/MyWork'>My Work</router-link></li>
        <li><a href="github.com/raphaelisms" target="_blank">My Github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
