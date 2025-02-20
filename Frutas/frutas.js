const frutas = ["manzana", "plátano", "naranja", "manzana", "pera", "uva", "sandía", "higo", "melón", "papaya", "guayaba", "piña", "naranja", "durazno","mandarina", "uva", "sandía", "higo", "melón", "papaya", "guayaba", "uva", "sandía", "higo", "melón", "papaya",  "sandía", "higo", "melón", "piña", "naranja", "manzana", "pera", "uva", "sandía", "higo", "melón", "papaya", "guayaba", "sandía", "higo", "melón", "papaya", "guayaba", "piña", "naranja", "durazno"];
const conteofrutas = {};
for (let i=0; i<frutas.length; i++){
    let fruta = frutas [i];
    if (conteofrutas[fruta]){
        conteofrutas[fruta]++;
    }else {
        conteofrutas[fruta]=1;
    }
}

console.log("conteo de frutas con for:");
console.log(conteofrutas);

const conteofrutaswhile = {};
let index = 0;

while (index < frutas.length){
    let fruta = frutas [index];
    if (conteofrutaswhile[fruta]){
        conteofrutaswhile[fruta]++;
    } else {
        conteofrutaswhile[fruta]=1;
    }
    index++;
}

console.log("conteo de frutas con while:");
console.log(conteofrutaswhile);