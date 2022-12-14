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
width: 47px;
height: 47px;
backgtound-color: #5707FA;
border-radius: 23px;
justift-content: center;
align-item: center
color: #fff

`

export const Banner = styled.Image`

height: 300px;
width: 100%;
border-radius: 15px;

`


export const Title = styled.Text`



`;