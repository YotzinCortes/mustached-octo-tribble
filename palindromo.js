var palabra = prompt("Escribe una palabra");
var coincidencia = 0;
var reversa = palabra.length - 1;
var term = Math.floor(palabra.length / 2);
for (i = 0; i < term; i++, reversa--) {
  if (palabra[i] == palabra[reversa]) {
    coincidencia++;
  }

};
if (coincidencia == Math.floor(palabra.length /  2)) {
  alert("Tienes un palíndromo");
}
else {
      alert("No tienes un palíndromo");
};
