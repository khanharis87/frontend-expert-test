<template>
<layout v-if='showMap'> 
  <desk-header slot="header" :title="title"></desk-header>
  <db-map slot="sideMap"></db-map>
  <desk-card slot="desksAvailable" class="col-sm-6" v-for="row in rows" :key="row.id" :desk="row"></desk-card>
</layout>
</template>

<script>
import { mapGetters } from 'vuex';

import Layout from './components/Layout.vue'
import DeskHeader from './components/DeskHeader.vue'
import DbMap from './components/DbMap.vue'
import DeskCard from './components/DeskCard.vue'

export default {
  name: 'app',
  components: {
    layout: Layout,
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
  //Component Lifecycle hook, dispatches vuex action to set data in store
  beforeCreate() {
    this.$store.dispatch('setStore').then(() => {
      this.showMap = true
    }) 
  },
  //Computed property, use here to get the state from vuex getters
  computed: {
    ...mapGetters(['rows'])
  }
}
</script>
