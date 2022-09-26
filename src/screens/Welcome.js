import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import welcomelogo from '../../assets/welcomelogo.png'
import { button1 } from '../common/button'
const Welcome = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.patternbg} source={pattern} />
            {/* <Text style={styles.head}>hii</Text> */}
            <View style={styles.container1}>
                {/* <Text style={styles.head}>Welcome to</Text> */}
                {/* <Image style={styles.logo} source={welcomelogo} /> */}
                <Text style={button1}>Login</Text>
                <Text style={button1}>Signup</Text>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    head: {
        fontSize: 30,
        color: '#fff',
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    logo: {
        // height: 200,
        width: 200,

    }
})