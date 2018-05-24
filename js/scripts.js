var gl = document.getElementById("glitch");
var over = false;

function glitch() {

    if (over == false) {

        gl.style.opacity = "1";
        setTimeout(function() { normal(); }, 1500);
    
    }
}

function normal() {
    gl.style.opacity = "0";
}