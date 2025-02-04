let box = document.querySelectorAll(".btn-2");

box.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.style.backgroundColor === "lightsteelblue"){
            btn.style.backgroundColor = "red";
            btn.style.margin = '2vw';
            console.log("change color");
        }
        else{
            btn.style.backgroundColor = "lightsteelblue";
            btn.style.margin = '1vw';
        }
    });
});