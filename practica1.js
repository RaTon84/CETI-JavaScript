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