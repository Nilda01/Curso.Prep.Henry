// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nuevonombre= nombre[0].toUpperCase() + nombre.substring(1);
  return nuevonombre;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  //function mostrarCallback(invocarCallback){
  cb();//se invoca igual que una funcion, porque callback es una funcion
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1,n2);// aqui el ejercicio tan solo pide que se devuelva el cb con sus dos parametros, al ser cb una funcion y n1
  //y n2 son sus parametros.
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var total=0;
  for(var i=0; i<numeros.length; i++){
    total=total + numeros[i];
  };
 cb(total);
}
//usando reduce:
// var total=numeros.reduce(function(a,b//a y b representan parametro a y b){
  //return (a+b)
//},0); El 0 significa que va empezar en 0, es decir que el primer valor es 0. Dicho de otra manera el 0 representa 
//el 0 que tiene el total en el ejercicio arriba usando el for, el 0 es el valor inicial de donde quiero empiece la suma.





function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(a){ //lo que va ser es que 'a' va ir tomando cada valor de cada posicion del array
  cb(a); //a: es el parametro de la funcion callback. En el cb no es necesario el return porque el callback ya está retornando algo.
  })
}

//Tambien se pude hacer en un for:
//for(vari=0; i<array.length; i++){
  //cb(array[i])
//}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  //la funcion map() es un metodo de los arreglos que itera cada elemento del array, y crea un nuevo array con los nuevos valores
  var nuvoArray=array.map(function(elemento){
    return cb(elemento)
  })
  return nuvoArray;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var result=array.filter(function(e){
    return e[0] === "a";
    //return e.charAt(0) ==="a"; --->es lo mismo
  })
  return result;
}

          //OTRA FORMA:
//function otraForma(e){
  //e[0]==="a";
//}
//return array.filter(otraForma)
//}

           //USANDO EL CICLO FOR:
//var nuevoArray=[];
//for (var i=0; i < array.length; i++){
  //if (array[i][0] === "a"){
    //nuevoArray.push(array[i])
  //}
//}
//return nuevoArray;
//}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
