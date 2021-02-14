function suma(a, b) {
    return a + b;
}
const sumar1 = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
// parametros opcionales y valores por defectos
function nombre_Completo(nombre, apellido, edad = 0) {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre + ' edad: ' + edad;
}
console.log(nombre_Completo('Giovanny')); //Giovanny edad: 0
console.log(nombre_Completo('Rhonny', 'Aguilar')); //Rhonny Aguilar
console.log(nombre_Completo('brandon', '', 123)); //brandon edad: 123
// parametros infinitos o rest ()
function nombre_completo2(nombre, ...cantidad_nombres) {
    return nombre + " | string[]=" + cantidad_nombres;
}
console.log(nombre_completo2('kevin', 'Dolores', 'Garcia', 'Santos')); // kevin | Dolores,Garcia,Santos
