<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container class="col-m3-8">
      <b-container>
        <b-row class="mb-5">
          <div class="col-4">
            <img class="img-fluid" style="border-radius: 50%;" src="../assets/profile.jpg" alt="">
          </div>
          <div class="col-8 my-auto">
            <h3>Raphael Platte</h3>
            <p style="text-justify: left;">I'm a front-end developer living in Rochester, NY.
            I love my work, and I'm always learning something new, or working on a new project. I love traveling and meeting people, and you can often find me deep in a good book.
            I spend my free time with my lovely girlfriend, Nina and our dog, Polly.</p>
          </div>
        </b-row>
      </b-container>  

      <div class="col-md-11 mx-auto py-8 py-3">
        <h3>My skills</h3>
        <p>I specialize in web development, with skills on the backend, as well as severla types of application programming. I'm a huge advocate for Test-Driven Development, and I breathe Agile. My technical skills include: <br>
  
        HTML/CSS, Javascript  SASS, Jekyll, Wordpress, AWS, PHP, SQL, Bootstrap, React, Brightscript, Python, SEO, Drupal, Web.py, and Rails, as well as
        4 years of shooting and editing video, in both creative and documentary settings.
  
        I spent 6 months managing my own team, developing an Apple TV and Roku Application. I understand the challenges of working with both remote and local teams, and I love the challenge to excel in either environment.
  
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'About Me'
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
