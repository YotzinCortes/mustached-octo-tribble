var numeros=[9,3,5,6,8,3,5,4,3,2,5,5,5,9];
function nombre(arreglo){

var x=[];
	for(i=0; i<10; i++){
		var y=0;
		for(j=0; j<arreglo.length; j++){
			if(arreglo[j]==i){
				y+=1
			}
		}
			if(y >= 2){
				x.push(i)
			}
	}
	console.log(x)
};
