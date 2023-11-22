window.onload = function () {
    randomQ();
}

function randomQ(){
    let btn = document.getElementsByClassName("btn")[0]
    btn.onclick = function(){
        let arr = [
            "hashir is so funny",
            "ones upon a thim there was a bird",
            "this is a book that you cannot read",
            "there was a cat sitting near the dog",
            "like i said to you before i love you",
            "this is not funny idoit you don't know me"
        ]
        let m = Math.floor(Math.random()*arr.length)
        let para = document.getElementsByClassName("para")[0]
           para.innerHTML = "\""+arr[m]+"\"";
    }
}








