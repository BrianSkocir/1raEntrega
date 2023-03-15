console.log("Archivo cargado con exito");
alert("Bienvenido a la calculadora de promedio para alumnos");
let matematicas = parseFloat(prompt("Ingrese la nota final en Matematicas"));
matematicas = parseFloat(matematicas);
while ((matematicas < 1) | (matematicas > 10)) {
  matematicas = prompt( "Nota invalida, ingrese nota entre el 1 y 10 para la materia de Matematicas");
}
let lenguaYLiteratura = prompt("Ingrese la nota final en Lengua y Literatura");
lenguaYLiteratura = Number(lenguaYLiteratura);
while ((lenguaYLiteratura < 1) | (lenguaYLiteratura > 10)) {
  lenguaYLiteratura = Number(prompt("Nota invalida, ingrese nota entre el 1 y 10 para la materia de Lengua y Literatura"));
}
let historia = prompt("Ingrese la nota final en Historia");
historia = Number(historia);
while ((historia < 1) | (historia > 10)) {
  historia = Number(prompt("Nota invalida, ingrese nota entre el 1 y 10 para la materia de Historia"));
}
let cienciasSociales = prompt("Ingrese la nota final en Ciencias Sociales");
cienciasSociales = Number(cienciasSociales);
while ((cienciasSociales < 1) | (cienciasSociales > 10)) {cienciasSociales = Number(prompt("Nota invalida, ingrese nota entre el 1 y 10 para la materia de Ciencias Sociales"));
}
let cienciasNaturales = prompt("Ingrese la nota final en Ciencias Naturales");
cienciasNaturales = Number(cienciasNaturales);
while ((cienciasNaturales < 1) | (cienciasNaturales > 10)) {
  cienciasNaturales = Number(prompt("Nota invalida, ingrese nota entre el 1 y 10 para la materia de Ciencias Naturales"));
}


const suma =
  matematicas +
  lenguaYLiteratura +
  historia +
  cienciasNaturales +
  cienciasSociales;

alert("la suma es " + suma);

const promedio = suma / 5;

alert("El promedio del alumno es de " + promedio);

if (promedio >= 7) {

    document.write(
    "El promedio es de " +promedio +" por lo tanto tiene todas las materias APROBADAS.")
    ;} 
    else {  
        document.write("El promedio es de " +promedio +" por lo tanto tiene una o mas materia/s DESAPROBADA/S.");
}
