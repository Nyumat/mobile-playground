import React from 'react'
import { StyleSheet, Text, TextInput, View, Keyboard } from 'react-native'

function MainScreen({ navigation }) {
    const [name, onChangeName] = React.useState('')

    const handleSubmit = (name) => {
        Keyboard.dismiss()
        navigation.navigate('Profile', { name: name })
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'plum',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: 30,
                    marginBottom: 15,
                    fontWeight: 'bold',
                }}
            >
                Enter a username to navigate to their profile!
            </Text>
            <TextInput
                placeholder="What's your name?"
                placeholderTextColor={'black'}
                style={mainScreenStyles.input}
                onChangeText={onChangeName}
                enablesReturnKeyAutomatically={true}
                onSubmitEditing={() => handleSubmit(name)}
            />
        </View>
    )
}

const mainScreenStyles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        textDecorationColor: 'black',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
})

export default MainScreen
