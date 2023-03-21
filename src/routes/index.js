import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Ionicons } from "@expo/vector-icons/Ionicons";


import Principal from '../Pages/Principal';
import Filme from '../Pages/Filme';
import Assistidos from "../Pages/Assistidos";
import Detalhes from '../Pages/Detalhes'
import Pesquisar from '../Pages/Pesquisar'
import Login from "../Pages/Login";
//import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function Gaveta() {
    return (
        <Drawer.Navigator screenOptions={{
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
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons name={focused ? 'home-account' : 'home'}
                            size={size} color={color} />
                    )
                }} />
                <Drawer.Screen name='Filme' component={Filme}
                    options={{
                        title: 'Favoritos',
                        drawerIcon: ({ focused, size, color }) => (
                            <Entypo name={focused ? 'heart' : 'heart-outlined'}
                                size={size} color={color} />
                        )
                    }} />
                <Drawer.Screen name="Assistidos" component={Assistidos} options={{
                    title: 'Completo',
                    drawerIcon: ({ focused, size, color }) => (
                        <Entypo name={focused ? 'eye' : 'eye-with-line'} size={size} color={color} />
                    )
                }} />
                <Drawer.Screen name="Deslogar" component={Login} options={{
                    drawerIcon: ({ focused, size, color}) => (
                        <Entypo name="user" size={size} color={color} />
                    )
                }} />


        </Drawer.Navigator>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Gaveta' component={Gaveta} options={{ headerShown: false }} />
            <Stack.Screen name='Detalhes' component={Detalhes} options={{ headerShown: false }} />
            <Stack.Screen name='Search' component={Pesquisar} options={{
                title: 'Sua Busca',
                headerTintColor: "#E66C40",
                headerTitleStyle: {
                    color: "#E66C40",
                    fontSize: 25
                },
                headerStyle: {
                    backgroundColor: "#000000"
                }
            }} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
};
