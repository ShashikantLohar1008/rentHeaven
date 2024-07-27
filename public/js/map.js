mapboxgl.accessToken = mapToken;
console.log(mapToken);


const map = new mapboxgl.Map({
  container: 'map',
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/streets-v12',
  center:[77.209,28.6139],
  zoom: 8
});

console.log("this"+coordinates[0]+' '+coordinates[1]);
// let cor=[2.3514,48.8575];
// const marker1 = new mapboxgl.Marker()
// .setLngLat([12.554729, 55.70651])//listing.geo.coordinates
// .addTo(map);


 