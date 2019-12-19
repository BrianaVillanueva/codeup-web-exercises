mapboxgl.accessToken = mapToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
    zoom: 15,
    center: [-98.483700, 29.435360]
});





var markerOptions = {       //added this line to change the marker color//had to pass it through the once empty () on var marker
    color: "#2D0A51"
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.483700, 29.435360])
    .addTo(map);






var popup = new mapboxgl.Popup()
    .setLngLat([-98.483700, 29.435360])
    .setHTML("<em>Paramour<br>210-340-9880</em>")

marker.setPopup(popup);
