
function backToTop() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";
    window.scrollTo(0, 0);
}

var text = 1;
function changeWords() {
    if (text === 1) {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    } else {
        document.getElementById("demo").innerHTML = "Original";
    }
    text = (text + 1) % 2;
}

var light = 1;
function lightmode() {
    if (light === 1) {
        document.getElementById("introMessage").style.color = "#13293D";
        document.body.style.backgroundColor = 'aliceblue';
        document.getElementById("webnameDisplay").style.color = "#13293D";
    } else {
        document.body.style.backgroundColor = "#13293D";
        document.getElementById("introMessage").style.color = "aliceblue";
        document.getElementById("webnameDisplay").style.color = "transparent";
    }
    light = (light + 1) % 2;
}

function changeAboutDisplay(category) {
    if (category === 1) {
        document.getElementById("aboutHeader").style.color = "red";
    } else if (category === 2) {
        document.getElementById("introMessage").style.color = "aliceblue";
    } else if (category === 3) {
        document.getElementById("introMessage").style.color = "aliceblue";
    } else {
        document.getElementById("introMessage").style.color = "aliceblue";
    }
}

function revert() {
    document.getElementById("introMessage").style.color = "red";
}

window.addEventListener("load", (event) => {
    
    if (window.pageYOffset == 0) {
        document.getElementById("introNav").style.textDecoration = "underline";
    } 
});

window.addEventListener("scroll", (event) => {
    var currSection = 1;
    var intro = document.getElementById("intro");
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");

    if (window.scrollY > (projects.offsetTop + projects.offsetHeight - 5)) {
        currSection = 4;
    } else if (window.scrollY > (about.offsetTop + about.offsetHeight - 5)) {
        currSection = 3;
    } else if (window.scrollY > (intro.offsetTop + intro.offsetHeight - 5)) {
        currSection = 2;
    } else {
        currSection = 1;
    }

    if (currSection == 4) {
        document.getElementById("contactNav").style.textDecoration = "underline";
        document.getElementById("projectsNav").style.textDecoration = "none";
    } else if (currSection == 3) {
        document.getElementById("projectsNav").style.textDecoration = "underline";
        document.getElementById("aboutNav").style.textDecoration = "none";
        document.getElementById("contactNav").style.textDecoration = "none";
    }else if (currSection == 2) {
        document.getElementById("aboutNav").style.textDecoration = "underline";
        document.getElementById("introNav").style.textDecoration = "none";
        document.getElementById("projectsNav").style.textDecoration = "none";
    } else {
        document.getElementById("introNav").style.textDecoration = "underline";
        document.getElementById("aboutNav").style.textDecoration = "none";
    }

});


function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}