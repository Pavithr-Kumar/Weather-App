const apikey='b66027738c1ef56d2f378034aa0c688d';
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search_city=document.querySelector(".search input");
const search_icon=document.querySelector(".search  i");
var weather=document.querySelector(".weather img");
search_city.addEventListener('focusin',function(){
    search_city.classList.add('shadow');
})
search_city.addEventListener('focusout',function(){
    search_city.classList.remove('shadow');
})

var cityy;
var condition=document.getElementById('condition')
async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
   // console.log(response);
    var data=await response.json();
    if(response.status==404){
        document.getElementById("invalid").style.visibility="visible";

    }
    else{
        document.getElementById("invalid").style.visibility="hidden";


    document.getElementById('temp').innerHTML=Math.round(data.main.temp) +"°C";
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('humidity').innerHTML=data.main.humidity+"%";
    document.getElementById('wind-speed').innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main =="Clear")
    {
       weather.src="Assets/images/clear.png";
       condition.innerHTML=data.weather[0].main
    }
    else if(data.weather[0].main =="Clouds"){
        weather.src="Assets/images/clouds.png";
        condition.innerHTML="Cloudy"
    }
    else if(data.weather[0].main =="Drizzle"){
        weather.src="Assets/images/drizzle.png";
        condition.innerHTML=data.weather[0].main
    }
    else if(data.weather[0].main =="Mist"){
        weather.src="Assets/images/mist.png";
        condition.innerHTML=data.weather[0].main
    }
    else if(data.weather[0].main =="Rain"){
        weather.src="Assets/images/rain.png";
        condition.innerHTML="Rainy"
    }
    else if(data.weather[0].main =="Snow"){
        weather.src="Assets/images/snow.png";
        condition.innerHTML=data.weather[0].main
    }
}
    search_city.value='';
    search_city.classList.remove('shadow');
}



// search_city.addEventListener('input',function(e){
//     var cityy=e.target.value;
// })

search_icon.addEventListener('click',function(){
     checkWeather(search_city.value);
    
})
search_city.addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        checkWeather(search_city.value);
    }
})

// checkWeather();