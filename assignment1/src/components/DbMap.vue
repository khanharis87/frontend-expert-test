<template>
<div class="col-4 align-self-start">
  <div class="db-map" id="map"></div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import GoogleMapsLoader from 'google-maps'

	export default {
    name: 'db-map',
    mounted() {
      const el = document.getElementById('map')
      GoogleMapsLoader.KEY = 'AIzaSyAteewzC5dESwC4rgFXhhDqMk_yUi3N8cQ'
      const {e, n, s, w} = this.bounds
      GoogleMapsLoader.load((google) => {
        const sw = new google.maps.LatLng(s, w)
        const ne = new google.maps.LatLng(n, e)
        const bounds = new google.maps.LatLngBounds(sw, ne)
        const map = new google.maps.Map(el, {
          zoom: 8,
          center: bounds.getCenter()
        })

        this.locations.map((location, i) => {
          const latLngPos = new google.maps.LatLng(location[0], location[1])

          return new google.maps.Marker({
            position: latLngPos,
            map,
            clickable: true,
            label: this.rows[i].name
          })
        })
      })
    },
    computed: {
      ...mapGetters(['locations', 'bounds','rows' ])
    }
  }
</script>

<style scoped>
  .db-map {
    width: 300px;
    height: 250px;
    margin: 0 auto;
    background: gray;
  }
</style>
