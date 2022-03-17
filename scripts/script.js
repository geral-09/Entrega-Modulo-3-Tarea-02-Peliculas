
import { pelis } from "./data.js"

let mostrarPeliculas = (arr)=> {
    const peliculas_new = document.getElementById('contenedor12')
    peliculas_new.innerHTML = ''
    arr.forEach((arr) => {
        const dondeVa = document.createElement('div')
        dondeVa.innerHTML = `
        <div>
         <img src="${arr.image}" alt="">
        </div>
        <div class="movie-info">
            <h3>${arr.name}</h3>
        </div>
        <div class="overview">
            <a class="redirect" href="${arr.redirect}">SINOPSIS</a>
        </div>
        `
        peliculas_new.appendChild(dondeVa)
    });
}

mostrarPeliculas(pelis)

let cajas = document.createElement("div")
