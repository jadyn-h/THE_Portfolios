const aboutMe = document.getElementsByClassName('about-me-button')[0];
const panel = document.getElementsByClassName('panel')[0];

const panel_1 = document.getElementById('panel-1');
const panel_2 = document.getElementById('panel-2');
const panel_3 = document.getElementById('panel-3');


document.addEventListener("DOMContentLoaded", () => {
    panel.classList.add('hide'); 
});

aboutMe.addEventListener('click', ()=>{
    panel.classList.remove('hide'); 

    const seconds = 2 *1000;
    panelUnveiling(seconds);

    setTimeout(function() {
        window.location.assign("ava_portfolio/about_me/ava_about_me.html");
    }, seconds *4);

});

function panelUnveiling(seconds){

    const ms = seconds;

    setTimeout(function() {
    panel_1.classList.toggle('hide'); 
    }, ms);

    setTimeout(function() {
    panel_2.classList.toggle('hide'); 
    }, ms *2);

    setTimeout(function() {
    panel_3.classList.toggle('hide'); 
    }, ms *3);

    return;
};