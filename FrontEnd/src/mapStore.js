import L, { tileLayer } from "leaflet";
import { defineStore } from "pinia";

let _map = null;
let id = 0;

// use different argument list to construct different layer object
class Layer {
  constructor(name, type, option) {
    this.id = id++;
    this.name = name;
    this.type = type;
    this.option = option;
    if (type === "XYZ" && arguments.length === 4) {
      this.url = arguments[3];
      this.layer = tileLayer(this.url, this.option);
      this.layer.addTo(_map);
    } else {
      throw new Error("layer constructed with wrong arguments!");
    }
  }
}

export function initLeaflet() {
  _map = L.map("map").setView([51.505, -0.09], 13);
  const map = useMapStore();
  map.push(
    "OpenStreetMap",
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
    push(name, type, options) {
      const newLayer = new Layer(...arguments);
      this.layerList.push(newLayer);
    },
  },
});
