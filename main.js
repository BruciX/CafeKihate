const botonDespliegue = document.querySelector('.despliegue');
const listaNav = document.querySelector('.nav__lista');
const flecha = document.querySelector('.icon');

botonDespliegue.addEventListener('click',function () {
    listaNav.classList.toggle('activo');
    flecha.classList.toggle('rotacion')
})