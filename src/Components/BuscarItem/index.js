import React from "react";

import {Container, Banner, Botao, Title, Titulo} from './styles'

export default function BuscarItem({data, navigatePagina}) {

    function detalheFilmes() {
        if(data.name === ''){
            alert('Nome não encontrado');
            return;
        }
        navigatePagina(data)
    }

    return(
        <Container>
            <Botao activeOpacity={0.7} onPress={detalheFilmes}>
                { data?.poster_path ? (
                 <Banner
                 resizeMode='cover'
                 source={{
                     uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                 }}
             />
                
            ) : (
                <Banner
                resizeMode='stretch'
                source={require('../../../assets/fundoBranco.png')}
              />
            )}

           <Title numberOfLines={3}>{data?.title}</Title>
            </Botao>
            
        </Container>
    )
}