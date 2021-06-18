import React, {useState, useEffect} from 'react';
import { View, StatusBar, Text, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LineChart } from "react-native-chart-kit";

import logoIMG from '../../assets/logo.png'
import image from '../../assets/graphic.png';

import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';

export default function Graphics() {

    const [loading, setLoading] = useState(true)

    const route = useRoute();
    const resultados = route.params.resultados
    const resultadosm = route.params.resultadosm
    const out = route.params.out

    const a = [0, 20, 30, 40, 50, 60, 70, 90, 100, 150, 200]
    const b = [1000, 3000, 6000, 9000, 12000, 15000, 18000]

    const x_axis = [];
    for (let n = 0; n <= 100; n++) {
        x_axis.push(n);
    }
    for (let n = 0; n<=100; n+=6) {
        x_axis.splice(n, 1)
    }

    const chartConfig = {
        backgroundGradientFrom: "#000000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#000000",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(1, 23, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const screenWidth = 340/* Dimensions.get("window").width */;

    const navigation = useNavigation();

    function navigateToOutput() {
        navigation.navigate('Output', {});
    }

    useEffect(() => {setLoading(false)})

        if (loading) {
            return(
                <View style={styles.containerLoading}>
                    <ActivityIndicator
                        size = "large"
                        color = "#f1c40f"
                    />
                    <Text>Aguarde, gerando os gráficos.</Text>
                </View>
                )
            }

    if (resultadosm[0].Tm == '-') {
        const data = {
            labels: out.forcas,
            datasets: [
                {
                    data: out.arrays.map((item, index) => {
                        return item.dps14
                    }),
                    color:  (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dps35
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dps84
                    }),
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dps210
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
            ],
            legend: ["14 bar", "35 bar", "84 bar", "210 bar"],
        };
    
        const data2 = {
            labels: out.forcas,
            datasets: [
                {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf1
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf3
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
                
            ],
            legend: ["F1", "F2", "F3", "F4"],
        };
    
        const data3 = {
            labels: out.forcas,
            datasets: [
                {
                    data: out.arrays.map((item, index) => {
                        return item.pts3810
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.pts5080
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.pts8260
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.pts10160
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }, 
                
            ],
            legend: ["38.10", "50.80", "82.60", "101.60"],
        };

        const data6 = {
            labels: out.vazoes,
            datasets: [
                {
                    data: out.arrayb.map((item, index) => {
                        return item.vg1
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg3
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }, 
                
            ],
            legend: [`${out.rotacao[0]}`, `${out.rotacao[1]}`, `${out.rotacao[2]}`, `${out.rotacao[3]}`],
        };

        

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <StatusBar backgroundColor="#000000" barStyle="light-content"/>
    
                    <Image source={logoIMG} style={styles.logo}/>
    
                    <View style={styles.return}>
                            <TouchableOpacity 
                            style={styles.buttonReturn}
                            onPress={() => navigateToOutput()}
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
    
                <Text style={styles.description}>Os resultados obtidos encontram-se abaixo.</Text>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[CILINDRO] Diâmetro do pistão (Mín) x Força</Text>
                    </View>

                    
                        <Text style={styles.legend}>Classificação do sistema (Pressão máxima)</Text>

                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Diâmetro [mm] </Text>
                    <LineChart
                        data={data}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />  
                    
                    </View> 

                    <Text style={styles.legendx}>Força [Kgf]</Text>

                    
                    
                    
                    

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[CILINDRO] Diâmetro da haste (Mín) x Força</Text>
                    </View>
                        <Text style={styles.legend}>Tipo de fixação</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Diâmetro [mm] </Text>
                    <LineChart
                        data={data2}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Força [Kgf]</Text>

                </View>


                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[CILINDRO] Pressão de trabalho x Força</Text>
                    </View>
                        <Text style={styles.legend}>Diâmetro do pistão (Comercial) [mm]</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Pressão [Bar] </Text>
                    <LineChart
                        data={data3}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Força [Kgf]</Text>

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[BOMBA] Volume de absorção x Vazão</Text>
                    </View>
                        <Text style={styles.legend}>Rotação [RPM]</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Vg [cm³/rot] </Text>
                    <LineChart
                        data={data6}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Vazão [l/min]</Text>

                </View>
                

                </View>

                {/* {graphics_cilindros(true)} */}
                </ScrollView>
            </View>
        )

    } else if (resultados[0].dh == '-') {
        const data4 = {
            labels: out.cargas,
            datasets: [
                {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm1
                    }),
                    color:  (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm3
                    }),
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
            ],
            legend: [`${out.dpolia[0]}`, `${out.dpolia[1]}`, `${out.dpolia[2]}`, `${out.dpolia[3]}`],
        };

        const data5 = {
            labels: out.velocidades,
            datasets: [
                {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot1
                    }),
                    color:  (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot3
                    }),
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
            ],
            legend: [`${out.dpolia[0]}`, `${out.dpolia[1]}`, `${out.dpolia[2]}`, `${out.dpolia[3]}`],
        };

        const data6 = {
            labels: out.vazoes,
            datasets: [
                {
                    data: out.arrayb.map((item, index) => {
                        return item.vg1
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg3
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }, 
                
            ],
            legend: [`${out.rotacao[0]}`, `${out.rotacao[1]}`, `${out.rotacao[2]}`, `${out.rotacao[3]}`],
        };

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <StatusBar backgroundColor="#000000" barStyle="light-content"/>
    
                    <Image source={logoIMG} style={styles.logo}/>
    
                    <View style={styles.return}>
                            <TouchableOpacity 
                            style={styles.buttonReturn}
                            onPress={() => navigateToOutput()}
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
    
                <Text style={styles.description}>Os resultados obtidos encontram-se abaixo.</Text>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[MOTOR] Torque x Carga</Text>
                    </View>

                    
                        <Text style={styles.legend}>Diâmetro da polia [mm]</Text>

                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Torque [N.m]</Text>
                    <LineChart
                        data={data4}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />  
                    
                    </View> 

                    <Text style={styles.legendx}>Carga [Kg]</Text>

                    
                    
                    
                    

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[MOTOR] Rotação x Velocidade</Text>
                    </View>

                    
                        <Text style={styles.legend}>Diâmetro da polia [mm]</Text>

                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Rotação [RPM]</Text>
                    <LineChart
                        data={data5}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />  
                    
                    </View> 

                    <Text style={styles.legendx}>Velocidade [m/s]</Text>

                    
                    
                    
                    

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[BOMBA] Volume de absorção x Vazão</Text>
                    </View>
                        <Text style={styles.legend}>Rotação [RPM]</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Vg [cm³/rot] </Text>
                    <LineChart
                        data={data6}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Vazão [l/min]</Text>

                </View>

                </View>

                {/* {graphics_cilindros(true)} */}
                </ScrollView>
            </View>
        )

    } else {

        const data = {
            labels: out.forcas,
            datasets: [
                {
                    data: out.arrays.map((item, index) => {
                        return item.dps14
                    }),
                    color:  (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dps35
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dps84
                    }),
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dps210
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
            ],
            legend: ["14 bar", "35 bar", "84 bar", "210 bar"],
        };
    
        const data2 = {
            labels: out.forcas,
            datasets: [
                {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf1
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf3
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.dhsf4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
                
            ],
            legend: ["F1", "F2", "F3", "F4"],
        };
    
        const data3 = {
            labels: out.forcas,
            datasets: [
                {
                    data: out.arrays.map((item, index) => {
                        return item.pts3810
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.pts5080
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.pts8260
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrays.map((item, index) => {
                        return item.pts10160
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }, 
                
            ],
            legend: ["38.10", "50.80", "82.60", "101.60"],
        };

        const data4 = {
            labels: out.cargas,
            datasets: [
                {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm1
                    }),
                    color:  (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm3
                    }),
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arraysm.map((item, index) => {
                        return item.Tm4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
            ],
            legend: [`${out.dpolia[0]}`, `${out.dpolia[1]}`, `${out.dpolia[2]}`, `${out.dpolia[3]}`],
        };

        const data5 = {
            labels: out.velocidades,
            datasets: [
                {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot1
                    }),
                    color:  (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3,
                }, {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot3
                    }),
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arraysmv.map((item, index) => {
                        return item.rot4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }
            ],
            legend: [`${out.dpolia[0]}`, `${out.dpolia[1]}`, `${out.dpolia[2]}`, `${out.dpolia[3]}`],
        };

        const data6 = {
            labels: out.vazoes,
            datasets: [
                {
                    data: out.arrayb.map((item, index) => {
                        return item.vg1
                    }),
                    color: (opacity = 1) => `rgba(239, 147, 3, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg2
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg3
                    }),
                    color:  (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 3
                }, {
                    data: out.arrayb.map((item, index) => {
                        return item.vg4
                    }),
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 3
                }, 
                
            ],
            legend: [`${out.rotacao[0]}`, `${out.rotacao[1]}`, `${out.rotacao[2]}`, `${out.rotacao[3]}`],
        };

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <StatusBar backgroundColor="#000000" barStyle="light-content"/>
    
                    <Image source={logoIMG} style={styles.logo}/>
    
                    <View style={styles.return}>
                            <TouchableOpacity 
                            style={styles.buttonReturn}
                            onPress={() => navigateToOutput()}
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
    
                <Text style={styles.description}>Os resultados obtidos encontram-se abaixo.</Text>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[CILINDRO] Diâmetro do pistão (Mín) x Força</Text>
                    </View>

                    
                        <Text style={styles.legend}>Classificação do sistema (Pressão máxima)</Text>

                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Diâmetro [mm] </Text>
                    <LineChart
                        data={data}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />  
                    
                    </View> 

                    <Text style={styles.legendx}>Força [Kgf]</Text>

                    
                    
                    
                    

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[CILINDRO] Diâmetro da haste (Mín) x Força</Text>
                    </View>
                        <Text style={styles.legend}>Tipo de fixação</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Diâmetro [mm] </Text>
                    <LineChart
                        data={data2}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Força [Kgf]</Text>

                </View>


                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[CILINDRO] Pressão de trabalho x Força</Text>
                    </View>
                        <Text style={styles.legend}>Diâmetro do pistão (Comercial) [mm]</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Pressão [Bar] </Text>
                    <LineChart
                        data={data3}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Força [Kgf]</Text>

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[MOTOR] Torque x Carga</Text>
                    </View>

                    
                        <Text style={styles.legend}>Diâmetro da polia [mm]</Text>

                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Torque [N.m]</Text>
                    <LineChart
                        data={data4}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />  
                    
                    </View> 

                    <Text style={styles.legendx}>Carga [Kg]</Text>

                    
                    
                    
                    

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[MOTOR] Rotação x Velocidade</Text>
                    </View>

                    
                        <Text style={styles.legend}>Diâmetro da polia [mm]</Text>

                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Rotação [RPM]</Text>
                    <LineChart
                        data={data5}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />  
                    
                    </View> 

                    <Text style={styles.legendx}>Velocidade [m/s]</Text>

                    
                    
                    
                    

                </View>

                <View style={styles.graphics}>
                    <View style={styles.info}>
                        <Text style={styles.title}>[BOMBA] Volume de absorção x Vazão</Text>
                    </View>
                        <Text style={styles.legend}>Rotação [RPM]</Text>
                    
                    <View style={styles.graphic}>
                    <Text style={styles.legendy}>Vg [cm³/rot] </Text>
                    <LineChart
                        data={data6}
                        style={styles.linechart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        withDots={false}
                        verticalLabelRotation={35}
                        yAxisInterval={7}
                        xLabelsOffset={-11}
                        hidePointsAtIndex={x_axis/* [1,2,3,4,5,
                            7,8,9,10,
                            11,12,14,15,
                            16,17,18,19,21,
                            22,23,24,25,
                            26,28,29,30,
                            31,32,33,35,
                            36,37,38,39,40,
                            42,43,44,45,46,47,48,49,
                            50,51,52,53,54,55,
                            56,57,58,59,60
                        ] */}
                    />

                    </View>
                    
                    <Text style={styles.legendx}>Vazão [l/min]</Text>

                </View>


                </View>

                {/* {graphics_cilindros(true)} */}
                </ScrollView>
            </View>
           
        )

    }
    
}