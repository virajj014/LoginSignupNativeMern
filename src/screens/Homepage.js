import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { head1 } from '../common/formcss'
import { button1 } from '../common/button'

const Homepage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text
                style={head1}
            >this is Homepage</Text>

            <Text style={button1}
                onPress={
                    () => { navigation.navigate('login') }
                }
            >Logout</Text>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})