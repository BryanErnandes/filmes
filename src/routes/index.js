import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Principal from '../Pages/Principal';
import Filme from '../Pages/Filme';
import Detalhes from '../Pages/Detalhes'
//import Login from '../Pages/Login'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function Gaveta() {
return(
    <Drawer.Navigator  screenOptions={{
        headerShown: false,
        drawerStyle: {
            backgroundColor: '#000000',
            paddingTop: 10,
        },

        drawerActiveTintColor: '#000000',
        drawerInactiveTintColor: '#000000',
        drawerActiveBackgroundColor: '#E66C40',
        drawerInactiveBackgroundColor: '#E8D3B6'
    }}
    >
        <Drawer.Screen name='Principal' component={Principal} 
        options={{
            title: 'Pagina Principal',
            drawerIcon: ({ focused, size, color}) => (
                <MaterialCommunityIcons name={focused ? 'home-account' : 'home'}
                size={size} color={color}/>
                )
        }}/>
        <Drawer.Screen name='Filme' component={Filme} 
          options={{
            title: 'Filme',
            drawerIcon: ({ focused, size, color}) => (
                <MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-off'}
                size={size} color={color} />
                )
        }}/>
    </Drawer.Navigator>
)
}

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Gaveta' component={Gaveta} options={{headerShown: false}} />
            <Stack.Screen name='Detalhes' component={Detalhes} options={{headerShown: false}} />
        </Stack.Navigator>
    )
};