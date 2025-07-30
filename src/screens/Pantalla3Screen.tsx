import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigation'

type Props = StackScreenProps<RootStackParams, 'Pantalla3'>

export const Pantalla3Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla3 Screen</Text>
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
