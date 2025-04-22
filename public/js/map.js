document.addEventListener("DOMContentLoaded", function () {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;
  
  // Ensure we have valid coordinates
  let coordinates;
  
  if (Array.isArray(listingCoordinates) && listingCoordinates.length >= 2) {
    coordinates = listingCoordinates;
  } else {
    // Default coordinates (Kolkata as fallback)
    coordinates = [88.3406, 22.7505];
    console.warn("Using default coordinates - invalid coordinates provided");
  }
  
  // Leaflet expects [lat, lng] but GeoJSON uses [lng, lat]
  // So we need to swap the coordinates for Leaflet
  const lat = coordinates[1];
  const lng = coordinates[0];
  
  console.log(`Setting map view to: lat=${lat}, lng=${lng}`);
  
  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=jjpRIB8r0mopVZf7hhWR",
    {
      tileSize: 512,
      zoomOffset: -1,
      attribution:
        '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
    }
  ).addTo(map);

  // Add marker with the same coordinate transformation
  const marker = L.marker([lat, lng]).addTo(map);

  if (listingTitle && listingLocation) {
    marker
      .bindPopup(
        `<strong>${listingTitle}</strong><br><i class="fa-solid fa-location-dot"></i> ${listingLocation}`
      )
      .openPopup();
  }
  
  // Force map to recalculate its size if it was hidden
  setTimeout(() => {
    map.invalidateSize();
  }, 300);
});