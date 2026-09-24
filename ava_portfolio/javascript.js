const aboutMe = document.querySelector('.about-me-button');
const skillset = document.querySelector('.skillset-button');
const projects = document.querySelector('.projects-button');

const panel = document.querySelector('.panel');

const panel_1 = document.getElementById('panel-1');
const panel_2 = document.getElementById('panel-2');
const panel_3 = document.getElementById('panel-3');


const seconds = 1 * 1000;

// document.addEventListener("DOMContentLoaded", () => {
//    panel.classList.toggle('hide'); 
// });

aboutMe.addEventListener('click', ()=>{
    panel.classList.remove('hide'); 

    panelUnveiling(seconds);

    setTimeout(function() {
        window.location.assign("/ava_portfolio/about_me/ava_about_me.html");
    }, seconds *4);

});

projects.addEventListener('click', ()=>{
    panel.classList.remove('hide'); 

    panelUnveiling(seconds);

    setTimeout(function() {
        window.location.assign("/ava_portfolio/projects/ava_projects.html");
    }, seconds *4);

});

skillset.addEventListener('click', ()=>{
    panel.classList.remove('hide'); 

    panelUnveiling(seconds);

    setTimeout(function() {
        window.location.assign("/ava_portfolio/skillset/ava_skillset.html");
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