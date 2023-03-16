<template>
  <NavBar />
  <div id="main-container">
    <ToolBar />
    <Layer id="tool-container" />
    <div id="map"></div>
  </div>
</template>

<script>
import Layer from "./Layer.vue";
import NavBar from "./NavBar.vue";
import ToolBar from "./ToolBar.vue";
import { map } from "./mapStore";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    map.init();

    // listen events
  },
  components: {
    Layer,
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
