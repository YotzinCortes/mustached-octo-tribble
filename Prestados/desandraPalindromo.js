var palabra = prompt("Dame una palabra");
var palabraLargo=alert(palabra.length);
var inversa = (palabra.length - 1);
var centro = Math.floor(palabra.length / 2);
var x = 0;
for(i=0,j=inversa;i < centro, j > centro; i++, j--){
	if(palabra[i] == palabra[j]){
		x++
	}
};
if(centro == x){
	alert("Si es un palindromo")
}else{
	alert("No es un palindromo")
};
