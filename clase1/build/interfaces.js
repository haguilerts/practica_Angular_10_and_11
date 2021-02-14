function mostraPersona(p) {
    console.log(p);
}
mostraPersona({ nombre: 'maria', apellido: 'garcia', edad: 23, sexoMasculino: false });
function mostraCoche(c) {
    console.log(`marca: ${c.marca} | modelo: ${c.modelo} | color: ${c.color} | patente: ${c.patente}`);
}
mostraCoche({ marca: 'for', modelo: 'c123', patente: 'abc-123' });
let p1 = { x: 123, y: 321 };
console.log(`cordenadas: ${p1.x} : ${p1.y} `);
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('hola', 'ola'));
