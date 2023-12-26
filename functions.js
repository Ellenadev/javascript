function hello () {
    let msg = "hello world"
    // alert(msg);
    let bodyTag = document.querySelector("body");
    bodyTag.style.backgroundColor = "red";


    let helen = document.getElementById("1");
    helen.style.backgroundColor = "white";


    let howell = document.getElementById("2"); 
    howell.style.fontSize = "50px";
}

function hey () {
    // alert("welcome to my website")
}

function change(){
    //how to remove and add classes
    let cc = document.getElementById("xyz");
    cc.classList.remove("btn-secondary");
    cc.classList.add("btn-danger");
}


function gg(){
    let bb = document.getElementById("bb");
    bb.classList.remove("btn-primary");
    bb.classList.add("btn-secondary");
}




// a function is a block of code that is to perform
// a given task at a given time or event