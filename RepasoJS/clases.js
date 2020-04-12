class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo= modelo;
        this.velocidad= velocidad;
        this.antiguedad= antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad+= 1;
    }
    reducirVelocidad(){
        this.velocidad-= 1; 
    }
}


var coche1 = new Coche('BMW',200,2017);

var coche2 = new Coche('citroen',120,2011);

console.log(coche1);
coche1.aumentarVelocidad();
console.log(coche1);


//Herencia

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }
    mostrarAltura(){
        return "La altura del bus es: "+ this.altura;
    }
}

var autobus1 = new Autobus('pegasus', 100, 2001);
console.log(autobus1.mostrarAltura);
