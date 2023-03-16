import L from "leaflet";
import { defineStore } from 'pinia';

let _map = null;

export const map = {
  init() {
    _map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(_map);
  }
};

export const useLayerStore = defineStore('layerList', {
  state() {
    return {
      layers: [ {type: 'XYZ', url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} ]
    }
  },
  actions: {
    push(layer) {
      if (layer.type === 'XYZ' && layer.hasOwnProperty('url')) {
        this.layers.push();
        L.tileLayer(url, layer.option).addTo(_map);
      }
    }
  }
})