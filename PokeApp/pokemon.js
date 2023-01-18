const queryString = window.location.search
const product = new URLSearchParams(queryString).get('id');


const getData = (url) => {
    return fetch(url).then(res => res.json())
}

const printPokemon = (pokemon) => {
    const div = document.createElement('div')
    div.innerHTML = `<p>#${pokemon.id} ${pokemon.name}</p>
    <img src="${pokemon.sprites.front_default}" alt="" class="w-40 h-40">
    <p>Weight: ${pokemon.weight}</p>
    <p>Height: ${pokemon.height}</p>
    <p>Ability 1: ${pokemon.abilities[0].ability.name}</p>
    <p>Ability 2: ${pokemon.abilities[1].ability.name}</p>`
    div.classList.add('flex', 'flex-col', 'gap-3', 'font-semibold')
    document.body.append(div)
}

getData(`https://pokeapi.co/api/v2/pokemon/${product}`)
    .then( res => printPokemon(res))