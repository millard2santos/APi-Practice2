const apiKey = 'c0bca8fc749807f28e6daa6cbc47121f'


const data = () => {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=c0bca8fc749807f28e6daa6cbc47121f`)
        .then(res => res.json())
        .then(data => data)
}

data().then(res => console.log(res))