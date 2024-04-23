/*for(var i=0; i<=5;i++){
    console.log(i)
}
var i = 5
while(i<10){
    i++
    console.log(i)
}
do {
console.log(i)
i++
}while(i<20)*/

/* probar valores verdadosos */
if ("") {
    console.log("veradoso")
}else{
    console.log("falso")
}
/*5*/
var a = 5
a
/*6*/
var b = 33
var c = 7
/*7*/
var perimetro = a+b+c
perimetro
/*8*/
if(b >= 10 && b <= 30){
    console.log("esta entre 10 y 30")
}else{
    console.log("NO esta entre 10 y 30")
}
/*9*/
function toCelsius(degrees){
    return (degrees-32) * 5/9;
}
toCelsius(10)
/*10*/
function isLeap(year){
    if (year%4==0 && year%100!=0 && year%400!=0) {
        return true
    }else{
        return false
    }
}
isLeap(2013)
/*11*/
function abs(n){
    if(n<0){
        return n*-1
    }else{
        return n
    }
}
abs(-3)
/*12*/
function largest(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>c){
        return b
    }else{
        return c
    }
}
largest(1,2,3)
/*13*/

/*14*/
function pathJoin(base,folder,os){
    if(os==="windows") {
        return base +"\\"+folder 
    }else {
        return base+"/"+folder
    } 
}
pathJoin("hola","path","windows")
/*15*/
"hola".length //tamaño del string
"hola".charAt(0) //indice
/*16-17*/
function printLetters(word){
    for (let index = 0; index < word.length; index++) {
        console.log(word.charAt(index))        
    }
}
printLetters("hola")
/*18*/
"1"==1 // true
"1"===1 //false (agrega la comparacion del tipo de dato)
/*19*/
function arrayFromTo(start,end){
    for (let index=start; index<=end; index++) {
        console.log(index)        
    }    
}
arrayFromTo(3,7)
/*20*/
function arrayFromToStepping(start,end,step){
    for (let index=start; index<=end; index+=step) {
        console.log(index)        
    }    
}
arrayFromToStepping(3,13,3)
/*21*/
let numeros = [3,9,4,7,1]
function maxIn(array){
    var numMax= array[0]
    array.forEach(element => {
        if(element>numMax){
            numMax=element
        }
    });
    return numMax
}
maxIn(numeros)
/*22*/
var arr=[1,2,3]
arr.push(4)
console.log(arr)
/*23*/
let alCuadrado = [2,3,4]
function squared(array){
    var arrSquared=[]
    array.forEach(element => {
        arrSquared.push(Math.pow(element,2))
    });
    return arrSquared
}
squared(alCuadrado)
/*24*/
let even = [2,3,4,8,3,4,3,2,2]
function evens(array){
    var arrPares=[]
    array.forEach(element => {
        if (element%2==0) {
            arrPares.push(element)
        }        
    });
    return arrPares
}
evens(even)
/*25*/
let numbers2 = [2,3,4,8,3]
function reversed(array){
    var arrReversed=[]
    for (let index = array.length; index > 0; index--) {
        arrReversed.push(numbers2[index-1])               
    }
    return arrReversed
}
reversed(numbers2)
/*26*/
function ladderPattern(height){
    var returnh = ""
    for (let index = 0; index < height; index++) {        
        returnh = returnh + "X"
        console.log(returnh)        
    }
}
ladderPattern(5)
/*27*/
function invertedLadderPattern(height){
    var returnh = ""
    for (let index = 0; index < height; index++) {        
        returnh = returnh + "X"        
    }
    for (let index=height; index>0; index--) {
        console.log(returnh.substr(0,index))        
    }
}
invertedLadderPattern(5)
/*28*/


/*entrega 1
Se pide que escriba la función personasConIniciales(personas, iniciales)
que dado un array de personas y un String que representa iniciales 
de una persona, describe un nuevo array con todas las personas que 
tienen esas iniciales.*/
var personas = ["norma","valeria","veronica"]
var iniciales = ["v","a"]
function personasConIniciales(personas,iniciales){
    var encontradas =[]
    personas.forEach(element => { 
        var ini = iniciales.join()
        var cant = ini.length
        for (let index = 0; index < cant; index--) {
            if(element.charAt(index)==ini.charAt(index)){                
                encontradas.push(element)
           }               
        }          
    });
    cant
    return encontradas
}
personasConIniciales(personas,iniciales)


var personas = ["norma","valeria","veronica"]
var iniciales = ["v","a"]
function personasConIniciales(personas,iniciales){
    var encontradas =[]
    personas.forEach(element => { 
        for (let index = 0; index < iniciales.length; index++) {
            if(element.charAt(index)==iniciales.join().charAt(index)){                
                encontradas.push(element)
           }               
        }          
    });
    return encontradas
}

personasConIniciales(personas,iniciales)


var personas = ["narma","valeria","veronica"]
var iniciales = "va"
function personasConIniciales(personas,iniciales){
    var encontradas =[]
    personas.forEach(element => {   
        var cant = iniciales.length           
            if(element.substr(0,cant)== iniciales){                
                encontradas.push(element)
           }               
    });
    return encontradas
}
personasConIniciales(personas,iniciales)