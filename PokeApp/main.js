const container = document.querySelector('#container')


let arrayPokemons = []




const getData = (url) => {
    return fetch(url).then(res => res.json()).then(data => data)
}

const printPokemon = (pokemon) => {
    const div = document.createElement('div')
    div.innerHTML = `<p>${pokemon.id} ${pokemon.name}</p>
    <img src="${pokemon.sprites.front_default}" alt="">
    <div>
        <button>Delete</button>
        <a href="pokemon.html?id=${pokemon.id}">See</a>
    </div>`
    div.classList.add('flex', 'flex-col', 'gap-3', 'font-semibold')

    div.children[2].children[0].addEventListener('click', () => {
        div.remove()
    })
    container.append(div)
}


getData('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(pokemons => {
        pokemons.results.forEach(e => {
            arrayPokemons.push(e.url)

        })
        arrayPokemons = arrayPokemons.map(map => getData(map))

        return  Promise.all(arrayPokemons)

    }
    )
    .then(res => res.forEach(e => printPokemon(e)))


// link.addEventListener('click', () => {
//     console.log(link.href.slice(0,link.href.lastIndexOf('/')));
// })






