import React, {useState, useEffect} from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import image from '../../assets/initial.png';

import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';

export default function Initial() {


    const navigation = useNavigation();
    

    function navigateToInputs() {
        navigation.navigate('Inputs', {});

    }
    const [offset] = useState(new Animated.ValueXY({x:0, y:95}))

    useEffect(() => {
        Animated.spring(offset.y, {
            toValue: 0,
            speed: 4,
            bounciness: 20
        }).start()
    }, [])

    return (
        <View style={styles.initial}>
             <ImageBackground source={image} style={styles.image}>
                <View style={styles.welcome}>
                    <Text style={styles.title}>Bem-vindo</Text>
                </View>
                <View style={styles.welcome}>
                    <Text style={styles.subtitle}>Toque no botão abaixo para iniciar a aplicação.</Text>
                </View>

                <Animated.View style={[
                    styles.choice, 
                    {
                        transform: [
                            {translateY: offset.y}
                        ]
                    }
                    ]}>
                    <TouchableOpacity 
                    style={styles.choiceButton} 
                    onPress={() => navigateToInputs()}
                    >
                        <Entypo name="arrow-with-circle-right" size={70} color="black" />
                        <Text style={styles.choiceButtonText}>INICIAR</Text>
                    </TouchableOpacity>
                </Animated.View>
             </ImageBackground>
            
        </View>

    )

}