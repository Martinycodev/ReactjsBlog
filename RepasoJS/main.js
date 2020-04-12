/*

var nombre = "Martín";
var altura = 190;
var concatenacion = nombre + " " + altura;

document.write(nombre);
document.write(altura);
document.write(concatenacion);

var datos = document.getElementById("datos");

datos.innerHTML = concatenacion;

datos2.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;

if (altura >= 190) {
    datos.innerHTML +=`
    <h1> eres una persona Alta</h1>
    `
}else{
    datos.innerHTML +=`
    <h1> eres una persona bajita</h1>
    `
}

for (var i = 0; i < 2020; i++) {
    //bloque de instrucciones
    datos.innerHTML += "Estamos en el año"+i+"<br>";
    
}

*/


/*   Comentarios    */

function MuestraMiNombre(nombre, altura){
    var misDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;
 return misDatos;
}



function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Martin Carmona", 130);
}

imprimir();

var nombres= ["victor","antonio", "joaquin"];

//alert(nombres[1]);

for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i]+"</br>");
    
}

nombres.forEach((nombre) => {
    document.write(nombre+"</br>");
});


//Repaso Json

var coche = {
    modelo: 'Mercedes',
    maxima: 520,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedead1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDatos();


//Promesas

/* objeto y peticion a ajax*/
//captuar peticiones

var saludar = new Promise((resolve, reject) => {
    setTimeout(()=>{
        var saludo= false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('no hay saludo')
        }
    }, 2000)

});

saludar.then(resultado=> {

    alert(resultado);
})
.catch(err => {
    alert(err)
})
    