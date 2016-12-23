function bubbleSort(items){
	var length = items.length;
	for(let i =0; i < length; i++){
		for(let j = 0; j < i; j++){
			// COMPARE THE CURRENT SPOT WITH THE NEXT SPOT
			if(items[j] > items[j+1]){
				// SWAP THE NUMBERS
				var temp = items[j];
				items[j] = items[j+1];
				items[j+1] = temp;

			}

		}

	}
	console.log(items);

}


bubbleSort([1,2,3,4,5,6]);