import React, { useContext } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'



import Principal from '../Pages/Principal';
import Filme from '../Pages/Filme';
import Assistidos from "../Pages/Assistidos";
import Detalhes from '../Pages/Detalhes'
import Pesquisar from '../Pages/Pesquisar'
import Filtro from '../Pages/Filtro'
import Login from "../Pages/Login";
import Registra from "../Pages/Registro"

import { AuthContext } from "../utils/auth";

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()


function CustomDrawerContent(props) {

    const { logout } = useContext(AuthContext)
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Deslogar" onPress={() => logout()}
                icon={({ focused, color, size }) => <MaterialCommunityIcons color={color} size={size} name={focused ? "login" : "logout"} />} logout
                activeTintColor={'#000000'}
                inactiveTintColor={'#000000'}
                activeBackgroundColor={'#E66C40'}
                inactiveBackgroundColor={'#E8D3B6'}
            />
        </DrawerContentScrollView>
    );
}


function Gaveta() {

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
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
            {/*<Drawer.Screen name="Filtro" component={Filtro} options={{
                title: 'Filmes'
            }} />*/}


        </Drawer.Navigator>
    )
}

export default function Routes() {
    const { authorized } = useContext(AuthContext);
    return (
        <Stack.Navigator initialRouteName="Login">
            {authorized ? (
                <>
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
                </>

            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Registra" component={Registra} options={{ headerShown: false }} />
                </>
            )
            }
        </Stack.Navigator>
    )
};

//add
