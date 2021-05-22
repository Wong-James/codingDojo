function reverse2(arr){
    var temp = [];
    for( var i=arr.length-1; i>=0; i--){
        temp.push(arr[i]);
    }
    return(temp);
}
var result=reverse2(["a","b","c","d","e"]);