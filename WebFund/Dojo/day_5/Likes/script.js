var count1 = 0;
var countElement = document.querySelector("#count1");
console.log(countElement)
function add1(){
    count1++;
    document.querySelector("#count1").innerText = count1 + (" like(s)");
    console.log(count1);
}

var count2 = 0;
var countElement = document.querySelector("#count2");
console.log(countElement)
function add2(){
    count2++;
    document.querySelector("#count2").innerText = count2 + (" like(s)");
    console.log(count2);
}

var count3 = 0;
var countElement = document.querySelector("#count3");
console.log(countElement)
function add3(){
    count3++;
    document.querySelector("#count3").innerText = count3 + (" like(s)");
    console.log(count3);
}






// let count = [0,0,0]
// function add1(num, count){
//     count[num] +=1;
//     console.log(document.querySelector(count));
//     document.querySelector(count).innerText = count[num] + " Like(s)";
//     console.log(totalLikes);
// }