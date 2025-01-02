const input=document.getElementById('searchcity')
const button=document.getElementById('clickBtn')
const image=document.querySelector(".image")
const weatherDescription=document.getElementById('description')
const climateChange=document.getElementById('climate')
const humid=document.getElementById('humidity')
const windSpeed=document.getElementById('wind')


async function weatherchange(city){
const api_key="b88fb957c5a4f1fc54fd0382e87b30be";

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

const weather_data=await fetch(url).then(response=>response.json());

console.log(weather_data);

temparature.innerHTML=`${Math.round(weather_data.main.temp-273)}°C `;
climate.innerHTML=`${weather_data.weather[0].description}`
humidityweather.innerHTML=`${weather_data.main.humidity}%`
crispy.innerHTML=`${weather_data.wind.speed}km/h`



switch(weather_data.weather[0].main){
case 'Clouds':
    image.src="./assets/clouds.gif"
break;

case 'Clear':
    image.src="./assets/sky-sun.gif"
    break;

    case 'Rain':
    image.src="./assets/rain.webp"
    break;

    case 'Thunderstrome':
    image.src="./assets/strom.webp"
    break;

    case 'Haze':
        image.src="./assets/200w.gif"
        break;

        case "Mist":
            image.src="./assets/mist.jpg"
            break;

}





}

button.addEventListener('click',()=>{
    weatherchange(input.value)
})
