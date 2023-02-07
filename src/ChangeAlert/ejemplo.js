const autos = [
  { marca: 'peugeot', modelo: '1000' },
  { marca: 'toyota', modelo: '2000' },
  { marca: 'Ford', modelo: '3000' },
  { marca: 'citroen', modelo: '4000' }
]

let marca = autos.map((aut) => {
  return aut.marca
})
let modelo = autos.map((aut) => {
  return aut.modelo
})
let marcaYModelo;

function verAutos(num1) {

  if (num1 === marca) {
    console.log(marca);
  } else if (num1 === modelo) {
    console.log(modelo);
  } else if (num1 === marcaYModelo) {
    for (let i = 0; i < autos.length; i++) {
      const element = autos[i];
      console.log(element);

    }
  }
}

verAutos(marcaYModelo)