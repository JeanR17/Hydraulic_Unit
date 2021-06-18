import { StyleSheet } from 'react-native';

import Constants from 'expo-constants'
import { color } from 'react-native-reanimated';

export default StyleSheet.create({

    scrollview: {
        backgroundColor: '#DDD',
    },
    
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },

    header: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    logo: {
        width: 195,
        height: 55,
        marginStart: 4
    },

    imageHeader: {
        height: 180,
        /* justifyContent: 'space-between', */
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    image: {
        width: 400,
        height: 180,
        justifyContent: "center",
    },

    return: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonReturn: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center', 
    },

    entry: {
        flex: 1,
        padding: 14,
        backgroundColor: '#C4C4C4'
    },

    description: {
        fontSize: 15,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 14
    },

    info: {
        /* flex: 1, */
        padding: 7,
        /* width: 150,
        height: 50, */
        marginBottom: 15,
        borderRadius: 20,
        backgroundColor: '#C4C4C4'
    },

    considerations: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#000000'
    },

    graphics: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center', 

    },

    graphic: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginStart: -30, 
    },

    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        /* marginBottom: 10, */
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1d1d1d'
    },

    linechart: {
        marginStart: -20,
        transform: [{scale: 0.95}]
    },

    legend: {
        marginBottom: -6,
        fontSize: 10,
        fontStyle: 'italic',
        color: '#808080',
    },

    legendx: {
        marginTop: -6,
        fontSize: 10,
        /* fontStyle: 'italic', */
        color: '#424242',
    },

    legendy: {
        marginRight: -6,
        fontSize: 10,
        /* fontStyle: 'italic', */
        color: '#424242',
        transform: [{rotate: '270deg'}]
    },

    calculate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },

    button: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 40,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold', 
    },
});