import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getAssistidoSalvos(key) {
    const meusAssistido = await AsyncStorage.getItem(key)

    let assistidoSalvo = JSON.parse(meusAssistido) || []
    return assistidoSalvo;
}


export async function FilmeAssistosSalvo(key, novoAssistido) {
    let filmeEstoqueAssistido = await getAssistidoSalvos(key);

    const hasAssistido = filmeEstoqueAssistido.some(item => item.id === novoAssistido.id)

    if (hasAssistido) {
        console.log('Esse filme ja existe');
        return;
    }

    filmeEstoqueAssistido.push(novoAssistido);
    await AsyncStorage.setItem(key, JSON.stringify(filmeEstoqueAssistido))
    console.log('filme salvo com sucesso');
}

export async function deleteAssistido(id) {
    let filmeEstoqueAssistido = await getAssistidoSalvos("@assistido");

    let meusAssistido = filmeEstoqueAssistido.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@assistido', JSON.stringify(meusAssistido));
    console.log("filme deletado");
    return meusAssistido;
}

export async function hasAssistido(filme) {
    let filmeEstoqueAssistido = await getAssistidoSalvos('@assistido');

    const hasAssistido = filmeEstoqueAssistido.find( item => item.id === filme.id);

    if (hasAssistido) {
        return true;
    }
    return false
}