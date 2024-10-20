let persona = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 25,
    ocupacion: "Maestro",
    clases: ['Fundamentos de la Web', "Python", "Java", "MERN"],
    experienciaAcademica: {
        universidad: "Tencnologico de Monterrey",
        semestres: 9,
        titulo: "Ingeniero en Sistemas"
    }
}

console.log(persona);
persona.experiencia = "15 años";
console.log(persona);
delete persona.ocupacion;
console.log(persona);

console.log(persona["nombre"], persona["apellido"]);
persona.nombre = "Alejandro";
console.log(persona.nombre, persona.apellido);
console.log("Clases que imparte")

for(let i=0; i < persona.clases.length; i++){
    console.log("-", persona.clases[i]);
}
console.log("Experiencia academica:");
console.log("Universidad:", persona.experienciaAcademica.universidad);
console.log("Titulo profesional:", persona.experienciaAcademica.titulo);

let estudiantes = [{
    nombre: "Martha",
    apellido: "Gómez",
    edad: 18,
    curso: "Java"
},
{
    nombre: "Roger",
    apellido: "Anderson",
    edad: 19,
    curso: "Java"
},
{
    nombre: "Alan",
    apellido: "Morales",

}]