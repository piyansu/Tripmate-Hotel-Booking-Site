//Mapbox
document.addEventListener("DOMContentLoaded", function() {
  // Only initialize the map if the element exists
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Check if listingCoordinates is defined (it should be passed from the show template)
  // Default to Kolkata coordinates if not available
  const coordinates = typeof listingCoordinates !== 'undefined' ? 
    listingCoordinates : [88.3406, 22.7505]; // [longitude, latitude]
  
  // Initialize the map with listing coordinates
  // Note: Leaflet uses [latitude, longitude] format while GeoJSON uses [longitude, latitude]
  // So we need to reverse the coordinates
  const map = L.map("map").setView([coordinates[1], coordinates[0]], 13);

  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=jjpRIB8r0mopVZf7hhWR",
    {
      tileSize: 512,
      zoomOffset: -1,
      attribution:
        '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
    }
  ).addTo(map);

  // Add a marker at the listing location
  const marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);
  
  // Add a popup with listing info if title and location are available
  if (typeof listingTitle !== 'undefined' && typeof listingLocation !== 'undefined') {
    marker.bindPopup(`
      <strong>${listingTitle}</strong><br>
      <i class="fa-solid fa-location-dot"></i> ${listingLocation}
    `).openPopup();
  }
});