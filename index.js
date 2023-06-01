const apiKey = "c4893b0e059c2db37594791b07187e09";
const url =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=asokoro";
async function checkweather() {
  let response = await fetch(url + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
}
checkweather();
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp;
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed;
