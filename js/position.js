function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const accuracy = Math.floor(position.coords.accuracy);
  console.log("You live in", lat, lng, accuracy);
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);