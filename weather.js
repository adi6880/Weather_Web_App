const api="https://api.weatherapi.com/v1/current.json?key="
const apikey="df4742db44434d64b99101710250108"
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const img=document.querySelector(".weather img")
async function checkWeather(city){
    const response=await fetch(api+`${apikey}&q=${city}`);
    const data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML=Math.round(data.current.temp_c)+"°c";
    document.querySelector(".humanity").innerHTML=data.current.humidity+"%";
    document.querySelector(".wind").innerHTML=data.current.wind_mph+" kph";
    img.src=`https:${data.current.condition.icon}`
    console.log(data.current.condition.icon)
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

