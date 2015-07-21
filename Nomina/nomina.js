var arreglo = [];
function calcula(){
  var empleado = {
    nombre: document.getElementById("nombre").value,
    puesto: document.getElementById("puesto").value,
    dias: document.getElementById("dias").value,
    salario: document.getElementById("salario").value,
    imprime: function(){
      alert("El empleado " + this.nombre + " con puesto " + this.puesto
      + " recibirá un salario de " + (this.dias * this.salario) + " pesos este mes");
    }
  }
  arreglo.push(empleado);
return arreglo[0].imprime();
}
