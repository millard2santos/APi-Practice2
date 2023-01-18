const apiKey = 'c0bca8fc749807f28e6daa6cbc47121f'
const form = document.querySelector('form')

const kelvin = 273.15


const data = (url) => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log('Error'))
}


const lowerCase = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

const printCard = (cityWeather,{name}) => {
    const div = document.createElement('div')
    div.innerHTML = `<h2>Name:${name} </h2>
    <div>
        <p>Tiempo: ${cityWeather.weather[0].main}</p>
        <img src="http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png" alt="">
    </div>
    <p>Temperatura: ${(cityWeather.main.temp).toFixed(2)}Cº</p>`
    div.classList.add('flex', 'flex-col', 'gap-3', 'font-semibold')

    div.id = 'unique'
    container.append(div)
}



form.addEventListener('submit', (event) => {
    event.preventDefault()
    const unique = document.querySelector('#unique') || null
    if (unique){
        unique.remove()
    }
    const city = lowerCase(event.target.city.value)

    data(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
        .then(res => {
            let res2 = res[0]
            console.log(res)
            data(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${res2.lat}&lon=${res2.lon}&appid=${apiKey}`)
                .then(res => {
                    console.log(res)
                    printCard(res,res2)
                })
        })
        
})





