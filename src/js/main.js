document.addEventListener('DOMContentLoaded',()=>{
    const menu = document.querySelector('.header-contents-menu')
    const open = document.querySelector('.menu__open')
    const close = document.querySelector('.menu__close')
    open.addEventListener('click',()=>{
        open.classList.toggle('hiden')
        close.classList.toggle('hiden')
        menu.classList.toggle('visibility')
    })
    close.addEventListener('click',()=>{
        open.classList.toggle('hiden')
        close.classList.toggle('hiden')
        menu.classList.toggle('visibility')
    })
})