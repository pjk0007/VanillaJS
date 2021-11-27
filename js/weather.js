const weather = document.querySelector(".weather__info");
const city = document.querySelector(".city");
const realTime_API_KEY = "ea8213a92f5bb91f0f17de39ac65bf29";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${realTime_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      const temp = Math.round(data.main.temp);
      weather.innerText = `${data.weather[0].main} / ${temp}℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
