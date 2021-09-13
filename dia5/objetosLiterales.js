let curso ={
    cantidadDeAlumnos: 40,
    docentes:["Nacho", "Javier"],
    horario:"de 19 a 21 hs.",
    notificaciones: function(){
        return "El horario de la cursada es "+this.horario
    }
}

// // console.log(curso);
//  console.log(curso.cantidadDeAlumnos);
//  console.log("La cantidad de alumnos en este curso es de "+curso.cantidadDeAlumnos);
// console.log(curso.notificaciones());
function Cursos(cantidadDeAlumnos,docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horarios = horario
}

let cursoProgramacion = new Cursos(20,["Caro","Cristian","Maria Jose"],"de 10 a 12 hs.")
let cursoDiseño = new Cursos(45,["Gabriel","Marlene"],"de 19 a 21 hs.")
let cursoFilosofia = new Cursos(15,["Jenny","Leidy","Jhoana"],"de 13 a 17 hs.")

// console.log(cursoProgramacion);
// console.log(cursoDiseño);
// console.log(cursoFilosofia);


/**************** ARRAYS ***************/

const arr = [1,2,3,4,5,6];

// console.log(arr);

// console.log("Este es el indice 3 del array: "+arr[3]);

// Esto modificara el indice 5 por el numero asignado
arr[5]=10;

// console.log(arr);

// Esto creara un nuevo valor en el array, ya que ese indice no existe

arr[6]=17;

// console.log(arr);


//metodo forEach()

arr.forEach(item => {
    // console.log(item);
});

//metodo filter()

let numeros = [1,2,3,4,5,6,7,8,9]

// console.log("Array original: "+numeros)

let numerosModificados = numeros.filter(numero => numero > 4);

// console.log("Estos son los mayores a 4: "+numerosModificados);

let numerosModiReturn =
    numeros.filter(numero => {
        return numero > 1
    });

// console.log("estos son los numeros mayores a 1: "+numerosModiReturn);


function CuentaBancaria(nombre, cuenta, apellido){
    this.nombre = nombre;
    this.cuenta = cuenta;
    this.apellido = apellido;
    this.saldo = 0;
    this.movimientos = [];
    this.movCredito = [];
    this.movDebito = [];

    this.nombreCompleto = () => ` ${this.nombre} ${this.apellido} `,


    this.debitar = (dineroDebitar) => {
        if(this.saldo > dineroDebitar){
            this.movimientos.push("Se debito $"+ dineroDebitar);
            this.movDebito.push(dineroDebitar);
            this.saldo -= dineroDebitar;
            return "Se debito" + dineroDebitar+ ". Su saldo actual es de $"+this.saldo;
        }else{
            return "Saldo insuficiente, ud no puede realizar esta operacion"
        }
    }

    this.acreditarDinero = (acreditar) =>{
        this.movimientos.push('Se deposito $'+ acreditar);
        this.movCredito.push(acreditar);
        this.saldo += acreditar;
        return "Se deposito $"+acreditar + ". Su saldo actual es de $"+this.saldo;
    }

    this.historial = () => this.movimientos;
    this.historialDebito = () => this.movDebito;
    this.historialCredito = () => this.movCredito;

    
};

let cuenta1 = new CuentaBancaria("Caro",89123123,"Sanchez");
let cuenta2 = new CuentaBancaria("Cristian",4587321,"Cabe");
let cuenta3 = new CuentaBancaria("Marlene",89123123,"Molina");

console.log(cuenta1.nombreCompleto(),"Tienes $"+ cuenta1.saldo + " de saldo en tu cuenta.");
console.log(cuenta1.acreditarDinero(400));
console.log(cuenta1.acreditarDinero(300));
console.log(cuenta1.debitar(300));
console.log(cuenta1.debitar(200));
console.log("Este es su historial: "+cuenta1.historial());
console.log("El saldo actual de su cuenta es de: "+cuenta1.saldo);
console.log("Su historial de dinero debitado es: "+ cuenta1.historialDebito());
console.log("Su historial de dinero acreditado es: "+ cuenta1.historialCredito());
let totalDeb = cuenta1.movDebito.reduce((a,b) => a+b,0);
let totalCre = cuenta1.movCredito.reduce((a,b) => a+b,0);
console.log("El total de dinero debitado es de: "+totalDeb);
console.log("El total de dinero acreditado es de: "+totalCre);

