const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const toggle = document.getElementById("toggle");
const body = document.getElementById('body');
const btnContainer = document.getElementById('buttonContainer');
const btnGoogle = document.getElementById('btnGoogle');

btn.addEventListener('click', () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});
toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    nav.classList.toggle('dark');
    btn.classList.toggle('dark');
    toggle.classList.toggle('dark');
    btnContainer.classList.toggle('dark');

})
btnGoogle.addEventListener('click', ()=>{
    
})