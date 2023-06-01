const apiKey = "c4893b0e059c2db37594791b07187e09";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let weathers = document.querySelector(".weathers");
async function checkweather(city) {
  let response = await fetch(url + city + `&appid=${apiKey}`);
  if (response.status == 404 || response.status == 400) {
    document.querySelector(".error").style = "display: block";
    weathers.style = "display:none";
  } else {
    document.querySelector(".error").style = "display: none";
  }
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }
}
searchbtn.addEventListener("click", () => {
  checkweather(search.value);
  weathers.style = "display:block";
});
