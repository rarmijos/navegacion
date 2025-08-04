import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigation'
import { useRoute } from '@react-navigation/native'

type Props = StackScreenProps<RootStackParams, 'Pantalla3'>

//Interface para objeto persona (parametro de navegacion)
interface RouteParams{
    id: number;
    nombre: string;
    apellido: string;
}

export const Pantalla3Screen = ({ navigation }: Props) => {

    //hook useRoute para obtener los parametros de navegacion
    const route = useRoute();
    const params = route.params as RouteParams;
    //console.log(params)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla3 Screen</Text>
            <Text style={styles.text2}>{params.nombre} {params.apellido}</Text>
            <Text style={styles.text2}>{params.nombre}</Text>
            <Text style={styles.text2}>{params.apellido}</Text>
            <Button
                title="Regresar"
                onPress={() => navigation.goBack()} />
                <View style={styles.btn}>
            <Button
                title="Ir a home"
                onPress={() => navigation.popToTop()} /> 
                </View>
        </View>
    )
}
