import AsyncStorage from "@react-native-async-storage/async-storage";


//buscar filmes
export async function getFavoritosSalvos(key){
    const meusFavoritos = await AsyncStorage.getItem(key)

    let favoritosSalvo = JSON.parse(meusFavoritos) || [];

    return favoritosSalvo;
}


//salvar filmes
export async function FilmeFavoritosSalvo(key, novoFavoritos) {
    let filmeEstoqueFavorito = await getFavoritosSalvos(key);


const hasFavorito = filmeEstoqueFavorito.some( item => item.id === novoFavoritos.id ) 

if(hasFavorito) {
    console.log("Esse filme ja existe");
    return;
}

filmeEstoqueFavorito.push(novoFavoritos);

await AsyncStorage.setItem(key, JSON.stringify(filmeEstoqueFavorito));
console.log("filme salvo com sucesso")

}
//deletar filmes
export async function deleteFavorito(id) {
    let filmeEstoqueFavorito = await getFavoritosSalvos('@favorito');

    let meusFavoritos = filmeEstoqueFavorito.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@favorito', JSON.stringify(meusFavoritos));
    console.log('filme deletado');
    return meusFavoritos;

 }

 //filtrar filmes
 export async function hasFavorito(filme) {
    let filmeEstoqueFavorito = await getFavoritosSalvos('@favorito');

    const hasFavorito = filmeEstoqueFavorito.find( item => item.id === filme.id);

    if(hasFavorito) {
        return true;
    }
    return false;
 }