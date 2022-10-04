// Option - Shift - O
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { registerRootComponent } from 'expo'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import AnimatedSplash from 'react-native-animated-splash-screen'
import Loader from './components/load/load.js'
import MainScreen from './components/main/main.js'
import ProfileScreen from './components/profile/profile.js'

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
    const [loading, setLoading] = useState(false)

    setTimeout(() => {
        setLoading(true)
    }, 3000)

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={loading}
            logoImage={require('./assets/pump.png')}
            backgroundColor={'#D36727'}
            logoHeight={250}
            logoWidth={250}
            component={<Loader></Loader>}
        >
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AnimatedSplash>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

registerRootComponent(App)
