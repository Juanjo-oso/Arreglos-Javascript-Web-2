//#4
let usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Pablo", edad: 17 },
    { nombre: "Lucas", edad: 16 },
    { nombre: "Martin", edad: 24 },
]

function calcularEdadEnDias(usuarios) {
    let usuariosMayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18);
    let usuariosConEdadEnDias = usuariosMayoresDeEdad.map(usuario => ({
        ...usuario,
        age_in_days: usuario.edad * 365
    }));
    return usuariosConEdadEnDias;
}

let usuariosConEdadEnDias = calcularEdadEnDias(usuarios);
console.log(usuariosConEdadEnDias);