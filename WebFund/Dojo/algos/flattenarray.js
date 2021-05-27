var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7, 8 , 10, 8] ];
    
// We can console.log the `8` in this array if we console.log(arr2d[0][2]);
function isPresent2d(arr2d, value){
    var x = 0;
    var y = 0;
    while(y <= arr2d.length-1){
        if(arr2d[y][x] == value){
            return true
        }
        if(x < arr2d[y].length){
            x++
        }
        if(x == arr2d[y].length){
            y++
            x=0
        }
    }
    return false
}
console.log(isPresent2d(arr2d, 7))
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// complete the following function
function flatten(arr2d) {
    var flat = [];
    var x = 0;
    var y = 0;
    while(y <= arr2d.length-1){
        if(x < arr2d[y].length){
            flat.push(arr2d[y][x])
            x++
        }
        if(x == arr2d[y].length){
            y++
            x=0
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7, 8, 6], [1, 2, 3, 5, 10], [2, 3, 6, 8] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

'''

the hidden reality brian green