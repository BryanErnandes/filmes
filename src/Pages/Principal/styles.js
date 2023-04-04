import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #0E58AE;
flex:1;
padding: 4px 0px;
`;


export const Form = styled.View`

flex-direction: row;
height: 70px;
width: 100%;
align-Items: center;
padding: 0px 16px;
margin-top: 3px;

`;

export const Input = styled.TextInput`

background-color: #E66C40;
height: 45px;
width: 80%;
padding: 10px 14px;
color: "#fff";
font-size: 19px;
border-top-left-radius: 18px;
border-bottom-left-radius: 18px;

`

export const Button  = styled.TouchableOpacity`

width: 20%;
height: 45px;
padding-top: 3px;
padding-left: 10px;
background-color: #000000;
border-top-right-radius: 18px;
border-bottom-right-radius: 18px;
`;


export const Body  = styled.View`
margin-right: 9px;
margin-left: 7px;
`;
export const Title  = styled.Text`
color: #000000;
font-size: 30px;
font-weight: bold;
padding-top: 11px;
padding-bottom: 1px;
padding-left: 16px;


`;

export const ButtonCard = styled.TouchableOpacity`
`;

export const Banner  = styled.Image`
height: 199px;
width: 100%;
border-radius: 15px;
margin: 5px 3px 5px 2px;
border: 2px;
border-color: #E66C407;
`;

export const SliderFavoritos = styled.FlatList`
padding: 7px 0px 0px 0px;
margin-right: 0px;

`;

export const Slider = styled.FlatList`
height: 220px;
width:  100%;
padding: 7px 0px 0px 0px;
margin-right: 0px;
`;

export const ContainerTexto = styled.View`
background: rgba(5, 10, 1, 0.27)
padding-top: 10px;
padding-right: 5px;
padding-bottom: 10px;
padding-left: 5px;
position: absolute;
top: 137px;
left: 12px;
display: flex;
justify-content: flex-end;
border-radius: 8px;
`;

export const TextoBanner = styled.Text`
color: #fff;
font-size: 20px;
font-weight: bold;
`;

//add