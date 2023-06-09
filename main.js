const botonDespliegue = document.querySelector('.despliegue');
const listaNav = document.querySelector('.nav__lista');
const flecha = document.querySelector('.icon');

botonDespliegue.addEventListener('click', function () {
    listaNav.classList.toggle('activo');
    flecha.classList.toggle('rotacion')
})


// mostrar los items de nosotros

const mostrarItems = document.querySelectorAll('.nosotros__acordeon-item')
mostrarItems.forEach((item) => {
    const acordeonTitulo = item.querySelector('.nosotros__acordeon-encabezado')

    acordeonTitulo.addEventListener('click', () => {
        const openItem = document.querySelector('.abrir-acordeon')

        toggleItem(item)
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })


})

const toggleItem = (item) => {
    const acordeonContenido = item.querySelector('.nosotros__acordeon-contenido')
    console.log(acordeonContenido)
    if (item.classList.contains('abrir-acordeon')) {
        acordeonContenido.removeAttribute('style')
        item.classList.remove('abrir-acordeon')

    } else {
        acordeonContenido.style.height = acordeonContenido.scrollHeight + 'px'
        item.classList.add('abrir-acordeon')
    }
}

// tema Oscuro

const botonTema = document.getElementById('tema-oscuro')

const temaOscuro = 'temaOscuro'
const iconoTema = 'bxs-sun'

const seleccionarTema = localStorage.getItem('selected-theme')
const seleccionarIcono = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(temaOscuro) ? 'dark' : 'ligth'
const getCurrentIcon = () => document.body.classList.contains(iconoTema) ? 'bx bxs-moon' : 'bx bxs-sun'

if (seleccionarTema) {
    document.body.classList[seleccionarTema === 'dark' ? 'add' : 'remove'](temaOscuro)
    botonTema.classList[seleccionarIcono === 'bx bxs-moon' ? 'add' : 'remove'](iconoTema)
    console.log(temaOscuro)
}

botonTema.addEventListener('click', () => {
    document.body.classList.toggle(temaOscuro)
    botonTema.classList.toggle(iconoTema)
   
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
