const container = document.querySelector("#container")
const pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" 

for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement("div")
    pokemon.classList.add("pokemon")
    const label = document.createElement("span")
    label.innerText= `#${i}`
    const newImg = document.createElement("img")
    newImg.src = `${pokeUrl}${i}.png`
    pokemon.appendChild(newImg)
    pokemon.append(label)
    container.appendChild(pokemon)

}