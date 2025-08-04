import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Persona{
    id: number;
    nombre: string;
    apellido: string;
}

export const Pantalla2Screen = () => {
    //Navegacion por hooks de react navigation
    const navigation = useNavigation();

    //Crear un objeto persona
    const persona: Persona = {
        id: 3,
        nombre: 'pepe',
        apellido: 'rodolfo'
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla2 Screen</Text>
            <Button
                title='Ir a pantalla 3'
                onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla3', params: persona})) } />
        </View>
    )
}
