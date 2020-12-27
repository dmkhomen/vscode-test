var a = 5;
var b = "5";
var match;

if (a === b) {
    match = true;
} else {
    match = false;
}

//console.log("The numbers match: " + match);
document.body.innerHTML = match;