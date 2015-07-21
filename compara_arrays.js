var arreglo1= [9,3,5,6,8,3,5,4,3,2,5,5,5];
var arreglo2= [9,3,5,6,8,3,5,4,3,2,5,5,5];
var iguales = 0;
var diferentes = 0;

for(var index=0;index<length;index++) {
  if(arreglo1[index] == arreglo2[index])
    iguales++;
  else if(arreglo2.indexOf(arreglo1[index]) >= 0)
    diferentes++;
}
console.log(iguales);
console.log(diferentes);
