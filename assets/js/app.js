let weatherForm = document.querySelector('.weather__form')
let weatherCity = document.querySelector('.weather__city')
let weatherApi = document.querySelector('.weather__api')
let APIURL = 'http://api.weatherapi.com/v1/current.json?key=65d887a1bc66486e817201832221007&aqi=no&q='

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let city = weatherCity.value;

    if(city ===""){
        weatherCity.style.border = "2px solid red";
        return false;
    }
    weatherCity.style.border = "none";

})


