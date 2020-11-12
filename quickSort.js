function quickSort(arr, start, end) {
    if (arr.length == 1) { return arr; }
    if (start < end) { 

        var p = pivotHelper(arr, start, end);
        quickSort(arr, start, p);
        quickSort(arr, p+1, end);
    }
    return arr;


}

function pivotHelper (arr, indexStart, indexEnd) {

    if (arr.length == 1) { return arr; }

    pivot = indexStart;

    i=pivot+1;
    while (i < indexEnd) {
        if (arr[indexStart] > arr[i]) { // i is smaller than pivot
            pivot++; // incremenet pivot
            temp=arr[pivot]; // swap i & pivot
            arr[pivot] = arr[i];
            arr[i] = temp;
        }
        i++;
    }

    temp=arr[indexStart];
    arr[indexStart] = arr[pivot];
    arr[pivot] = temp;

    /* PICKING A PIVOT
    first element
    3 args: array, start index(default=0), end index (arr.length-1)
    Grab the pivot from start of array
    STore current pivot in  index in a variable (keep track of where pivot should end up)
    Loop through array from the start until the end
    If pivot > current element: increase pivot index var & swap current element w/ element at pivot index

    Swap starting element (the pivot) w/ pivot index
    Return the pivot index */

    return pivot;
    
    console.log(arr);
}

console.log(quickSort(arr=[4,5,2,6,2,8,6], 0, (arr.length)));

console.log(quickSort(arr=[5,6,4,6,3,8,1], 0, arr.length));
console.log(quickSort(arr=[3,5,2,6,1,8,6,2,7,1,8,3], 0, arr.length));

/*
PIVOT HELPER
implement a function responsible for arrangin elements in an array on either side of a pivot.
Given an array, this helper function should designate an element as the pivot
It should then rearrange elements in taht array so that
all values < the pivot are moved the left of the pivot, and
all values > than the pivot are moved to the right of the pivot

The order of elements on either side of the pivot doesn't matter
The helper should do this in place, that is, it should not create a new array
When complete, this helper should return the index of the pivot


*/