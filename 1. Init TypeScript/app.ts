
 
//Tipos primitivos 
let isDone: boolean = false;

//Tipo numerico
let decimal: number = 6;

let hex: number = 0xf00d;

let binary: number = 0b1010;

let octal: number = 0o744;

// Tipo String

let color: string = "blue"

// se pudende utilizar template

let fullName: string = `Ronald Castillo`

let age:number = 20

let sentence: string = `Hello, my name is 
${fullName}, I'll be ${age} years old`

//String literal type
//solo podran contener el valor asignado 

let literalString = 'hello';
literalString = "Bye"

//Array

let list: number[] = [1,2,3]

let list2: Array<number> = [1,2,3]

// Tuplas

let x: [string, number];

x = ["hello", 10]


// Enum
//sin valor 
enum Color {Red,  Green, Blue};
let c: Color = Color.Green

enum Color2 {Red = 1, Green = 2, Blue = 3}

//con el nombre de los atributos
let colorName: string = Color2[2] 


//Type alias
enum FooIdBrand { Apple = 1}
type FooId = FooIdBrand & string & number

var food: FooId;

food = FooIdBrand[1]  as FooId;

//Any: pude almacenar cualquier tipo de datos 

let  notSure: any  = 4
notSure = "Pepe"

let notSureArray: any[] = ["Ronald", true, false]

notSureArray[3] = "samuel"

// Void es un dato de no retorno

function warnUser(): void{
    alert("hola")
}

//Funciones en TypeScript

function verificatedType( value: string, padding: string | number )
{
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value
    }
    if (typeof padding === "string"){

        return Array(padding.length + 1).join(" ") + value

    }

    throw new Error(`Expected String or number, got '${padding}' `);
}

// console.log(verificatedType("hello",true))

//Parametros opcionales

function processEntity(e?: number){
    console.log(e || "nada")
}

// console.log(processEntity(1))

//Genérica

function echo<T>(arg: T) : void{
    console.log(arg)
}

// echo<number>(4)
// echo<string>("Ronald")

//Pasarle  interfaz a los parametros de los Generic 

interface widthLength{
    length: number
}

function implementInterface<T extends widthLength>(arg: T) : T{
    console.log(arg.length)
    return arg
}

// console.log(implementInterface({length:8, name:"Ronald", lastName:"Castillo"}))

//Aserción de tipos (Assert)

class Bird {
    fly(){
        console.log("Pajaro")
    }

    layEggs(){
        console.log("Pone huevos")
    }
}

class Fish{
    constructor(){

    }

    swim(){
        console.log("Pez")
    }

    layEggs(){
        console.log("Pone huevos")
    }

}


function getAnimal() : Fish | Bird{
    var a : Bird = new Bird()
    return a
}

let pet = getAnimal()

console.log(getAnimal())
pet.layEggs()

//Asercion

if((<Fish>pet).swim){
    (<Fish>pet).swim()
    
}else if((<Bird>pet).fly){
    (<Bird>pet).fly()
    console.log((<Fish>pet).swim)
}

//Promice 






















































