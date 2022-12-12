import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #000000
flex:1
padding: 4px 0px
`;


export const Form = styled.View`

flex-direction: row;
height: 70px;
width: 100%;
align-Items: center;
padding: 0px 16px;
margin-Bottom: 8px

`;

export const Input = styled.TextInput`

background-color: #E66C40;
height: 45px;
width: 80%;
padding: 10px 14px
color: "#fff"
font-size: 16px;
border-top-left-radius: 18px;
border-bottom-left-radius: 18px;

`

export const Button  = styled.TouchableOpacity`

width: 20%;
height: 45px;
padding-top: 3px;
padding-left: 10px;
background-color: #E66C40;
border-top-right-radius: 18px;
border-bottom-right-radius: 18px;
`;


export const Body  = styled.View`
`;
export const Title  = styled.Text`
color: #FF7506;
font-size: 30px
padding-top: 15
padding-left: 15px;
padding-bottom: 11px;


`;

export const ButtonCard = styled.TouchableOpacity`
`;

export const Banner  = styled.Image`
height: 190px;
width: 95%;
border-radius: 15px;
margin: 5px 9px 5px 9px;
border: 2px;
border-color: #E66C407;
`;

export const Slider = styled.FlatList`
height: 250px;
padding: 7px 0px 0px 0px;
`;