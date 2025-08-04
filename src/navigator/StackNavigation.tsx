import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2Screen } from '../screens/Persona2Screen';

//Definir los screens parte de la navegacion y parametros 

export type RootStackParams = {
    Pantalla1: undefined,
    Pantalla2: undefined,
    Pantalla3: undefined,
    Persona: {id: number, nombre: string, apellido: string},
    Persona2: {id: number, nombre: string, apellido: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
        // initialRouteName = "Pantalla 3"
        screenOptions={{ //para poner el mismo estilo a todos los screams
            cardStyle: {
                backgroundColor: 'black',
            },
            // headerShown: false //para quitar la cabecera de navegacion al poner false y si colocamos true aparezca
            headerStyle:{
                elevation: 5, //para quitar la sombra de la cabecera
                backgroundColor: 'purple',
            }
        }}>
            <Stack.Screen name="Pantalla1" options={{title: 'Home', headerShown: false}} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{title: 'Home', headerShown: false}} component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3" options={{title: 'Home', headerShown: false}} component={Pantalla3Screen} />
            <Stack.Screen name="Persona" options={{title: 'Home', headerShown: false}} component={PersonaScreen} />
            <Stack.Screen name="Persona2" options={{title: 'Home', headerShown: false}} component={Persona2Screen} />
        </Stack.Navigator>
    );
}