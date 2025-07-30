import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const Pantalla2Screen = () => {
    //Navegacion por hooks de react navigation
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla2 Screen</Text>
            <Button
                title='Ir a pantalla 3'
                onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla3'})) } />
        </View>
    )
}
