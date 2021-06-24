function initMap() {
  const mapWrapper = document.getElementById("map");
  const map = new google.maps.Map(mapWrapper, {
    center: { lat: 46.6495511, lng: 32.5377419 }, // координати центру
    zoom: 8, // зум
  });
}
function Marker() {
  const marker = new google.maps.Marker({
    position: { lat: 46.6495511, lng: 32.5377419 }, // координати
    map: map, // об'єкт карти
    title: "Near Glendale",
  });
}
