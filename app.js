var toggled=document.querySelector("#switcher");

toggled.addEventListener("click", function(){
    console.log("working")
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
    switcher.src="./images/sun.png";
    }
    else{
    switcher.src="./images/moon.png";
    }
})