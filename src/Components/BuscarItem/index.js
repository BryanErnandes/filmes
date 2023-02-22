import React from "react";

import {Container, Banner, Botao} from './styles'

export default function BuscarItem({data, navigatePagina}) {

    function detalheFilmes() {
        navigatePagina
    }
    return(
        <Container>
            <Botao activeOpacity={0.7} onPress={detalheFilmes}>
                { data?.poster_path ? (
                 <Banner
                 resizeMode='stretch'
                 source={{
                     uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`
                 }}
             />
                
            ) : (
                <Banner
                resizeMode='stretch'
                source={require('../../../assets/fundoBranco.png')}
              />
            )}
            </Botao>
            
        </Container>
    )
}