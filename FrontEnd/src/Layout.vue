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
import L from 'leaflet';

let map;

export default {
    data() {
        return {};
    },
    methods: {

    },
    mounted() {
        // initialize Leaflet map object
        map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

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