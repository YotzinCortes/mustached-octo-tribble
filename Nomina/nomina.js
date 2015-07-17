var nombre;
var puesto;
var dias;
var salario;

var empleado = {
  nombre: document.getElementById("nombre").value,
  puesto: document.getElementById("puesto").value,
  dias: document.getElementById("dias").value,
  salario: document.getElementById("salario").value,
  quincena: function(){
    return empleado.dias * empleado.salario
  }
  nomina: function(){
    console.log("El salario quincenal correspondiente de " + empleado.nombre + "que se desempeña como "
    + empleado.puesto + "es de " + quincena)
  }
}
