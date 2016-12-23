function quickSort(array){
	if(array.length == 0){
		return [];
	}

	var left = [];
	var right =[];
	var pivot =array[0];

	for(let i =1; i < array.length; i++){
		if(arrayi] < pivot){
			left.push(array[i]);
		}else{
			right.push(array[i]);
		}
	}
		return quickSort(left).concat(pivot,quickSort(right));
	
}
quickSort([4,19,53,542,63,769,1,4568,24,29340,2,11,888]);