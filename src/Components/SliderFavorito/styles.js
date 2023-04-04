import styled from 'styled-components/native'


export const Body = styled.TouchableOpacity`
padding-top: 1px;
padding-right:3px
padding-bottom: 20px;
padding-left: 1px
margin-right: 0px;
margin-bottom: 30px;
margin-left: 0px;
width: 136px;
height: 180px; 



`;

export const Banner= styled.Image`
height: 200px;
width: 99%;
border-radius: 10px;

`;



export const ContainerTitle=styled.View`
z-index: 99;
position: absolute;
top: 149px;
left: 5px;
background: rgba(5, 10, 1, 0.27)
color:#E66C40;
border-radius: 5px;
padding-top: 5px;
padding-left: 1px;
padding-bottom: 2px;

`;
export const Title=styled.Text`
font-size: 18px;
color: #fff;
font-weight: bold;
padding-right: 3px;
 padding-left: 2px;
`;

export const ContainerIcon=styled.View`
flex-direction: row;
align-items: center;
padding-left: 2px;
`;

export const Rate=styled.Text`
font-size: 16px;
padding-left: 6px;
color: #FF7506;

`