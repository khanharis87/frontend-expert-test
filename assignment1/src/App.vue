<template>
  <div id="app" class="container">
    <desk-header :title='title'></desk-header>
    <div v-if='showMap' class="row">
      <!--Map component container-->
      <div class="col-4">
        <db-map ></db-map>
      </div>
      <!--Desk card component container-->
      <div class="col-sm-8">
        <div class="row">
            <div class="col-sm-6" v-for="row in rows" :key="row.id"> 
              <desk-card :desk="row"></desk-card>
            </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

import DbMap from './components/DbMap.vue'
import DeskCard from './components/DeskCard.vue'
import DeskHeader from './components/DeskHeader.vue'

export default {
  name: 'app',
  components: { 
    dbMap: DbMap,
    deskCard: DeskCard,
    deskHeader: DeskHeader
  },
  data () {
    return {
      showMap: false,
      title: 'Deskbookers'
    }
  },
  beforeCreate() {
    this.$store.dispatch('setStore').then(() => {
      this.showMap = true
    }) 
  },
  computed: {
    ...mapGetters(['rows'])
  }
}
</script>

<style>
#app {
  margin: 0
}
</style>
