mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXJhdmk3IiwiYSI6ImNrdnhqc3BuazBsaDYyd3FpZ2M5NWYwMmkifQ.PRrPkVOL6OJIpOXQ8u5lTQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-79.4512, 43.6568],
zoom: 13
});
 
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);