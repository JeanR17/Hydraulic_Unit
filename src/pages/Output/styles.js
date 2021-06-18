import { StyleSheet } from 'react-native';

import Constants from 'expo-constants'

export default StyleSheet.create({
    
    scrollview: {
        backgroundColor: '#C4C4C4',
    },

    container: {
        flex: 1,
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

    especificacoes: {
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    saida: {

    },

    bb: {
        flexDirection: 'column',
        /* flex: 1, */
        /* backgroundColor: 'blue' */

    },

    title: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },

    title2: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginHorizontal: 6,
    },

    subtitle: {
        fontSize: 14,
        textAlign: 'right',
        alignSelf: 'center',
        marginBottom: 8
    },

    result: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },

    subtitle2: {
        fontSize: 14,
        color: '#EF9303',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'right',
        alignSelf: 'center',
        marginBottom: 8

    },

    subtitle3: {
        fontSize: 10.5,
        color: '#EF9303',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'right',
        alignSelf: 'center',
        marginBottom: 8

    },

    error: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'left',
        alignSelf: 'center',
        marginBottom: 8

    },

    calculate: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    button: {
        flexDirection: 'row',
        backgroundColor: '#EF9303',
        borderRadius: 8,
        height: 45,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold', 
    }
})