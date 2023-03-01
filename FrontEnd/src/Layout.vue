<template>
    <NavBar id="navbar"/>
    <div id="main-container">
        <ToolBar />
        <Layer id="tool-container"/>
        <div id="map"></div>
    </div>
</template>

<script>
import Layer from './Layer.vue';
import NavBar from './NavBar.vue';
import ToolBar from './ToolBar.vue';
import { mapStore } from './mapStore';

export default {
    data() {
        return {};
    },
    methods: {

    },
    mounted() {
        mapStore.init();

        // listen events
    },
    components: {
        Layer, NavBar, ToolBar
    }
}
</script>

<style scoped>
#navbar {
    background-color: var(--main-color);
    padding: 0.3em 0.7em;
    color: white;
    flex-basis: 2.3em;
    display: flex;
    align-items: center;
}

#tool-container {
    flex-basis: 5em;
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