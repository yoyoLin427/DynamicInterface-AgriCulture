function AnimatedMenuIcon(x) {
    //沒有這個CSS類時，它就新增這個CSS類；如果已經有了這個CSS類，就刪除
    x.classList.toggle("change");
}
function  ShowMenu(){
    var mychar = document.getElementById("navigation-mobile");
    if(mychar.style.display=="block"){
        mychar.style.display="none";
    }
    else{
        mychar.style.display="block";
    }

    
}
function  CloseMenu(){
    var mychar = document.getElementById("navigation-mobile");
    mychar.style.display="none";

    
}

