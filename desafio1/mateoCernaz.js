let data = require('./data');

let totalSegundos=0;

let videos = [];

//----limpiando etiqueta ul---------
let items = data.split('\n')
items.shift();
items.pop();

//-------escaneo de texto y construccion de array de objetos
for(let i=0;i<items.length;i++){
    let uno  = items[i].split('="')
    uno.shift();
    let dos= uno[0].split(':')
    let tres = dos.pop();
    let cuatro = tres.split('">')
    let cinco = cuatro.pop();
    let seis = cinco.split(' ')
    seis.pop();
    let siete = dos.concat(cuatro,seis);
    let ocho = {
        min:parseInt(siete[0]),
        seg:parseInt(siete[1]),
        tipo:siete[2]
    }
    videos.push(ocho);
}

//------filtrado del tipo y calculo de segundos
let flexbox = videos.filter(item => item.tipo == "Flexbox");

flexbox.forEach(calculoSegundos);

function calculoSegundos(objeto) {
    totalSegundos+=objeto.min*60+objeto.seg
}

console.log(`Segundos solo Flexbox Video: ${totalSegundos}`);



