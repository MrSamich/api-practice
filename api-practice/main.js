let text = document.getElementsByClassName('.temp');

fetch('http://api.openweathermap.org/data/2.5/forecast?id=5110253&units=imperial&appid=83443629bc34a85a47eb30b373cf91ac')
.then(result => result.json())
.then(list => console.log(list.list[0].main.temp))
 
