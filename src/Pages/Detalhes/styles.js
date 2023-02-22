import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #000000
`;

export const Header = styled.View`
z-index: 99;
position: absolute;
top: 9px;
width: 100%;
display: flex
flex-direction: row;
justify-content: space-between;
padding: 0px 14px


`;

export const BotaoBanner = styled.TouchableOpacity`
width: 35px;
height: 35px;
background-color: #474a51;
border-radius: 23px;
justift-content: center;
align-item: center;
padding: 4px 4px

`

export const Banner = styled.Image`

height: 296px;
width: 100%;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;

`
export const Title = styled.Text`
color: #FF7506;
font-size: 23px;
padding: 0px 7px 0px 5px;
font-weight: bold;


`;

export const Titulo = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
top: 5px;
padding: 3px 5px 7px 10px;

`;

export const Body = styled.View`

display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0px 14px 0px 14px;
`;

export const Notas = styled.Text`
font-size: 18px
font-weight: bold
color: #FF7506;
font-size: 20px;

`;

export const Populidade = styled.Text`
font-size: 18px
font-weight: bold
color: #FF7506;
font-size: 20px;

`;

export const ListaGeneros = styled.FlatList`
padding: 0px 2px 0px 0px;
margin: 8px 10px;
max-height: 35px;
min-height: 35px;
`;

export const Descricao = styled.Text`
font-size: 20px;
font-weight: bold;
color: #FF7506;
padding: 0px 19px ;

`; 