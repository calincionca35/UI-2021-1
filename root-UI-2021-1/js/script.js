/*eslint-env browser*/
"use strict";
//Global Variables    

//Helper Function
var $ = function (id) {
    return document.getElementById(id);
};

//Progress Bar & Show/Hide to Top Button
window.onscroll = function() {progress()};
        
function progress() {
    let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let fill = (scrolled / height) * 100;
    $("bar").style.width = fill + "%";
    if ( scrolled > 20) { // Show/Hide to Top Button
        $("toTop").style.visibility = "visible";
    } else {
        $("toTop").style.visibility = "hidden";
    }
};

// Show/Hide Main Menu
function toggleNav() {
    if ($("mainMenu").style.display === "none") {
        $("mainMenu").style.display = "block";
        $("toTop").style.zIndex = -1;
    } else {
        $("mainMenu").style.display = "none";
        $("toTop").style.zIndex = 2;
    }
}

// Show Page
function showPage() {
    if (screen.width > 767) {
        $("mainMenu").style.display = "block"
    } else if ($("mainMenu").style.display = "block") {
        $("mainMenu").style.display = "none"
        $("toTop").style.zIndex = 2;
    }
}

// TOGGLE BACK & FRONT OF CARD
let inners = document.querySelectorAll('.inner');
let moreButtons = document.querySelectorAll('.moreBtn');
let frontButtons = document.querySelectorAll('.frontBtn');

for (let i=0; i<moreButtons.length; i++) {
    moreButtons[i].addEventListener('click', function() {
        for (let j=0; j<inners.length; j++) {
            if (i == j) {
                inners[j].style = 'transform: rotateY(180deg);';
            }
        }
    }); 
}
        
for (let i=0; i<frontButtons.length; i++) {
    frontButtons[i].addEventListener('click', function() {
        for (let j=0; j<inners.length; j++) {
            if (i == j) {
                inners[j].style = 'transform: rotateY(360deg);';
            }
        }
    }); 
}

// Scroll to Top Button
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark Mode Button
function darkMode() {
    let darkElements = document.getElementsByClassName('dark');
    for (let i=0; i<darkElements.length; i++) {
        darkElements[i].classList.toggle("darkMode");
    }
}

// Footer Copyright Year
$("copyRightYear").innerHTML = new Date().getFullYear();
