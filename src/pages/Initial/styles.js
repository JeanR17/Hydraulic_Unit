import { StyleSheet } from 'react-native';

import Constants from 'expo-constants'

export default StyleSheet.create({
    initial: {
        flex: 1,
        /* paddingTop: Constants.statusBarHeight, */
        backgroundColor: '#000000'
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'space-evenly'
    },

    welcome: {
        width: '56%',
        /* height: '50%', */
        /* marginTop: '1%', */
        /* justifyContent: 'space-around', */
        alignSelf: 'center',
        /* backgroundColor: '#000000'  */
    },

    title: {
        color: '#FFF',
        fontSize: 80,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    subtitle: {
        color: '#FFF',
        fontSize: 23,
        /* marginTop: '10%'10, */
        textAlign: 'center',
    },

    choice: {
        /* justifyContent: 'center', */
        alignItems: 'center',
    },

    choiceButton: {
        backgroundColor: '#EF9303',
        borderRadius: 15,
        height: /* '40%' */130,
        width: /* '35%' */130,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    choiceButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold', 
    },
})