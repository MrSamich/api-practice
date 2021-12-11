let temperatureEl = document.getElementsByClassName('temperature')[0];
console.log({temperatureEl})

fetch('http://api.openweathermap.org/data/2.5/forecast?id=5110253&units=imperial&appid=83443629bc34a85a47eb30b373cf91ac')
.then(result => result.json())
.then(json => temperatureEl.append(json.list[0].main.temp))


console.log(temperatureEl)