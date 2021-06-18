import React, {useEffect, useState} from 'react';
import { View, StatusBar, Image, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

import logoIMG from '../../assets/logo.png'

import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';

export default function Output() {
    

    /* {
        resultados.map((item, index) => {
            return (
                <View key={index} style={styles.saida}>
                    <Text style={styles.title2}>Atuador C{index+1}</Text>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Diâmetro do pistão (Mín): </Text>
                            <Text style={styles.subtitle2}>{item.dp} mm</Text>
                        </View>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Diâmetro do pistão (Com): </Text>
                            <Text style={styles.subtitle2}>{item.dpc} mm</Text>
                        </View>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Diâmetro da haste (Mín): </Text>
                            <Text style={styles.subtitle2}>{item.dh} mm</Text>
                        </View>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Diâmetro da haste (Com): </Text>
                            <Text style={styles.subtitle2}>{item.dhc} mm</Text>
                        </View>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Pressão de trabalho: </Text>
                            <Text style={styles.subtitle2}>{item.pt} bar</Text>
                        </View>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Vazão de avanço: </Text>
                            <Text style={styles.subtitle2}>{item.qa} l/min</Text>
                        </View>
                        <View style={styles.result}>
                            <Text style={styles.subtitle}>Vazão de retorno: </Text>
                            <Text style={styles.subtitle2}>{item.qr} l/min</Text>
                        </View>
                        
                </View>
            )
        })
    } */
    

    /* const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
    `;

const createAndSavePDF = async (html) => {
    try {
      const { uri } = await Print.printToFileAsync({ htmlContent });
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
          await MediaLibrary.createAssetAsync(uri);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }; */

    const [loading, setLoading] = useState(true)

    const route = useRoute();
    const ent = route.params.ent

    /* const textos = [
        'Diâmetro mín. do pistão',
        'Diámetro comercial do pistão [parker]', 
        'Pressão de trabalho regulada',
        'Diâmetro mín. da haste',
        'Diâmetro comercial da haste [parker]',
        'Tempo de avanço/retorno',
        'Vazão de avanço',
    ] */

    const dcc = 
    [
        /* Catálogo Parker */
        {
            dpc:38.10,
            dhc:[15.90, 25.40]   
        },
        {
            dpc:50.80,
            dhc:[25.40, 34.90]
        },
        {
            dpc:63.50,
            dhc:[25.40, 34.90, 44.50]
        },
        {
            dpc:82.60,
            dhc:[34.90, 44.50, 50.80]
        },
        {
            dpc:101.60,
            dhc:[44.50, 50.80, 63.50]
        },
        {
            dpc:127.00,
            dhc:[50.80, 63.50, 76.20]
        },
        {
            dpc:152.40,
            dhc:[63.50, 76.20, 101.60]
        },
        /* Catálogo Parker */

    ];

    const dmc = [
        /* Catálogo Parker */
        {
            pmax: 24,
            dmc: [5, 6.3, 8, 10, 12.5, 16, 22]
        },
        {
            pmax: 35,
            dmc: [6.3, 8, 10, 12.5, 16, 22]
        },
        {
            pmax: 70,
            dmc: [6.3, 10, 12.5, 16, 19]
        },
        {
            pmax: 345,
            dmc: [19, 25, 31.5, 38, 51]
        },
        /* Catálogo Parker */

        /* Catálogo Traspower */
        {
            pmax: 28,
            dmc: [6.4, 8, 9.5, 12.7]
        },
        {
            pmax: 210,
            dmc: [6.4, 7.9, 9.5, 12.7, 15.9, 19, 25.4, 31.8]
        },
        {
            pmax: 280,
            dmc: [9.5, 12.7, 15.9, 19.1, 25.4]
        },
        /* Catálogo Traspower */
    ]

    const motorc = [
        /* Catálogo Parker */
        {
            torque: 71.1,
            rotacao: 1141,
            potencia: 8.5,
            vg: 36,
            ref: 'TE 0036'

        },
        {
            torque: 99,
            rotacao: 1024,
            potencia: 10.4,
            vg: 41,
            ref: 'TE 0045'

        },
        {
            torque: 127,
            rotacao: 1020,
            potencia: 12.8,
            vg: 49,
            ref: 'TE 0050'

        },
        {
            torque: 176,
            rotacao: 877,
            potencia: 14.7,
            vg: 65,
            ref: 'TE 0065'

        },
        {
            torque: 220,
            rotacao: 695,
            potencia: 17.3,
            vg: 82,
            ref: 'TE 0080'

        },
        {
            torque: 264,
            rotacao: 582,
            potencia: 17.4,
            vg: 98,
            ref: 'TE 0100'

        },
        {
            torque: 352,
            rotacao: 438,
            potencia: 17.3,
            vg: 130,
            ref: 'TE 0130'

        },
        {
            torque: 436,
            rotacao: 348,
            potencia: 17,
            vg: 163,
            ref: 'TE 0165'

        },
        {
            torque: 528,
            rotacao: 292,
            potencia: 17.4,
            vg: 195,
            ref: 'TE 0195'

        },
        {
            torque: 514,
            rotacao: 328,
            potencia: 17.4,
            vg: 228,
            ref: 'TE 0230'

        },
        {
            torque: 550,
            rotacao: 287,
            potencia: 16.7,
            vg: 260,
            ref: 'TE 0260'

        },
        {
            torque: 582,
            rotacao: 256,
            potencia: 15.7,
            vg: 293,
            ref: 'TE 0295'

        },
        {
            torque: 600,
            rotacao: 228,
            potencia: 14.8,
            vg: 328,
            ref: 'TE 0330'

        },
        {
            torque: 648,
            rotacao: 203,
            potencia: 13.6,
            vg: 370,
            ref: 'TE 0365'

        },
        {
            torque: 628,
            rotacao: 191,
            potencia: 12.5,
            vg: 392,
            ref: 'TE 0390'

        },
        /* Catálogo Parker */
    ]

    const ref_bombas = [
        {
            Pmin: 10,
            Pmax: 200,
            Qmin: 5,
            Qmax: 300,
            tipo: 'Parafuso'
        },
        {
            Pmin: 10,
            Pmax: 210,
            Qmin: 5,
            Qmax: 150,
            tipo: 'Engrenagens'
        },
        {
            Pmin: 10,
            Pmax: 210,
            Qmin: 10,
            Qmax: 260,
            tipo: 'Palhetas'
        },
        {
            Pmin: 40,
            Pmax: 450,
            Qmin: 20,
            Qmax: 160,
            tipo: 'Pistons axiais'
        },
        {
            Pmin: 50,
            Pmax: 700,
            Qmin: 1,
            Qmax: 35,
            tipo: 'Pistons radiais'
        },
    ]

    /* const [errorRepressao, setErrorRepressao] = useState(null);
    const [errorReretorno, setErrorReretorno] = useState(null);
    const [errorResuccao, setErrorResuccao] = useState(null); */
    

    const pressãote = (ent.classificação - (ent.classificação*0.15)).toFixed(2);

    const resultados = ent.cilindros.map(function(item){
        if (item.forca == 0 || item.curso == 0 || item.velocidade == 0) {
            var dp = '-'
            var dh = '-'
            var dpc = '-'
            var dhc = '-'
            var ap = '-'
            var ac = '-'
            var pt = '-'
            var t = '-' 
            var qa = '-'
            var qia = '-'
            var qr = '-'
            var qir = '-'
        }
            else {
                var dp = (Math.sqrt((4*item.forca*1.35)/(Math.PI*pressãote))*10).toFixed(2)
                var dh = (Math.pow((64*3.5*((Math.pow((item.curso/10)*ent.fixação, 2)*item.forca*9.81*1.35)))/
                (Math.pow(Math.PI, 3)*2.1*Math.pow(10, 7)), (1/4))*10).toFixed(2)
                const ord_arraydcc = dcc.sort((valor_a, valor_b) => valor_a.dpc - valor_b.dpc)
                const a = ord_arraydcc.find((valor) => (valor.dpc > dp))
                if (typeof a === 'undefined') {
                    var dpc = dp
                    var dhc = dh
                } else {
                    var dpc = (a.dpc).toFixed(2)
                    var arraydhc = a.dhc
                    if (dh > Math.max(...arraydhc)) {
                        var dhc = dh
                    } else {
                        var dhc = (arraydhc.find((valor) => (valor > dh))).toFixed(2)
                    }
                }
                var ap = (Math.PI*Math.pow(dpc, 2)/4).toFixed(2)
                var ac = (Math.PI*(Math.pow(dpc, 2) - Math.pow(dhc, 2))/4).toFixed(2)
                var pt = ((item.forca*1.35)/(Math.PI*Math.pow((dpc)/10, 2)/4)).toFixed(2)
                var t = (item.curso/(item.velocidade*10)).toFixed(2)
                var qa = ((item.curso*ap/t)*(60/1000000)).toFixed(2)
                var qr = (((item.curso*ac)/t)*(60/1000000)).toFixed(2)
                var qia = (((item.velocidade*10)*ac)*(60/1000000)).toFixed(2)
                var qir = (((item.velocidade*10)*ap)*(60/1000000)).toFixed(2)
                
            }
            const forcas = [item.forca]
            forcas.push(1)
            
        return {
            dp, dpc, ap, ac, pt, dh, dhc, t, qa, qr, qia, qir, forcas,
        }}
    ) 

    const resultadosm = ent.motores.map(function(item){
        if (item.carga == 0 || item.dpolia == 0 || item.velocidade == 0) {
            var Tm = '-'
            var tmc = '-'
            var rotm = '-'
            var rotmc = '-'
            var potm = '-'
            var potmc = '-'
            var vgm = '-'
            var Qm = '-'
        } else {
            var Tm = (item.carga*9.81*(item.dpolia*Math.pow(10, -3)/2)).toFixed(2)
            var rotm = (((item.velocidade/100)*60)/(2*Math.PI*(item.dpolia*Math.pow(10, -3)/2))).toFixed(2)
            var potm = (Tm*rotm/9549).toFixed(2)
            const ord_arraymotorc = motorc.sort((valor_a, valor_b) => valor_a.vg - valor_b.vg)
            const ver = ord_arraymotorc.find((valor) => (valor.torque > Tm & valor.potencia > potm & valor.rotacao > rotm))
            const nvm = 0.90 /* Rendimento volumétrico [0.82 a 0.90] */
            if (typeof ver === 'undefined') {
                var tmc = Tm
                var rotmc = rotm
                var potmc = potm
                var vgm = '-'
                var Qm = '-'
            } else {
                var potmc = (ver.potencia).toFixed(2)
                var tmc = (ver.torque).toFixed(2)
                var rotmc = (ver.rotacao).toFixed(2)
                var vgm = (ver.vg)
                var Qm = ((vgm*rotm)/(1000*nvm)).toFixed(2)
                var ref = ver.ref
            }
        }
            
        return {
            Tm, rotm, potm, potmc, tmc, rotm, rotmc, vgm, Qm, ref
        }}
    ) 

    const qat = resultados.reduce((vaozaoa_total, vazaoa) => {
        return vaozaoa_total + parseFloat(vazaoa.qa)
    }, 0).toFixed(2)
    const qrt = resultados.reduce((vaozaor_total, vazaor) => {
        return vaozaor_total + parseFloat(vazaor.qr)
    }, 0).toFixed(2)
    const qiat = resultados.reduce((vaozaoia_total, vazaoia) => {
        return vaozaoia_total + parseFloat(vazaoia.qia)
    }, 0).toFixed(2)
    const qirt = resultados.reduce((vaozaoir_total, vazaoir) => {
        return vaozaoir_total + parseFloat(vazaoir.qir)
    }, 0).toFixed(2)

    const qtm = resultadosm.reduce((vaozaom_total, vazaom) => {
        return vaozaom_total + parseFloat(vazaom.Qm)
    }, 0).toFixed(2)

    const vazoes = [
        {
            qat: qat, 
            qrt: qrt,
            qiat: qiat,
            qirt: qirt
        }
    ]

    if (isNaN(Math.max(...[qat, qrt, qiat, qirt ]))) {
        var qb = (parseFloat(qtm)).toFixed(2) /* Vazão total do sitema => Vazão da bomba */
    }
    else if (isNaN(qtm)) {
        var qb = (Math.max(...[qat, qrt, qiat, qirt ])).toFixed(2) /* Vazão total do sitema => Vazão da bomba */
    }
    else {
        var qb = (Math.max(...[qat, qrt, qiat, qirt ]) + parseFloat(qtm)).toFixed(2) /* Vazão total do sitema => Vazão da bomba */
    }
    const pt_cil = Math.max(...resultados.map((pressaot) => {
        const pts = pressaot.pt
        return pts
        }
    ))
    if (isNaN(pt_cil)) {
        var maior_pt = pressãote
    } else {
        var maior_pt = pt_cil
    }
    if (ent.classificação < 200) {
        var v_pressao = (121.65*Math.pow(maior_pt, (1/3.3))).toFixed(2) /* Velocidade recomendada para a linha de pressão (cm/s) */
    } else {
        var v_pressao = 600 /* Velocidade recomendada para a linha de pressão (cm/s) */
    }
    const v_succao = 100 /* Velocidade recomendada para a linha de sucção (cm/s) */
    const v_retorno = 300 /* Velocidade recomendada para a linha de retorno (cm/s) */
    const dt_p = ((Math.sqrt((4*qb/(Math.PI*v_pressao))*(1000/60)))*10).toFixed(2)
    const dt_s = ((Math.sqrt((4*qb/(Math.PI*v_succao))*(1000/60)))*10).toFixed(2)
    const dt_r = ((Math.sqrt((4*qb/(Math.PI*v_retorno))*(1000/60)))*10).toFixed(2)

    const ord_arraydmc = dmc.sort((valor_a, valor_b) => valor_a.pmax - valor_b.pmax)
    const b = ord_arraydmc.find((valor) => (valor.pmax >= ent.classificação))
    if (typeof b === 'undefined') {
        var dt_pc = dt_p
        var dt_sc = dt_s
        var dt_rc = dt_r 
    } else {
        var arraydt_c = b.dmc
        if (dt_p > Math.max(...arraydt_c)) {
            var dt_pc = dt_p
        } else {
            var dt_pc = (arraydt_c.find((valor) => (valor > dt_p))).toFixed(2)
        }
        if (dt_s > Math.max(...arraydt_c)) {
            var dt_sc = dt_s
        } else {
            var dt_sc = (arraydt_c.find((valor) => (valor > dt_s))).toFixed(2)
        }
        if (dt_r > Math.max(...arraydt_c)) {
            var dt_rc = dt_r
        } else {
            var dt_rc = (arraydt_c.find((valor) => (valor > dt_r))).toFixed(2)
        }
    }
    const visc_cin = 0.65 /* Viscosidade cinemática para o oléo hidráulico SAE 10 (cm^2/s) */ 
    const densidade = 881.81 /* Densidade do oléo SAE-10 (LIVRO FIALHO) (kg/m^3) */
    const g = 9.81 /* Aceleração da gravidade (m/s^2) */
    const Re_pressao = (((dt_pc/10)*v_pressao)/visc_cin).toFixed(2)
    if (Re_pressao <= 2000) {
        var dt_pressao = dt_p
        var dt_pressaoc = dt_pc
        /* Perda de carga */
        var f = (90/Re_pressao).toFixed(4) /* Fator de atrito para escoamento laminar */
        var deltapl = ((f*ent.comprimentot*densidade*Math.pow((v_pressao/100), 2)/(2*dt_pc/1000))*(1/100000)).toFixed(2) /* Perda maior (bar) */
        var deltaplm = (parseFloat(ent.valvulas_cd) + parseFloat(ent.valvulas_cf) + parseFloat(ent.valvulas_r)).toFixed(2)  /* Perda menor (bar) */
        var deltapt = (parseFloat(deltapl) + parseFloat(deltaplm)).toFixed(2) /* Perda de carga total (bar) */

        /* Perda de carga */

    } else {
        var dt_pressao = 'XXXX'
        var dt_pressaoc = 'XXXX'
        var deltapl = 'XXXX'
        var deltaplm = 'XXXX'
        var deltapt = 'XXXX'
    }
    const Re_succao = (((dt_sc/10)*v_succao)/visc_cin).toFixed(2)
    if (Re_succao <= 2000) {

        var dt_succao = dt_s
        var dt_succaoc = dt_sc 
    } else {
        var dt_succao = 'XXXX'
        var dt_succaoc = 'XXXX'
    }
    const Re_retorno = (((dt_rc/10)*v_retorno)/visc_cin).toFixed(2)
    if (Re_retorno <= 2000) {
        var dt_retorno = dt_r
        var dt_retornoc = dt_rc 
    } else {
        var dt_retorno = 'XXXX'
        var dt_retornoc = 'XXXX'
    }

    if (isNaN(pt_cil)) {
        var maior_pt = (parseFloat(pressãote) + parseFloat(deltapt)).toFixed(2)
    } else {
        var maior_pt = (parseFloat(pt_cil) + parseFloat(deltapt)).toFixed(2)
    }
    const bombas = ref_bombas.map(function(item){
        if (maior_pt > item.Pmin & item.Pmax > maior_pt & qb > item.Qmin & item.Qmax > qb) {
            var tipo_bomba = item.tipo
        }
        else {
            var tipo_bomba = '-'
        }

        return {
            tipo_bomba
        }
    })
    
    if (ent.classificação == "14") {
        var n = 900 /* Rotação (rpm)*/
    }
    else if(ent.classificação == "35") {
        var n = 1200 /* Rotação (rpm)*/
    }
    else if(ent.classificação == "84") {
        var n = 1500 /* Rotação (rpm)*/
    }
    else if(ent.classificação == "210") {
        var n = 1800 /* Rotação (rpm)*/
    }
    const nv = 0.91 /* Rendimento volumétrico (0.91 – 0.93) */
    const nmh = 0.82 /* Rendimento mecânico – hidráulico (0.82 – 0.97) */
    const nt = nv*nmh /* Rendimento total (0,75 – 0,97) */
    const vg = (((qb)/(n*nv))*1000).toFixed(2) /* Volume de absorção (cm³/rotação) */
    const mt = (((qb*maior_pt)/(nmh))/100).toFixed(2) /* Torque absorvido (N.m) */
    const pot_abs = ((mt*n)/(9549)).toFixed(2) /* Potência absorvida (kW) */
    const parametros_bomba = [{qb: qb, vg: vg, maior_pt: maior_pt, mt: mt, pot_abs: pot_abs}]

    const K = 13 /* [Kcal/h.m^2.°C] Coeficiente de troca térmica */
    const T1 = 30 /* [°C] Temperatura ambiente */
    const T2 = 45 /* [°C] Temperatura que o fluido deve ser mantido */
    const VR = ((3*qb)/1000).toFixed(2) /* [m^3] Volume do reservatorio */
    const L = (Math.pow((VR/6), (1/3))).toFixed(2) /* [m] Dimensão do reservatorio */
    const Sr = (16*Math.pow(L, 2)).toFixed(2) /* [m^2] Superfície de troca térmica do reservatório */
    const qtermr = (K*Sr*(T2-T1)).toFixed(2) /* Carga térmica dissipada do reservatório */
    const qtermn = (1.434*deltapt*qb).toFixed(2) /* Carga térmica dissipada necessária */
    const qtermtc = (parseFloat(qtermn) - parseFloat(qtermr)).toFixed(2)

    const parametros_tubulacao = [
        {
            dt_pressao: dt_pressao, 
            dt_pressaoc: dt_pressaoc,
            Re_pressao: Re_pressao,
            dt_succao: dt_succao, 
            dt_succaoc: dt_succaoc,
            Re_succao: Re_succao,
            dt_retorno: dt_retorno,
            dt_retornoc: dt_retornoc,
            Re_retorno: Re_retorno,
            deltapt: deltapt
        }
    ]

    if (ent.cilindros[0].forca == 0 || ent.cilindros[0].curso == 0 || ent.cilindros[0].velocidade == 0) {
        var array_forcas = []
        var arrays = []


    } else {

        const forca = Math.max(...ent.cilindros.map((item) => {
            const f = item.forca
            return f
            }
        ))
        var array_forcas = []
        for (let n = 0; n <= (2*forca); n+=(2*forca/40)) {
            array_forcas.push(n.toFixed(2));
        }
        array_forcas.sort((valor_a, valor_b) => valor_a - valor_b)
    
        const classificacoes = [14, 35, 84, 210]
        const pressoeste = classificacoes.map((item, index) => {
            const pste = (item - (item*0.15)).toFixed(2)
            return (
                pste
            )
        })

        const curso = Math.max(...ent.cilindros.map((item) => {
            const c = item.curso
            return c
            }
        ))
        const fixacoes = [2, 1, Math.pow(0.5, 0.5), 0.5]
    
        const dpcs = [38.10, 50.80, 63.50, 82.60, 101.60, 127.00, 152.40]
        var arrays = array_forcas.map((item, index) => {
            const dps14 = (Math.sqrt((4*item*1.35)/(Math.PI*pressoeste[0]))*10).toFixed(2)
            const dps35 = (Math.sqrt((4*item*1.35)/(Math.PI*pressoeste[1]))*10).toFixed(2)
            const dps84 = (Math.sqrt((4*item*1.35)/(Math.PI*pressoeste[2]))*10).toFixed(2)
            const dps210 = (Math.sqrt((4*item*1.35)/(Math.PI*pressoeste[3]))*10).toFixed(2)
            const dhsf1 = /* Corrigir equação */ (Math.pow((64*3.5*((Math.pow((curso/10)*fixacoes[0], 2)*item*9.81*1.35)))/
            (Math.pow(Math.PI, 3)*2.1*Math.pow(10, 7)), (1/4))*10).toFixed(2)
            const dhsf2 = /* Corrigir equação */ (Math.pow((64*3.5*((Math.pow((curso/10)*fixacoes[1], 2)*item*9.81*1.35)))/
            (Math.pow(Math.PI, 3)*2.1*Math.pow(10, 7)), (1/4))*10).toFixed(2)
            const dhsf3 = /* Corrigir equação */ (Math.pow((64*3.5*((Math.pow((curso/10)*fixacoes[2], 2)*item*9.81*1.35)))/
            (Math.pow(Math.PI, 3)*2.1*Math.pow(10, 7)), (1/4))*10).toFixed(2)
            const dhsf4 = /* Corrigir equação */ (Math.pow((64*3.5*((Math.pow((curso/10)*fixacoes[3], 2)*item*9.81*1.35)))/
            (Math.pow(Math.PI, 3)*2.1*Math.pow(10, 7)), (1/4))*10).toFixed(2)
            const pts3810 = ((item*1.35)/(Math.PI*Math.pow((dpcs[0])/10, 2)/4)).toFixed(2)
            const pts5080 = ((item*1.35)/(Math.PI*Math.pow((dpcs[1])/10, 2)/4)).toFixed(2)
            const pts6350 = ((item*1.35)/(Math.PI*Math.pow((dpcs[2])/10, 2)/4)).toFixed(2)
            const pts8260 = ((item*1.35)/(Math.PI*Math.pow((dpcs[3])/10, 2)/4)).toFixed(2)
            const pts10160 = ((item*1.35)/(Math.PI*Math.pow((dpcs[4])/10, 2)/4)).toFixed(2)
            const pts12700 = ((item*1.35)/(Math.PI*Math.pow((dpcs[5])/10, 2)/4)).toFixed(2)
            const pts15240 = ((item*1.35)/(Math.PI*Math.pow((dpcs[6])/10, 2)/4)).toFixed(2)
            return {
                dps14, dps35, dps84, dps210, dhsf1, dhsf2, dhsf3, dhsf4, pts3810, pts5080, pts6350, pts8260, pts10160, pts12700, pts15240
            }
        })

    }

    if (ent.motores[0].carga == 0 || ent.motores[0].dpolia == 0 || ent.motores[0].velocidade == 0) {
        var array_carga = []
        var array_dpolia = []
        var array_velocidade = []
        var arraysm = []
        var arraysmv = []

    } else {

        const carga = Math.max(...ent.motores.map((item) => {
            const c = item.carga
            return c
            }
        ))
        var array_carga = []
        for (let n = 0; n <= (2*carga); n+=(2*carga/33.333333)) {
            array_carga.push(n.toFixed(2));
        }
        array_carga.sort((valor_a, valor_b) => valor_a - valor_b)
        const dpolia = Math.max(...ent.motores.map((item) => {
            const d = item.dpolia
            return d
            }
        ))
        var array_dpolia = [(dpolia/2).toFixed(2), (dpolia).toFixed(2), (2*dpolia).toFixed(2), (3*dpolia).toFixed(2)]
    
        const velocidadem = Math.max(...ent.motores.map((item) => {
            const v = item.velocidade
            return v
            }
        ))
        var array_velocidade = []
        for (let n = 0; n <= (4*velocidadem); n+=(4*velocidadem/24)) {
            array_velocidade.push(n.toFixed(2));
        }
    
        var arraysm = array_carga.map((item, index) => {
            const Tm1 = (item*9.81*(array_dpolia[0]*Math.pow(10, -3)/2)).toFixed(2)
            const Tm2 = (item*9.81*(array_dpolia[1]*Math.pow(10, -3)/2)).toFixed(2)
            const Tm3 = (item*9.81*(array_dpolia[2]*Math.pow(10, -3)/2)).toFixed(2)
            const Tm4 = (item*9.81*(array_dpolia[3]*Math.pow(10, -3)/2)).toFixed(2)
            return {
                Tm1, Tm2, Tm3, Tm4
            }
        })
    
        var arraysmv = array_velocidade.map((item, index) => {
            const rot1 = (((item/100)*60)/(2*Math.PI*(array_dpolia[0]*Math.pow(10, -3)/2))).toFixed(2)
            const rot2 = (((item/100)*60)/(2*Math.PI*(array_dpolia[1]*Math.pow(10, -3)/2))).toFixed(2)
            const rot3 = (((item/100)*60)/(2*Math.PI*(array_dpolia[2]*Math.pow(10, -3)/2))).toFixed(2)
            const rot4 = (((item/100)*60)/(2*Math.PI*(array_dpolia[3]*Math.pow(10, -3)/2))).toFixed(2)
            return {
                rot1, rot2, rot3, rot4
            }
        })

    }

    const array_qb = []
        for (let n = 0; n <= (3*qb); n+=(3*qb/40)) {
            array_qb.push(n.toFixed(2));
        }

    const array_n = [900, 1200, 1500, 1800]

    const arrayb = array_qb.map((item, index) => {
        const vg1 = (((item)/(array_n[0]*nv))*1000).toFixed(2)
        const vg2 = (((item)/(array_n[1]*nv))*1000).toFixed(2)
        const vg3 = (((item)/(array_n[2]*nv))*1000).toFixed(2)
        const vg4 = (((item)/(array_n[3]*nv))*1000).toFixed(2)
        return {
            vg1, vg2, vg3, vg4
        }
    })


    const out = {
        forcas: array_forcas,
        arrays: arrays,
        cargas: array_carga,
        dpolia: array_dpolia,
        velocidades: array_velocidade,
        vazoes: array_qb,
        rotacao: array_n,
        arraysm: arraysm,
        arraysmv: arraysmv,
        arrayb: arrayb
    }

    /* if (out != null) {
        var loading = false
    } */
    
    const navigation = useNavigation();

    const createAlert = () => {
        if (Re_pressao >= 2000 || Re_retorno >= 2000 || Re_succao>= 2000)
        Alert.alert(
            "N° Reynolds",
            "Ajuste os valores de entrada de modo a se obter escoamento laminar.",
            [
                /* {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                }, */
                { text: "OK", onPress: () => navigateToInputs() }
            ]
        );
    }

    const Repressao = () => {
        if (Re_pressao >= 2000) {
            return(<Text style={styles.error}>N° de Reynolds acima do limite de escoamento</Text>)
        }
    }
    const Reretorno = () => {
        if (Re_retorno >= 2000) {
            return(<Text style={styles.error}>N° de Reynolds acima do limite de escoamento</Text>)
        }
    }
    const Resuccao = () => {
        if (Re_succao >= 2000) {
            return(<Text style={styles.error}>N° de Reynolds acima do limite de escoamento</Text>)
        }
    }


    const verifica = () => {

        let error = false
        /* setErrorRepressao(null)
        setErrorReretorno(null)
        setErrorResuccao(null)  */

        if (Re_pressao >= 2000) {
            /* setErrorRepressao("N° de Reynolds acima do limite de escoamento") */
            error = true
        }
        if (Re_retorno >= 2000) {
            /* setErrorReretorno("N° de Reynolds acima do limite de escoamento") */
            error = true
        }
        if (Re_succao >= 2000) {
            /* setErrorResuccao("N° de Reynolds acima do limite de escoamento") */
            error = true
        }
        return !error
    }
    

    function navigateToGraphics(resultados, resultadosm, out) {
        if (verifica()) {
            navigation.navigate('Graphics', {resultados, resultadosm, out});
        }
    }

    function navigateToInitial() {
        navigation.navigate('Initial', {})
    }

    function navigateToInputs() {
        navigation.navigate('Inputs', {});
    }

    /* const res = resultados.map((item, index) => {
        return (
            <div key={index}>
                <h1>Atuador C{index+1}</h1>
                    <div>
                        <h1>Diâmetro do pistão (Mín): </h1>
                        <h1>{item.dp} mm</h1>
                    </div>
                    <div>
                        <h1 >Diâmetro do pistão (Com): </h1>
                        <h1>{item.dpc} mm</h1>
                    </div>
                    <div >
                        <h1 >Diâmetro da haste (Mín): </h1>
                        <h1 >{item.dh} mm</h1>
                    </div>
                    <div >
                        <h1 >Diâmetro da haste (Com): </h1>
                        <h1 >{item.dhc} mm</h1>
                    </div>
                    <div >
                        <h1 >Pressão de trabalho: </h1>
                        <h1 >{item.pt} bar</h1>
                    </div>
                    <div >
                        <h1 >Vazão de avanço: </h1>
                        <h1 >{item.qa} l/min</h1>
                    </div>
                    <div >
                        <h1 >Vazão de retorno: </h1>
                        <h1 >{item.qr} l/min</h1>
                    </div>
                    
            </div>
        )
    }) */

    /* async function execute() {
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pdf Content</title>
                <style>
                    body {
                        font-size: 16px;
                        color: rgb(255, 196, 0);
                    }
                    h1 {
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div>${res}</div>
            </body>
            </html>
        `;
        const html = `<h1> Teste </h1>`;
        const { uri } = await Print.printToFileAsync({ html });
        Sharing.shareAsync(uri);
    } */

    /* const desativaloading = () => {
        setLoading(false)
    } */

        useEffect(() => {setLoading(false)})

        if (loading) {
            return(
                <View style={styles.containerLoading}>
                    <ActivityIndicator
                        size = "large"
                        color = "#f1c40f"
                    />
                    <Text>Aguarde, calculando dados.</Text>
                </View>
                )
            }

    return (
        <View style={styles.container}>
            {createAlert(true)}
            <View style={styles.header}>
                <StatusBar backgroundColor="#000000" barStyle="light-content"/>

                <Image source={logoIMG} style={styles.logo}/>

                <View style={styles.return}>
                        <TouchableOpacity 
                        style={styles.buttonReturn}
                        onPress={() => navigateToInputs()}
                        >
                            <Entypo name="chevron-thin-left" size={26} color="#EF9303" />
                        </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.scrollview}>
            <View style={styles.entry}>

            <Text style={styles.description}>Os resultados obtidos encontram-se abaixo.</Text>
                
                <View style={styles.especificacoes}>
                    <Text style={styles.title}>Especificações do(s) cilindro(s)</Text>
                        {
                            resultados.map((item, index) => {
                                return (
                                    <View key={index} style={styles.saida}>
                                        <Text style={styles.title2}>Cilindro C{index+1}</Text>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Diâmetro do pistão (Mínimo): </Text>
                                                <Text style={styles.subtitle2}>{item.dp} mm</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Diâmetro do pistão (Comercial): </Text>
                                                <Text style={styles.subtitle2}>{item.dpc} mm</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Diâmetro da haste (Mínimo): </Text>
                                                <Text style={styles.subtitle2}>{item.dh} mm</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Diâmetro da haste (Comercial): </Text>
                                                <Text style={styles.subtitle2}>{item.dhc} mm</Text>
                                            </View>
                                            {/* <View style={styles.result}>
                                                <Text style={styles.subtitle}>Área do pistão: </Text>
                                                <Text style={styles.subtitle2}>{item.ap} mm^2</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Área do cilindro: </Text>
                                                <Text style={styles.subtitle2}>{item.ac} mm^2</Text>
                                            </View> */}
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Pressão de trabalho: </Text>
                                                <Text style={styles.subtitle2}>{item.pt} bar</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Vazão de avanço: </Text>
                                                <Text style={styles.subtitle2}>{item.qa} l/min</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Vazão induzida de avanço: </Text>
                                                <Text style={styles.subtitle2}>{item.qia} l/min</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Vazão de retorno: </Text>
                                                <Text style={styles.subtitle2}>{item.qr} l/min</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Vazão induzida de retorno: </Text>
                                                <Text style={styles.subtitle2}>{item.qir} l/min</Text>
                                            </View>
                                            
                                    </View>
                                )
                            })
                        }

                </View>

                <View style={styles.especificacoes}>
                    <Text style={styles.title}>Especificações do(s) motor(es)</Text>

                        {
                            resultadosm.map((item, index) => {
                                return (
                                    <View key={index} style={styles.saida}>
                                        <Text style={styles.title2}>Motor M{index+1}</Text>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Torque: </Text>
                                                <Text style={styles.subtitle2}>{item.Tm} N.m</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Torque máximo comercial: </Text>
                                                <Text style={styles.subtitle2}>{item.tmc} N.m</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Rotação: </Text>
                                                <Text style={styles.subtitle2}>{item.rotm} RPM</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Rotação máxima comercial: </Text>
                                                <Text style={styles.subtitle2}>{item.rotmc} RPM</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Potência: </Text>
                                                <Text style={styles.subtitle2}>{item.potm} kW</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Potência máxima comercial: </Text>
                                                <Text style={styles.subtitle2}>{item.potmc} kW</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Volume de absorção: </Text>
                                                <Text style={styles.subtitle2}>{item.vgm} cm³/rot</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Vazão </Text>
                                                <Text style={styles.subtitle2}>{item.Qm} l/min</Text>
                                            </View>
                                            <View style={styles.result}>
                                                <Text style={styles.subtitle}>Referência </Text>
                                                <Text style={styles.subtitle2}>{item.ref}</Text>
                                            </View>
                                    </View>
                                )
                            })
                        }
                </View>

                <View style={styles.especificacoes}>
                    <Text style={styles.title}>Especificações das linhas</Text>
                        <Text style={styles.title2}>Linha de pressão</Text>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Diâmetro da mangueira (Mín): </Text>
                                <Text style={styles.subtitle2}>{dt_pressao} mm</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Diâmetro da mangueira (Com): </Text>
                                <Text style={styles.subtitle2}>{dt_pressaoc} mm</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Velocidade do escoamento: </Text>
                                <Text style={styles.subtitle2}>{v_pressao} cm/s</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Número de Reynolds: </Text>
                                <Text style={styles.subtitle2}>{Re_pressao}</Text>
                            </View>
                            <View style={styles.result}>
                                {Repressao(true)}
                                {/* <Text style={styles.error}>{errorRepressao}</Text> */}
                            </View>

                        <Text style={styles.title2}>Linha de sucção</Text>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Diâmetro da mangueira (Mín): </Text>
                                <Text style={styles.subtitle2}>{dt_succao} mm</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Diâmetro da mangueira (Com): </Text>
                                <Text style={styles.subtitle2}>{dt_succaoc} mm</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Velocidade do escoamento: </Text>
                                <Text style={styles.subtitle2}>{v_succao} cm/s</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Número de Reynolds: </Text>
                                <Text style={styles.subtitle2}>{Re_succao}</Text>
                            </View>
                            <View style={styles.result}>
                                {Resuccao(true)}
                                {/* <Text style={styles.error}>{errorResuccao}</Text> */}
                            </View>

                        <Text style={styles.title2}>Linha de retorno</Text>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Diâmetro da mangueira (Mín): </Text>
                                <Text style={styles.subtitle2}>{dt_retorno} mm</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Diâmetro da mangueira (Com): </Text>
                                <Text style={styles.subtitle2}>{dt_retornoc} mm</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Velocidade do escoamento: </Text>
                                <Text style={styles.subtitle2}>{v_retorno} cm/s</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Número de Reynolds: </Text>
                                <Text style={styles.subtitle2}>{Re_retorno}</Text>
                            </View>
                            <View style={styles.result}>
                                {Reretorno(true)}
                                {/* <Text style={styles.error}>{errorReretorno}</Text> */}
                            </View>

                        <Text style={styles.title2}>Perda de carga</Text>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Fator de atrito: </Text>
                                <Text style={styles.subtitle2}>{f}</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Perda maior: </Text>
                                <Text style={styles.subtitle2}>{deltapl} bar</Text>
                            </View>
                             <View style={styles.result}>
                                <Text style={styles.subtitle}>Perda menor: </Text>
                                <Text style={styles.subtitle2}>{deltaplm} bar</Text>
                            </View>
                            <View style={styles.result}>
                                <Text style={styles.subtitle}>Perda de carga total: </Text>
                                <Text style={styles.subtitle2}>{deltapt} bar</Text>
                            </View>
                    
                </View>

                <View style={styles.especificacoes}>
                    <Text style={styles.title}>Especificações da bomba</Text>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Rotação (Motor elétrico): </Text>
                        <Text style={styles.subtitle2}>{n} RPM</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Vazão: </Text>
                        <Text style={styles.subtitle2}>{qb} l/min</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Pressão de trabalho: </Text>
                        <Text style={styles.subtitle2}>{maior_pt} bar</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Volume de absorção: </Text>
                        <Text style={styles.subtitle2}>{vg} cm³/rot</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Torque absorvido: </Text>
                        <Text style={styles.subtitle2}>{mt} N.m</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Potência absorvida: </Text>
                        <Text style={styles.subtitle2}>{pot_abs} kW</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Tipo(s) indicada(s): </Text>
                        <Text style={styles.subtitle2}>{`${bombas[0].tipo_bomba}
                        ${bombas[1].tipo_bomba}
                        ${bombas[2].tipo_bomba}
                        ${bombas[3].tipo_bomba}
                        ${bombas[4].tipo_bomba}`}</Text>
                    </View>
                </View>

                <View style={styles.especificacoes}>
                    <Text style={styles.title}>Especificações do reservatório</Text>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Volume do reservatório: </Text>
                        <Text style={styles.subtitle2}>{VR} m³</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Dimensão L: </Text>
                        <Text style={styles.subtitle2}>{L} m</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Superfície de troca térmica: </Text>
                        <Text style={styles.subtitle2}>{Sr} m²</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Carga térm. reservatório: </Text>
                        <Text style={styles.subtitle2}>{qtermr} Kcal/h</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Carga térm. necessária: </Text>
                        <Text style={styles.subtitle2}>{qtermn} Kcal/h</Text>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.subtitle}>Carga térm. trocador de calor: </Text>
                        <Text style={styles.subtitle2}>{qtermtc} Kcal/h</Text>
                    </View>
                </View>

                {/* <View style={styles.calculate}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => (console.log(bombas))}
                    >
                        <Text>Mostrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.calculate}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => execute()}
                    >
                        <Text>Gerar PDF</Text>
                    </TouchableOpacity>
                </View> */}


                {/* <View style={styles.calculate}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress={createAlert}
                    >
                        <Text>ALERTA</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.calculate}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigateToGraphics(resultados, resultadosm, out)}
                    >
                        <Entypo name="line-graph" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                

                {/* <Text>Pressão de trabalho estipulada:            {pressãote}</Text>
                <View style={[styles.calculate, {marginBottom: 10}]}>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => (console.log(resultados, vazoes, parametros_bomba, parametros_tubulacao, ent.valvulas_cd, ent.valvulas_cf, ent.valvulas_r))}
                    >
                        <Text style={styles.buttonText}>M. Valores</Text>
                    </TouchableOpacity>
                </View> */}

            </View>
            </ScrollView>
            
            
            
        </View>

            /* {
                
                resultados.map((resultado, index) => {
                    return (
                        <View key={index} style={[styles.characteristics, {marginTop: 10}]}>

                            {(text)=>(mudaVal(text , index))}

                            <Text>CILINDRO {index + 1} (C{index + 1})</Text>
                            <Text>Diâmetro mín. do pistão:                         {resultados[index].dpmin}</Text>
                            <Text>Diâmetro do pistão comercial [parker]: {resultados[index].dpcom}</Text>
                            <Text>Pressão de trabalho regulada:                {resultados[index].ptreg}</Text>
                            <Text>Diâmetro mín. da haste:                           {resultados[index].dhmin}</Text>
                            <Text>Diâmetro da haste comercial [parker]:   {resultados[index].dhcom}</Text>
                            <Text>Tempo de avanço/retorno:                    {resultados[index].tavan}</Text>
                            <Text>Vazão de avanço :                {resultados[index].vavan}</Text>

                    
                        </View>
                    )
                })

                    
        
            } */
        
    );
}