const API_KEY = "e46f570d82e21253abcee136927a2100";

const cities = [
    { name: 'Astana', id: 1526273 },
    { name: 'Almaty', id: 1526384 },
]

const selectElem = document.querySelector('#cities');
selectElem.onchange = changeCity;
function changeCity() {
    setCity(selectElem.value);
}



function setCity(cityName = "Astana") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&appid=${API_KEY}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.name').innerHTML = data.name;
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg';
            document.querySelector('.description').innerHTML = data.weather[0]['description'];
            document.querySelector('.icon li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //catch any errors
        });

}
setCity();
