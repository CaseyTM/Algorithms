<script type="text/javascript">


var prime = [2];
var i = 3;

for(var i = 3; i < 10; i++){
	var isPrime = true;
	for(var j = 0 ; j < 1000; j++){
		var iByJ = i % prime[j];
		if(iByJ == 0){
			isPrime = false;
			break;
		}
		if(isPrime){
			prime.push(j);
			break;
		}
 		i++
	}
}

console.log(prime);




console.time('countPrimes');
countPrimes(2000000);
console.timeEnd('countPrimes');


function countPrimes(num){

    var knownPrimes = [2,3,5,7,11,13,17];
    //take the numbers and multiply them together
    var sum = 0;

    for (var i = 6; i < num; i++) {
        if((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0) && (i % 11 != 0) && (i % 13 != 0) && (i % 17 != 0)){
            for (var j = 0; j < knownPrimes.length; j++) {

                if (i % knownPrimes[j] == 0) {
                    break;
                }
                if ((j == (knownPrimes.length - 1) ) && (i % knownPrimes[j] != 0)) {
                    knownPrimes.push(i);
                }    
            }
        }
    }

    sum = knownPrimes.reduce(function(a,b){
        return a + b;
    },0);

    console.log(sum);

}





</script>