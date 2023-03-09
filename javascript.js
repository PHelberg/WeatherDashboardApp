function getInfo(){
  const newName= document.getElementById("cityInput");
  const cityName= document.getElementById("cityName");
  cityName.innerHTML ="--"+newName.value+newName.value+"--"


  fetch("https://api.openweathermap.org/data/2.5/forecast?q='newName.value+'&appid=30a6def9b8049060940804c4ba73bad6")
  .then(response => response.json())
  .then(data =>{
    for(i=0;i<5;i++){
      document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" + Number(data.list[i].main.temp_min -292.06).toFixed(1)+"°";
    }
  
      for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max -302.27).toFixed(1)+"°";
    }

  
  
    for(i=0;i<5;i++){
    document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max -302.27).toFixed(1)+"°";
    }

    for(i=0;i<5;i++){
      document.getElementById("img") + (i+1) .src="https://openweathermap.org/img/wn/10d@2x.png" + data.list[i].weather[0].icon+".png";

    })

.catch(err => alert("Error"))
  }
const d =new Date();
const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function CheckDay(day){
  if(day +d.getDay() >6){
    return day +d.getDay()-7;
  }
}