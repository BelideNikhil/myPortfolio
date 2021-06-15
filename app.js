var buttOn=document.querySelector("#switcher");

// defining a key in browser and setting default
let locale=localStorage.getItem("darkmode")
console.log(locale)


function enableDark(){
    document.body.classList.add("dark_mode");
    switcher.src="./images/sun.png";
    localStorage.setItem("darkmode",'enabled-state')
}

function disableDark(){
    document.body.classList.remove("dark_mode");
    switcher.src="./images/moon.png";
    localStorage.setItem("darkmode",'disabled-state')
}

// checking on click and changing
buttOn.addEventListener("click", function(){
    locale=localStorage.getItem("darkmode");
    if(locale!='enabled-state'){
        enableDark()
    }
    else{
        disableDark()
    }
})

// keeping it enabled on page reload
if(locale==='enabled-state'){
    enableDark()
}
