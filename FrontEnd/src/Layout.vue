<template>
  <NavBar />
  <div id="main-container">
    <ToolBar />
    <component id="tool-container" :is="currentTab"></component>
    <div id="map"></div>
  </div>
</template>

<script>
import LayerList from "./LayerList.vue";
import NavBar from "./NavBar.vue";
import ToolBar from "./ToolBar.vue";
import { initLeaflet } from "./mapStore";

export default {
  data() {
    return {
      currentTab: "LayerList",
    };
  },
  methods: {},
  mounted() {
    initLeaflet();

    // listen events
  },
  components: {
    LayerList,
    NavBar,
    ToolBar,
  },
};
</script>

<style scoped>
#tool-container {
  flex-basis: 250px;
}

#main-container {
  display: flex;
  align-items: stretch;
  flex-grow: 1;
}

#map {
  flex-grow: 1;
}
</style>

<style src="leaflet/dist/leaflet.css"></style>
