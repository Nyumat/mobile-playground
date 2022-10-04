import React from 'react'
import { Button, Text, View } from 'react-native'

const ProfileScreen = ({ navigation, route }) => {
    if (route.params.name == 0) {
        return (
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        color: 'black',
                        textAlign: 'center',
                        marginTop: 50,
                        marginBottom: 50,
                        fontWeight: 'bold',
                    }}
                >
                    This is the profile screen.
                </Text>

                <Button
                    title="Go to Tom's profile"
                    onPress={() => navigation.navigate('Profile', { name: 'Tom' })}
                />
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
                />
            </View>
        )
    } else {
        return (
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        color: 'black',
                        textAlign: 'center',
                        marginTop: 50,
                        marginBottom: 50,
                        fontWeight: 'bold',
                    }}
                >
                    This is {route.params.name}'s profile
                </Text>

                <Button
                    title="Go to Tom's profile"
                    onPress={() => navigation.navigate('Profile', { name: 'Tom' })}
                />
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
                />
            </View>
        )
    }
}

export default ProfileScreen
