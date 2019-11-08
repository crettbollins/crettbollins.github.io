var currRotation = 0
var construction = $('#construction')

function rotate() {
    construction.css({transform: "rotate(" + currRotation++ + "deg)"})
    window.requestAnimationFrame(rotate)
}

window.requestAnimationFrame(rotate)