import L from "leaflet";
import { defineStore } from "pinia";

let _map = null;

// use different argument list to construct different layer object
class Layer {
  constructor(type, option) {
    this.type = type;
    this.option = option;
    if (type === "XYZ" && arguments.length === 3) {
      this.url = arguments[2];
    } else {
      throw new Error("layer constructed with wrong arguments!");
    }
  }

  addToMap() {
    if (this.type === "XYZ") {
      L.tileLayer(this.url, this.option).addTo(_map);
    }
  }
}

export function initLeaflet() {
  _map = L.map("map").setView([51.505, -0.09], 13);
  const map = useMapStore();
  map.push(
    "XYZ",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
}

export const useMapStore = defineStore("map", {
  state() {
    return {
      layerList: [],
    };
  },
  actions: {
    push() {
      const newLayer = new Layer(...arguments);
      this.layerList.push(newLayer);
      newLayer.addToMap();
    },
  },
});
