var city;
async function onSearch() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
    var url=`https://api.openweathermap.org/data/2.5/weather?q=tanger&appid=d78f7c47ab341e4363a663482f4b3470&units=metric`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            display(weatherManager.currentForecast)
        })
    }

    document.getElementById("cityInput").value = ""
    city = undefined
}

function display(currentForecast) {
    document.getElementById('city').textContent= currentForecast.city
    document.getElementById('temp').textContent= currentForecast.temp+ ""+ "°C"

    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+currentForecast.iconCode+".png";

    document.getElementById('desc').textContent= currentForecast.description
    document.getElementById('country').textContent= currentForecast.humidity

                                 }
    let dateToday =document.getElementById("date");
    let today = new Date();
    let day =`${today.getDate() < 10?"0" :""}${today.getDate()}`
    let month =`${(today.getMonth()+1) < 10?"0" :""}${today.getMonth()+1}`

    let year =today.getFullYear();

    dateToday.textContent =`${day}/${month}/${year} `