// Location map initiate
mapboxgl.accessToken =
  "pk.eyJ1IjoibWVlcmRpcmF5YWFoIiwiYSI6ImNsejM4eGE1bjFyYTQyaW9pbTA1NmljbmwifQ.BEadc-I6kSOCVTT6O9CNug";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  projection: "globe", // Display the map as a globe, since satellite-v9 defaults to Mercator
  zoom: 1,
  center: [30, 15],
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

// The following values can be changed to control rotation speed:

// At low zooms, complete a revolution every two minutes.
const secondsPerRevolution = 240;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

let userInteracting = false;
const spinEnabled = true;

function spinGlobe() {
  const zoom = map.getZoom();
  if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
    let distancePerSecond = 360 / secondsPerRevolution;
    if (zoom > slowSpinZoom) {
      // Slow spinning at higher zooms
      const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
      distancePerSecond *= zoomDif;
    }
    const center = map.getCenter();
    center.lng -= distancePerSecond;
    // Smoothly animate the map over one second.
    // When this animation is complete, it calls a 'moveend' event.
    map.easeTo({ center, duration: 1000, easing: (n) => n });
  }
}

// Pause spinning on interaction
map.on("mousedown", () => {
  userInteracting = true;
});
map.on("dragstart", () => {
  userInteracting = true;
});

// When animation is complete, start spinning if there is no ongoing interaction
// map.on("moveend", () => {
//   spinGlobe();
// });

// spinGlobe();

const map2 = new mapboxgl.Map({
  container: "map", // container ID
  center: [-122.420679, 37.772537], // starting position [lng, lat]
  zoom: 13, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11", // style URL or style object
  hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
  // Use `transformRequest` to modify requests that begin with `http://myHost`.
  transformRequest: (url, resourceType) => {
    if (resourceType === "Source" && url.startsWith("http://myHost")) {
      return {
        url: url.replace("http", "https"),
        headers: { "my-custom-header": true },
        credentials: "include", // Include cookies for cross-origin requests
      };
    }
  },
});
