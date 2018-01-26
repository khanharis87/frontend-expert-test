<template>
  <div class="db-map" id="map">
  </div>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'

	export default {
	  name: 'db-map',
    mounted() {
	    const el = document.getElementById('map')
      GoogleMapsLoader.load((google) => {
	      new google.maps.Map(el, {
          zoom: 14,
          center: new google.maps.LatLng(51.501527,-0.1921837)
        })
      })
    }
  }
</script>

<style scoped>
  .db-map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>
