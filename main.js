

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial


let API_kEY = "ad5b123c0277fec32f39f014dd51e65c";

getWeatherData = (city) =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather'

     const Full_url =  `${URL}?q=${city}&appid=${API_kEY}&units=imperial`
     const weatherPromise = fetch(Full_url);
     console.log(city)

     return weatherPromise.then((response) => {
        return response.json()
     })
}

function searchCity(){
    const city = document.getElementById("city-name").value;

     getWeatherData(city)
     .then((response) =>{
            showWeatherData(response)
            console.log(response)
     })
.catch((err) =>{
    console.log(err)
})

}

showWeatherData = (weatherData) => {
    document.getElementById('city-input').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('mintemp').innerText = weatherData.main.temp_min;
    document.getElementById('maxtemp').innerText = weatherData.main.temp_max;
}