import { StyleSheet } from 'react-native';

import Constants from 'expo-constants'

export default StyleSheet.create({

    container: {
        flex: 1,
    },

    scrollview: {
        backgroundColor: '#C4C4C4',
    },

    header: {
        height:  /* '11%' */   90  ,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    logo: {
        width:  /* '49.7%' */   195 ,
        height:  /* '60%' */   55 ,
        marginStart: 4
    },

    imageHeader: {
        height: /* '25.7%' */180,
        /* justifyContent: 'space-between', */
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    image: {
        width: '100%'/* 400 */,
        height: '100%'/* 180 */,
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
        paddingHorizontal: 14,
        paddingTop: 14,
        backgroundColor: '#C4C4C4'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    description: {
        fontSize: 15,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 10,
    },

    title2: {
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },

    /* title3: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }, */

    atuador: {
        /* paddingStart: 10, */
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        /* backgroundColor: '#013a54' */
        
    },

    characteristics: {
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
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

    dados: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
        /* marginHorizontal: 2,
        marginBottom: 8 */
    },

    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        alignSelf: 'center',
        /* marginBottom: 8, */
        /* backgroundColor: '#fff' */

    },

    continputatuador: {
        flex: 1,
        marginBottom: '-8%',
        /* justifyContent: 'space-evenly', */
        height: '10%',
        width: '110%',
        /* backgroundColor: '#fff' */
    },

    continput: {
        flex: 1,
        marginBottom: '-8%',
        justifyContent: 'space-evenly',
        height: '10%',
        width: '110%',
        /* backgroundColor: '#fff' */
    },

    contgatuador: {
        marginBottom: '-10%',
        /* marginRight: '-20.5%', */
        height: '100%',
        width: '110%',
        /* backgroundColor: 'blue', */
    },

    contg: {
        marginBottom: '-3%',
        height: '110%',
        width: '35%',
        /* backgroundColor: 'blue', */
    },

    input: {
        textAlign: 'center',
        alignSelf: 'stretch',
        fontSize: 14,
        
        /* borderRadius: 8, */
       /* backgroundColor: '#C4C4C4', */
    },

    texto: {
        fontSize: 14,
        /* marginTop: '-7%', */
        alignSelf: 'center',
    },

    pickerComponent: {
        /* marginStart: 5, */
        /* width: '110%', */
        /* transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }], */
       /* marginTop: -6, */
        /* marginHorizontal: -14, */
        marginBottom: -10,
        /* backgroundColor: '#000' */
        
        
    },

    calculate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16

    },

    add_remove: {
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonAdd_Remove: {
        width: 31,
        height: 31,
        borderRadius: 15,
        backgroundColor: '#EF9303',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 8
    },

    button: {
        backgroundColor: '#EF9303',
        borderRadius: 8,
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold', 
    }
});
