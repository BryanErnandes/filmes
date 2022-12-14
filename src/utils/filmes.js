export function getListaFilmes(size, filmes) {
    let popularFilmes = [];

    for(let i = 0, l = size; i < l; i++) {
        popularFilmes.push(filmes[i])

    }
    return popularFilmes
}

export function bannerAleatorio(filmes) {
    return Math.floor(Math.random() * filmes.length )
}