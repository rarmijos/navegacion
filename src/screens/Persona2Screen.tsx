import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigation';

type Props = StackScreenProps<RootStackParams, 'Persona2'>;

//interfaz para el objeto persona (parametro de navegacion)

// interface RouteParams {
//     id: number;
//     nombre: string;
//     apellido: string;
// }

export const Persona2Screen = ({ route }: Props) => {
    //console.log(props);
    // const params = route.params as RouteParams;
    const params = route.params;
    //console.log(params);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persona 2 Screen</Text>
            <Text style={styles.text2}>
            {params.id}
            {params.nombre}
            {params.apellido}
            </Text>
        </View>
    )
}
