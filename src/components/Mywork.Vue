<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <b-container class="">
        <b-card class="col-md-10 mx-auto my-4">
            <b-card-header>
                <h2>The Firing Pin</h2>    
            </b-card-header>
            <b-card-body>
                I'm the webmaster for this fast-growing local business, and I've revamped their
                e-commerce strategy and web presence, as well as implemented SEO strategies to boost sales and name recognition.
            </b-card-body>
            <b-button class="mb-3" variant="primary" src="https://americanmadetargets.com">See my work here</b-button>
            <b-card-img src="https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=mc&screen=1280x1024&url=http%3A%2F%2Famericanmadetargets.com">
            </b-card-img>
        </b-card>

        <b-card class="col-md-10 mx-auto my-4">
            <b-card-header>
                <h2>St. Andrew's Camp</h2>    
            </b-card-header>
            <b-card-body>
               I spent a season as webmaster for this small summer camp, and oversaw the redesign and implementation of their wordpress site.
            </b-card-body>
            <b-button class="btn button mb-3" variant="primary" src="http://saintandrewscamp.org/">See my work here</b-button>
            <b-card-img src="https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=800x0&screen=1024x768&url=http%3A%2F%2Fsaintandrewscamp.org%2F">
            </b-card-img>
        </b-card>

        <b-card class="col-md-10 mx-auto my-4">
            <b-card-header>
                <h2>Brutalist Webstore</h2>    
            </b-card-header>
            <b-card-body>
                This webstore was built for a (flaky) client. They requested a brutalist design with strong colors, and I delivered exactly that. 
                They decided not to follow through with the site, but the webstore functionality remains.
            </b-card-body>
            <b-button class="mb-3" variant="primary" src="https://channelstore.roku.com/details/196097/peeps-tv">See my work here</b-button>
            <b-card-img src="https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=mc&screen=1024x768&url=https%3A%2F%2Fben-store-vue.herokuapp.com%2F">
            </b-card-img>
        </b-card>

        <b-card class="col-md-10 mx-auto my-4">
            <b-card-header>
                <h2>Peeps TV</h2>    
            </b-card-header>
            <b-card-body>
                I built this Roku application from the ground up, working with a team to port a 20,000 item video library into a totally foreign database. 
                I used a custom AWS S3/Cloudfront solution to deliver content to the frontend, and built playlists in Brightscript. 
            </b-card-body>
            <b-button class="mb-3" variant="primary" src="https://channelstore.roku.com/details/196097/peeps-tv">See my work here</b-button>
            <b-card-img src="https://image.roku.com/developer_channels/prod/f625254b74017eae3ebd49a79aca5c995c948e12bf81aff48f6e0204e45883e6.png">
            </b-card-img>
        </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'My Work'
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
