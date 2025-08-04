import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { Persona2Screen } from './Persona2Screen';
import { RootStackParams } from '../navigator/StackNavigation';

//navegacion por propiedades de StackNavigator
//interfas para las propiedades de navegacion
type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

//interface del objeto persona
interface Persona {
    id: number;
    nombre: string;
    apellido: string;
}

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props.navigation); // 

    //Crear objeto
    const persona: Persona = {
        id: 1,
        nombre: 'Roy',
        apellido: 'Armijos,'
    }

    const persona2: Persona = {
        id: 1,
        nombre: 'Roy',
        apellido: 'Armijos,'
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla1 Screen</Text>
            <Button
                title = "Ir Pantalla 2"
                onPress={() => navigation.navigate('Pantalla2')}/>

                <Text style={styles.text}>Navegar con argumentos a otro screem</Text>
                
                <TouchableOpacity
                onPress={() => navigation.navigate('Persona', persona)}>
                    <Text style={styles.btn2}>Persona 1</Text>
                </TouchableOpacity>


                <TouchableOpacity
                onPress={() => navigation.navigate('Persona2', persona2)}>
                    <Text style={styles.btn2}>Persona 2</Text>
                </TouchableOpacity>
        </View>
    )
}
