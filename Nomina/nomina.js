var arreglo = [];
function calcula(){
  var empleado = {
    nombre: document.getElementById("nombre").value,
    puesto: document.getElementById("puesto").value,
    dias: document.getElementById("dias").value,
    salario: document.getElementById("salario").value,
    imprime: function(){
      console.log(this.dias * this.salario)
    }
  }
  arreglo.push(empleado);
return arreglo[0].imprime();
}
