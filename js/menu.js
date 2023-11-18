const botaoHamburguer = document.querySelector('.menu-label')

botaoHamburguer.addEventListener('click', () => {
    const menu = document.querySelectorAll('.item')
    menu.forEach((item) => {
        item.addEventListener('click', () => {
            botaoHamburguer.click()
        })
    });
})