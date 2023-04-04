//Gerar uma lista com o tamanho que eu desejar

export function getListaFilmes(size, filmes) {
    let popularFilmes = [];

    for(let i = 0, l = size; i < l; i++) {
        popularFilmes.push(filmes[i])

    }
    return popularFilmes
}

// filme aleatorio
export function randomBanner(filmes) {
    return Math.floor(Math.random() * filmes.length )
}