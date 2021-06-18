/* Clindro 1 */

const dp = (Math.sqrt((4*ent.cilindros[0].forca*1.35)/(Math.PI*pressãote))*10).toFixed(2);

for (var n = 0; n < dparker.length && dp > dparker[n].dpc; n++) {
};

if (n < dparker.length && dp<dparker[n].dpc) {
    var dpc = dparker[n].dpc;
} else {
    var dpc = dp;
};

const pt = ((ent.cilindros[0].forca*1.35)/(Math.PI*Math.pow(dpc/10, 2)/4)).toFixed(2);

const dh = 48.35; //(Math.pow((64*3.5*((Math.pow((ent.cilindro[0].curso/1000)*ent.fixação, 2)*ent.cilindros[0].forca*9.81*1.35)))/
//(Math.pow(Math.PI, 3)*200*Math.pow(10, 9)), (1/4))*1000).toFixed(2);

for (var c = 0; c < dparker[n].dhc.length && dh > dparker[n].dhc[c]; c++) {
};

if (c < dparker[n].dhc.length && dh < dparker[n].dhc[c]) {
    var dhc = dparker[n].dhc[c];
} else {
    var dhc = dh;
};

const t = (ent.cilindros[0].curso/(ent.cilindros[0].velocidade*10)).toFixed(2);

const Q = (((Math.PI*ent.cilindros[0].curso*Math.pow(dpc, 2))/(4*t))*(60/1000000)).toFixed(2);

const [resultados, setResultados] = useState(
    [{
        dpmin: dp,
        dpcom: dpc,
        ptreg: pt,
        dhmin: dh,
        dhcom: dhc,
        tavan: t,
        vavan: Q,
    }]
);

/* Clindro 1 */


/* Clindro 2 (Caso exista) */

if (ent.cilindros.length >= 2) {

    var c2 = 2;

    var dp2 = (Math.sqrt((4*ent.cilindros[1].forca*1.35)/(Math.PI*pressãote))*10).toFixed(2);

    for (var n2 = 0; n2 < dparker.length && dp2 > dparker[n2].dpc; n2++) {
    };

    if (n2 < dparker.length && dp2<dparker[n2].dpc) {
        var dpc2 = dparker[n2].dpc;
    } else {
        var dpc2 = dp2;
    };

    var pt2 = ((ent.cilindros[1].forca*1.35)/(Math.PI*Math.pow(dpc2/10, 2)/4)).toFixed(2);
    
    var dh2 = 37.84; //(Math.pow((64*3.5*((Math.pow((ent.cilindro[1].curso/1000)*ent.fixação, 2)*ent.cilindros[1].forca*9.81*1.35)))/
    //(Math.pow(Math.PI, 3)*200*Math.pow(10, 9)), (1/4))*1000).toFixed(2);

    for (var c2 = 0; c2 < dparker[n2].dhc.length && dh2 > dparker[n2].dhc[c2]; c2++) {
    };

    if (c2 < dparker[n2].dhc.length && dh2 < dparker[n2].dhc[c2]) {
        var dhc2 = dparker[n2].dhc[c2];
    } else {
        var dhc2 = dh2;
    };
    
    var t2 = (ent.cilindros[1].curso/(ent.cilindros[1].velocidade*10)).toFixed(2);

    var Q2 = (((Math.PI*ent.cilindros[1].curso*Math.pow(dpc2, 2))/(4*t2))*(60/1000000)).toFixed(2);

    setResultados([...resultados, {
        dpmin: dp2,
        dpcom: dpc2,
        ptreg: pt2,
        dhmin: dh2,
        dhcom: dhc2,
        tavan: t2,
        vavan: Q2
      }
      ])

};

/* Clindro 2 (Caso exista) */

/* Clindro 3 (Caso exista) */

if (ent.cilindros.length >= 3) {

    var c3 = 3;

    var dp3 = (Math.sqrt((4*ent.cilindros[2].forca*1.35)/(Math.PI*pressãote))*10).toFixed(2);

    for (var n3 = 0; n3 < dparker.length && dp3 > dparker[n3].dpc; n3++) {
    };

    if (n3 < dparker.length && dp3<dparker[n3].dpc) {
        var dpc3 = dparker[n3].dpc;
    } else {
        var dpc3 = dp3;
    };

    var pt3 = ((ent.cilindros[2].forca*1.35)/(Math.PI*Math.pow(dpc3/10, 2)/4)).toFixed(2);
    
    var dh3 = 37.84; //(Math.pow((64*3.5*((Math.pow((ent.cilindro[2].curso/1000)*ent.fixação, 2)*ent.cilindros[2].forca*9.81*1.35)))/
    //(Math.pow(Math.PI, 3)*200*Math.pow(10, 9)), (1/4))*1000).toFixed(2);

    for (var c3 = 0; c3 < dparker[n3].dhc.length && dh3 > dparker[n3].dhc[c3]; c3++) {
    };

    if (c3 < dparker[n3].dhc.length && dh3 < dparker[n3].dhc[c3]) {
        var dhc3 = dparker[n3].dhc[c3];
    } else {
        var dhc3 = dh3;
    };
    
    var t3 = (ent.cilindros[2].curso/(ent.cilindros[2].velocidade*10)).toFixed(2);

    var Q3 = (((Math.PI*ent.cilindros[2].curso*Math.pow(dpc3, 2))/(4*t3))*(60/1000000)).toFixed(2);

    setResultados([...resultados, {
        dpmin: dp3,
        dpcom: dpc3,
        ptreg: pt3,
        dhmin: dh3,
        dhcom: dhc3,
        tavan: t3,
        vavan: Q3
      }
      ])
};

/* Clindro 3 (Caso exista) */

/* Clindro 4 (Caso exista) */

if (ent.cilindros.length >= 4) {

    var c3 = 3;

    var dp4 = (Math.sqrt((4*ent.cilindros[3].forca*1.35)/(Math.PI*pressãote))*10).toFixed(2);

    for (var n4 = 0; n4 < dparker.length && dp4 > dparker[n4].dpc; n4++) {
    };

    if (n4 < dparker.length && dp4<dparker[n4].dpc) {
        var dpc4 = dparker[n4].dpc;
    } else {
        var dpc4 = dp4;
    };

    var pt4 = ((ent.cilindros[3].forca*1.35)/(Math.PI*Math.pow(dpc4/10, 2)/4)).toFixed(2);
    
    var dh4 = 37.84; //(Math.pow((64*3.5*((Math.pow((ent.cilindro[3].curso/1000)*ent.fixação, 2)*ent.cilindros[3].forca*9.81*1.35)))/
    //(Math.pow(Math.PI, 3)*200*Math.pow(10, 9)), (1/4))*1000).toFixed(2);

    for (var c4 = 0; c4 < dparker[n4].dhc.length && dh4 > dparker[n4].dhc[c4]; c4++) {
    };

    if (c4 < dparker[n4].dhc.length && dh2 < dparker[n4].dhc[c4]) {
        var dhc4 = dparker[n4].dhc[c4];
    } else {
        var dhc4 = dh4;
    };
    
    var t4 = (ent.cilindros[3].curso/(ent.cilindros[3].velocidade*10)).toFixed(2);

    var Q4 = (((Math.PI*ent.cilindros[4].curso*Math.pow(dpc4, 2))/(4*t4))*(60/1000000)).toFixed(2);

    setResultados([...resultados, {
        dpmin: dp4,
        dpcom: dpc4,
        ptreg: pt4,
        dhmin: dh4,
        dhcom: dhc4,
        tavan: t4,
        vavan: Q4
      }
      ]) 
};

function mudaVal(value,index) {

    resultados.map((resultado,i)=>{
        if(i === index) {
            resultado.dpmin = value
            resultado.dpcom = value
            resultado.ptreg = value
            resultado.dhmin = value
            resultado.dhcom = value
            resultado.tavan = value
            resultado.vavan = value
            return resultado
        } else {
            return resultado
        }
    }
    )
}


/* Clindro 4 (Caso exista) */

