let type = document.getElementById("type");
let city = document.getElementById("city")
let temp = document.getElementById("temp");
let input = document.getElementById("input");
let image = document.getElementById("image");
let APIkey = "5457bc4141285334e19b88f828f1a218";

const data = async function(search) {
  let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&units=metric`);
  console.log(getData);
  let jsonData = await getData.json();
  //console.log(jsonData);
  // console.log(jsonData.main.temp);

  if (jsonData.cod == 400) {
    alert("Enter location")
    image.src = "e400.png";
    city.innerHTML = "";
    temp.innerHTML = "";
    type.innerHTML = "";
  }
  if (jsonData.cod == 404) {
    alert("Enter Right Location")
    image.src = "e404.jpg";
    city.innerHTML = search;
    temp.innerHTML = "";
    type.innerHTML = "";

  }


  city.innerHTML = search;
  temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
  type.innerHTML = jsonData.weather[0].main;
  if (type.innerHTML == "Clouds") {
    image.src = "cld1.png"
  } else if (type.innerHTML == "Clear") {
    image.src = "clr.png"
  } else if (type.innerHTML == "Suny") {
    image.src = "suny.jpg"
  } else if (type.innerHTML == "Rain") {
    image.src = "ww.webp"
  } else if (type.innerHTML == "Smoke") {
    image.src = "smok.jpg"
  } else if (type.innerHTML == "Fog") {
    image.src = "snw.png"
  } else if (type.innerHTML == "Haze") {
    image.src = "smok.jpg"
  } else {
    image.src = "fst1.png"
  }
  input.value = ""
}

function myfun() {
  search = input.value;
  data(search);
}


