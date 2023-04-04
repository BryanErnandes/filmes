import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert } from "react-native";

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null)

    const login = async (name, password) => {
        if (name == "Bryan" && password == "123") {
            const user = {
                name: "Bryan",
                name: "Willians"
            };
            setUser(user);
            try {
                await AsyncStorage.setItem('user', JSON.
                stringify(user));
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            setUser(null);
            Alert.alert("AVISO", "USUARIO OU SENHA INVÁLIDOS!", [
                {text: "VOLTA", onPress: () => console.log("VOLTA")}
            ]);
            throw new Error("Usuário ou senha inválidos!");
        }
    }


    const logout = async () => {
        setUser(null);
        try {
            await AsyncStorage.setItem('user', null);
        }
        catch (err) {
            console.log(err);
        }
    }

    const carregar = async () => {
        try {
            const v = await AsyncStorage .getItem('user');
            setUser(v !=null ? JSON.parse(v): null);
        }
        catch (err) {
            setUser(null);
            console.log(err);
        }
    }

    useEffect(() => {carregar();
    console.log("MONTAR");

    return () => {
        console.log("DESMONTAR")
    }

}, [])

    const authorized = user != null;

    return(
        <AuthContext.Provider value={{ user, authorized, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

//add