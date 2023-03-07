import L from "leaflet";

let map = null;

export const mapStore = {
  init() {
    map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  },
  addLayer(layerURL, option) {
    L.tileLayer(layerURL, option).addTo(map);
  },
  removeLayer(index) {},
};
