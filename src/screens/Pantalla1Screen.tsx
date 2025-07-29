import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

//navegacion por propiedades de StackNavigator
//interfas para las propiedades de navegacion
interface Props extends StackScreenProps<any, any> {};

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props.navigation); // 

    return (
        <View style={styles.container}>
            <Text>Pantalla1 Screen</Text>
            <Button
                title = "Ir Pantalla 2"
                onPress={() => navigation.navigate('Pantalla 2')}/>

        </View>
    )
}
