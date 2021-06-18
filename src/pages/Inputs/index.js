import React, { useState } from 'react';
import { View, StatusBar, Image, KeyboardAvoidingView, Picker, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Input, Text} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import logoIMG from '../../assets/logo.png'
import image from '../../assets/image.png';

import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';

export default function Inputs() {

    const [numeroCilindros, setNumeroCilindros] = useState(1);
    const [cilindros, setCilindros] = useState(
        [{
            forca: null,
            curso: null,
            velocidade: null
        }]
    );

    const [numeroMotores, setNumeroMotores] = useState(1);
    const [motores, setMotores] = useState(
        [{
            carga: null,
            dpolia: null,
            velocidade: null
        }]
    );


    const [classificação, setClassificação] = useState();
    const [fixação, setFixação] = useState();
    const [comprimentot, setComprimentot] = useState();
    const [valvulas_cd, setValvulas_cd] = useState();
    const [valvulas_cf, setValvulas_cf] = useState();
    const [valvulas_r, setValvulas_r] = useState();
    const [errorforcac, setErrorforcac] = useState(null);
    const [errorcursoc, setErrorcursoc] = useState(null);
    const [errorvelocidadec, setErrorvelocidadec] = useState(null);
    const [errorcargam, setErrorcargam] = useState(null);
    const [errordpoliam, setErrordpoliam] = useState(null);
    const [errorvelocidadem, setErrorvelocidadem] = useState(null);
    const [errorcomprimentot, setErrorcomprimentot] = useState(null);
    const [errorvalvulas_cd, setErrorvalvulas_cd] = useState(null);
    const [errorvalvulas_cf, setErrorvalvulas_cf] = useState(null);
    const [errorvalvulas_r, setErrorvalvulas_r] = useState(null);

    const ent = 
        {
            numeroCilindros:numeroCilindros,
            cilindros:cilindros,
            numeroMotores:numeroMotores,
            motores:motores,
            classificação:classificação, 
            fixação:fixação,
            comprimentot: comprimentot,
            valvulas_cd: valvulas_cd,
            valvulas_cf: valvulas_cf,
            valvulas_r: valvulas_r
        };

    
    function adiciona() {
        if (numeroCilindros < 4) {
          setNumeroCilindros(numeroCilindros + 1)
          setCilindros([...cilindros, {
            forca: null,
            curso: null,
            velocidade: null
          }
          ])
        }
    };

    function remove() {
        if (numeroCilindros > 1) {
          setCilindros(cilindros.filter((cilindro, index) => (index < (numeroCilindros - 1))))
          setNumeroCilindros(numeroCilindros - 1)
        }
    };

    function mudaForca(value,index) {
        cilindros.map((cilindro,i)=>{
          if(i === index) {
            cilindro.forca = value
            return cilindro
          } else {
            return cilindro
          }
        })
    };

    function mudaCurso(value,index) {
        cilindros.map((cilindro,i)=>{ 
          if(i === index) {
            cilindro.curso = value
            return cilindro
          } else {
            return cilindro
          }
        })
    };

      function mudaVelocidade(value,index) {
        cilindros.map((cilindro,i)=>{ 
          if(i === index) {
            cilindro.velocidade = value
            return cilindro
          } else {
            return cilindro
          }
        })
    };

    function adiciona2() {
        if (numeroMotores < 4) {
          setNumeroMotores(numeroMotores + 1)
          setMotores([...motores, {
            carga: 0,
            dpolia: 0,
            velocidade: 0
          }
          ])
        }
    };

    function remove2() {
        if (numeroMotores > 1) {
          setMotores(motores.filter((motor, index) => (index < (numeroMotores - 1))))
          setNumeroMotores(numeroMotores - 1)
        }
    };

    function mudaCarga(value,index) {
        motores.map((motor,i)=>{
          if(i === index) {
            motor.carga = value
            return motor
          } else {
            return motor
          }
        })
    };

    function mudaDiametropolia(value,index) {
        motores.map((motor,i)=>{ 
          if(i === index) {
            motor.dpolia = value
            return motor
          } else {
            return motor
          }
        })
    };

      function mudaVelocidade2(value,index) {
        motores.map((motor,i)=>{ 
          if(i === index) {
            motor.velocidade = value
            return motor
          } else {
            return motor
          }
        })
    };

    const navigation = useNavigation();

    const Valclassificacao = () => {
        if (classificação == "") {
            return(<Text style={styles.error}>Selecione uma opção válida</Text>)
        }
    }

    const Valfixacao = () => {
        if ((cilindros[0].forca != 0 || cilindros[0].curso != 0 || cilindros[0].velocidade != 0) & fixação == "") {
            return(<Text style={styles.error}>Selecione uma opção válida</Text>)
        }
    }

    const validar = () => {
        let error = false
        setErrorforcac(null)
        setErrorcursoc(null)
        setErrorvelocidadec(null)
        setErrorcargam(null)
        setErrordpoliam(null)
        setErrorvelocidadem(null)
        setErrorcomprimentot(null)
        setErrorvalvulas_cd(null)
        setErrorvalvulas_cf(null)
        setErrorvalvulas_r(null)
        setFixação(null)

        const validar_array = cilindros.map(function(item){
            if (item.forca == null || !/^[\d.?!]+$/.test(item.forca)) {
                setErrorforcac("Valor inválido")
                error = true
            }
            if (item.curso == null || !/^[\d.?!]+$/.test(item.curso)) {
                setErrorcursoc("Valor inválido")
                error = true
            }
            if (item.velocidade == null || !/^[\d.?!]+$/.test(item.velocidade)) {
                setErrorvelocidadec("Valor inválido")
                error = true
            }
        })

        const validar_arraym = motores.map(function(item){
            if (item.carga == null || !/^[\d.?!]+$/.test(item.carga)) {
                setErrorcargam("Valor inválido")
                error = true
            }
            if (item.dpolia == null || !/^[\d.?!]+$/.test(item.dpolia)) {
                setErrordpoliam("Valor inválido")
                error = true
            }
            if (item.velocidade == null || !/^[\d.?!]+$/.test(item.velocidade)) {
                setErrorvelocidadem("Valor inválido")
                error = true
            }
        })
        if (classificação == "" || classificação == null) {
            setClassificação("")
            error = true
        }
        if ((cilindros[0].forca != 0 || cilindros[0].curso != 0 || cilindros[0].velocidade != 0) & (fixação == "" || fixação == null)) {
            setFixação("")
            error = true
        }
        if (comprimentot == null  || comprimentot == 0  || !/^[\d.?!]+$/.test(comprimentot)) {
            setErrorcomprimentot("Valor inválido")
            error = true
        }
        if (valvulas_cd == null || !/^[\d.?!]+$/.test(valvulas_cd)) {
            setErrorvalvulas_cd("Valor inválido")
            error = true
        }
        if (valvulas_cf == null || !/^[\d.?!]+$/.test(valvulas_cf)) {
            setErrorvalvulas_cf("Valor inválido")
            error = true
        }
        if (valvulas_r == null || !/^[\d.?!]+$/.test(valvulas_r)) {
            setErrorvalvulas_r("Valor inválido")
            error = true
        }
        return !error

    }
    

    function navigateToOutput(ent) {
        if (validar()) {
            /* setErrorcomprimentot(null)
            setErrorvalvulas_cd(null)
            setErrorvalvulas_cf(null)
            setErrorvalvulas_r(null) */
            if (cilindros[0].forca == 0 & motores[0].carga == 0) {
                Alert.alert(
                    "Preencimento necessário.",
                    "Para prosseguir, informe os valores de pelo menos um tipo de atuador (Cilindro ou motor)",
                    [
                        /* {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                        }, */
                        { text: "OK", /* onPress: () => navigateToInputs()  */}
                    ]
                );
            } else {
                navigation.navigate('Output', {ent});
            }
        }
        else {
            Alert.alert(
                "Preenchimento necessário.",
                "Preencha o(s) campo(s) corretamente.",
                [
                    /* {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                    }, */
                    { text: "OK", /* onPress: () => navigateToInputs()  */}
                ]
            );
        }
        
    }

    function navigateToInitial() {
        navigation.navigate('Initial', {})
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <StatusBar backgroundColor="#000000" barStyle="light-content"/>

                <Image source={logoIMG} style={styles.logo}/>

                <View style={styles.return}>
                        <TouchableOpacity 
                        style={styles.buttonReturn}
                        onPress={() => navigateToInitial()}
                        >
                            <Entypo name="chevron-thin-left" size={26} color="#EF9303" />
                        </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.scrollview}>
            <View style={styles.imageHeader}>
                <Image source={image} style={styles.image}/>
            </View>

            
            <View style={styles.entry}>

                <KeyboardAvoidingView>
                    

                    <Text style={styles.description}>Preencha os dados de entrada abaixo conforme suas necessidades.</Text>
                    
                    <View style={styles.characteristics}>
                        <Text style={styles.title2}>Classificação do sistema</Text>
                        <Picker
                        style={styles.pickerComponent}
                        selectedValue={classificação}
                        onValueChange={ (itemValue, itemIndex) => setClassificação(itemValue)}
                        >
                            <Picker.Item label="Escolha a faixa de pressão" value="" color="#EF9303" />
                            <Picker.Item label="Sist. de baixa pressão (0 a 14 bar)" value="14" />
                            <Picker.Item label="Sist. de média pressão (14 a 35 bar)" value="35" />
                            <Picker.Item label="Sist. de média-alta pressão (35 a 84 bar)" value="84" />
                            <Picker.Item label="Sist. de alta pressão (84 a 210 bar)" value="210" />
                            {/* <Picker.Item label="Sist. de extra-alta pressão (>210 bar)" value="" /> */}
                        </Picker>
                        {Valclassificacao(true)}
                    </View>

                    <View style={styles.characteristics}>
                        <Text style={styles.title2}>Características do(s) cilindro(s)</Text>
                        {/* <Text style={styles.title3}>• Cilindro(s) hidráulicos</Text> */}

                        {/* <View style={styles.atuador}>
                            <View style={styles.dados}>    
                                <TextInput 
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='Força [kgf]'
                                value={forçap} 
                                onChangeText={setForçap} />
                            </View>

                            <View style={styles.dados}>
                                <TextInput 
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='Curso [mm]'
                                value={cursoh} 
                                onChangeText={setCursoh} />
                            </View>

                            <View style={styles.dados}>
                                <TextInput 
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='Veloc. [cm/s]'
                                value={velocidadea} 
                                onChangeText={setVelocidadea} />
                            </View>

                            <TouchableOpacity 
                            style={styles.buttonRemove} 
                            onPress={() => {}}
                            >
                                <Text style={styles.buttonRemoveText}>-</Text>
                            </TouchableOpacity>
                        
                        </View>    

                        <View style={styles.atuador}>
                            <View style={styles.dados}>    
                                <TextInput 
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='Força [kgf]'
                                value={força2p} 
                                onChangeText={setForça2p} />
                            </View>

                            <View style={styles.dados}>
                                <TextInput 
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='Curso [mm]'
                                value={curso2h} 
                                onChangeText={setCurso2h} />
                            </View>

                            <View style={styles.dados}>
                                <TextInput 
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='Veloc. [cm/s]'
                                value={velocidade2a} 
                                onChangeText={setVelocidade2a} />
                            </View> 

                        </View> */}

                            {
                                cilindros.map((cilindro, index) => {
                                    return (
                                        <View key={index} style={styles.atuador}>
                            
                                            <Text style={styles.subtitle}>C{index + 1}</Text>

                                            <View style={styles.dados}>    
                                                <Input 
                                                containerStyle={styles.contgatuador} 
                                                inputContainerStyle={styles.continputatuador}
                                                style={styles.input}
                                                keyboardType='numeric'
                                                placeholder='Força [kgf]' 
                                                placeholderTextColor='#A9A9A9'
                                                onChangeText={text=>{
                                                    mudaForca(text , index)
                                                    setErrorforcac(null)
                                                }}
                                                errorMessage={errorforcac} />
                                            </View>

                                            <View style={styles.dados}>
                                                <Input 
                                                containerStyle={styles.contgatuador} 
                                                inputContainerStyle={styles.continputatuador}
                                                style={styles.input}
                                                keyboardType='numeric'
                                                placeholder='Curso [mm]'
                                                placeholderTextColor='#A9A9A9'
                                                onChangeText={text=>{
                                                    mudaCurso(text , index)
                                                    setErrorcursoc(null)
                                                }}
                                                errorMessage={errorcursoc} />
                                            </View>

                                            <View style={styles.dados}>
                                                <Input 
                                                containerStyle={styles.contgatuador} 
                                                inputContainerStyle={styles.continputatuador}
                                                style={styles.input}
                                                keyboardType='numeric'
                                                placeholder='Veloc. [cm/s]' 
                                                placeholderTextColor='#A9A9A9'
                                                onChangeText={text=>{
                                                    mudaVelocidade(text, index)
                                                    setErrorvelocidadec(null)
                                                }}
                                                errorMessage={errorvelocidadec} />
                                            </View>
                                        
                                        </View>
                                    )
                                })

                                    
                        
                            }


                        <View style={styles.add_remove}>
                            <TouchableOpacity 
                            style={styles.buttonAdd_Remove} 
                            onPress={() => (adiciona())}
                            >
                                {/* <Text style={styles.buttonAddText}>Adicionar</Text> */}
                                <Entypo name="circle-with-plus" size={37} color="#FFF" />
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={styles.buttonAdd_Remove} 
                            onPress={() => (remove())}
                            >
                            {/* <Text style={styles.buttonRemoveText}>Remover</Text> */}
                            <Entypo name="circle-with-minus" size={37} color="#FFF" />
                            </TouchableOpacity>
                        </View>   

                        <Picker
                        style={styles.pickerComponent}
                        selectedValue={fixação}
                        onValueChange={ (itemValue, itemIndex) => setFixação(itemValue)}
                        >
                            <Picker.Item label="Escolha o tipo de fixação" value="" color="#EF9303" />
                            <Picker.Item label="Uma extremidade livre e outra fixa (F1)" value={2} />
                            <Picker.Item label="Duas extremidades articuladas (F2)" value={1} />
                            <Picker.Item label="Uma extremidade articulada e outra fixa (F3)" value={Math.pow(0.5, 0.5)} />
                            <Picker.Item label="Duas extremidades fixas (F4)" value={0.5} />
                            
                        </Picker>

                        {Valfixacao(true)}
                        
                    </View>
                    <View style={styles.characteristics}>
                        <Text style={styles.title2}>Características do(s) motor(es)</Text>

                            {
                                motores.map((motor, index) => {
                                    return (
                                        <View key={index} style={styles.atuador}>
                            
                                            <Text style={styles.subtitle}>M{index + 1}</Text>

                                            <View style={styles.dados}>    
                                                <Input 
                                                containerStyle={styles.contgatuador} 
                                                inputContainerStyle={styles.continputatuador}
                                                style={styles.input}
                                                keyboardType='numeric'
                                                placeholder='Carga [kg]' 
                                                placeholderTextColor='#A9A9A9'
                                                onChangeText={text=>{
                                                    mudaCarga(text , index)
                                                    setErrorcargam(null)
                                                }}
                                                errorMessage={errorcargam} />
                                            </View>

                                            <View style={styles.dados}>
                                                <Input 
                                                containerStyle={styles.contgatuador} 
                                                inputContainerStyle={styles.continputatuador}
                                                style={styles.input}
                                                keyboardType='numeric'
                                                placeholder='D. Polia [mm]'
                                                placeholderTextColor='#A9A9A9'
                                                onChangeText={text=>{
                                                    mudaDiametropolia(text , index)
                                                    setErrordpoliam(null)
                                                }}
                                                errorMessage={errordpoliam} />
                                            </View>

                                            <View style={styles.dados}>
                                                <Input 
                                                containerStyle={styles.contgatuador} 
                                                inputContainerStyle={styles.continputatuador}
                                                style={styles.input}
                                                keyboardType='numeric'
                                                placeholder='Veloc. [cm/s]' 
                                                placeholderTextColor='#A9A9A9'
                                                onChangeText={text=>{
                                                    mudaVelocidade2(text, index)
                                                    setErrorvelocidadem(null)
                                                }}
                                                errorMessage={errorvelocidadem} />
                                            </View>
                                        
                                        </View>
                                    )
                                })      
                            
                            }

                        <View style={styles.add_remove}>
                            <TouchableOpacity 
                            style={styles.buttonAdd_Remove} 
                            onPress={() => (adiciona2())}
                            >
                                {/* <Text style={styles.buttonAddText}>Adicionar</Text> */}
                                <Entypo name="circle-with-plus" size={37} color="#FFF" />
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={styles.buttonAdd_Remove} 
                            onPress={() => (remove2())}
                            >
                            {/* <Text style={styles.buttonRemoveText}>Remover</Text> */}
                            <Entypo name="circle-with-minus" size={37} color="#FFF" />
                            </TouchableOpacity>
                        </View>  
                    </View>
                    {/* <View style={[styles.calculate, {marginTop: -5, marginBottom: 10}]}>
                        <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => (console.log(ent))}
                        >
                            <Text style={styles.buttonText}>M. Valores</Text>
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.characteristics}>
                        <Text style={styles.title2}>Tubulação e componentes</Text>
                        
                            <View style={styles.dados}>
                                <Text style={styles.texto}>Comprimento da tubulação:</Text>
                                <Input
                                containerStyle={styles.contg} 
                                inputContainerStyle={styles.continput}
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='[m]'
                                placeholderTextColor='#A9A9A9'
                                value={comprimentot} 
                                onChangeText={value => {
                                    setComprimentot(value)
                                    setErrorcomprimentot(null)
                                }}
                                errorMessage={errorcomprimentot}  />
                            </View> 

                            <View style={styles.dados}>
                                <Text style={styles.texto}>Válvulas de controle direcional:</Text>
                                <Input 
                                containerStyle={styles.contg} 
                                inputContainerStyle={styles.continput}
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='ΔP [bar]'
                                placeholderTextColor='#A9A9A9'
                                value={valvulas_cd} 
                                onChangeText={value => {
                                    setValvulas_cd(value)
                                    setErrorvalvulas_cd(null)
                                }}
                                errorMessage={errorvalvulas_cd} />
                            </View> 

                            <View style={styles.dados}>
                                <Text style={styles.texto}>Válvulas de controle de fluxo:</Text>
                                <Input 
                                containerStyle={styles.contg} 
                                inputContainerStyle={styles.continput}
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='ΔP [bar]'
                                placeholderTextColor='#A9A9A9'
                                value={valvulas_cf} 
                                onChangeText={value => {
                                    setValvulas_cf(value)
                                    setErrorvalvulas_cf(null)
                                }}
                                errorMessage={errorvalvulas_cf} />
                            </View> 

                            <View style={styles.dados}>
                                <Text style={styles.texto}>Válvulas de retenção:</Text>
                                <Input 
                                containerStyle={styles.contg} 
                                inputContainerStyle={styles.continput}
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder='ΔP [bar]'
                                placeholderTextColor='#A9A9A9'
                                value={valvulas_r} 
                                onChangeText={value => {
                                    setValvulas_r(value)
                                    setErrorvalvulas_r(null)
                                }}
                                errorMessage={errorvalvulas_r} />
                            </View> 
                        

                    </View>
                        

                    {/* <View style={styles.calculate}>
                        <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => (console.log(motores[0].carga))}
                        >
                            <Text style={styles.buttonText}>Mostrar</Text>
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.calculate}>
                        <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigateToOutput(ent)}
                        >
                            <Text style={styles.buttonText}>Calcular</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            
            </View>
            </ScrollView>
        </View>

        

        
    );
}