function iAcceptCookie(){
    document.querySelector(".cookie").remove()
}

var x = document.querySelectorAll("h3");
function degreeChange(temp){
    for(var i = 0; i < x.length; i++){
        if(temp =="F"){
            var value = parseFloat(x[i].innerText)
            x[i].innerText = Math.floor(value * 9/5) + 32
        }
        else if(temp == "C"){
            var value = parseFloat(x[i].innerText)
            x[i].innerText = Math.round((value-32)*5/9 *10)/10;
        }
    }
}