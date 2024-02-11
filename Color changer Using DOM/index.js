let body=document.querySelector("body");
function handleBgColor(val){
    if (val=="grey"){
        body.style.backgroundColor="grey";
    }
    else if (val=="white"){
        body.style.backgroundColor="white";
    }
    else if (val=="blue"){
        body.style.backgroundColor="blue";
    }
    else if (val=="yellow"){
        body.style.backgroundColor="yellow";
    }
    else{
        console.log("enter the val")
    }
}
