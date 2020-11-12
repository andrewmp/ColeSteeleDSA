function getDigit (num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(7323,2));

function digitCount (num) { 
    if (num===0) return 1;
    var x = Math.abs(num);
    var y = Math.log10(x);
    var z = Math.floor(y);
    return z + 1;
}

// console.log(digitCount(7323));

function mostDigits (arr) {
    var highest = 0;
    var i = 1;
    while (i < arr.length) {
        if (arr[i] > arr[highest]) { highest=i; i++;}
    }

    return digitCount(arr[highest]);

}

// console.log(mostDigits([1, 34, 554, 2343, 43244]));

// Define a function that accepts list of numbers
function radixSort(arr) {
    // Figure out how many digits the largest number has

    var mostDigit = mostDigits(arr);

    
    for (var k=0; k< mostDigit; k++) {
        for (var j=0; j< mostDigit; j++) {
            var bucket= new[10];
            var x = getDigit(arr[j], k); 
            bucket[x].append(arr[j]);

        /*
        For each iteration of the loop:
            - Create buckets for each digit (0 to 9)
            - Place each number in the corresponding bucket based on its kth digit
        */
        }
    }
}

console.log(radixSort([5,3,2,44,3234,4655,3,3244]));
/* 

F
Replace our existing array with values in our buckets starting with 0 and going up to 9
return list at the end!
*/