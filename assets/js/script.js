//Menu
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {  
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
              
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)
        
    });
}
const titulo = document.querySelector('.Type-writer');
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
    var scrollTop = $('.scrollTop');
    var q = $('.footer');

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        //Y amount that the scroll button will appear
        if (topPos > 500) {
            $(scrollTop).css('opacity', '1');
        }else {
            $(scrollTop).css('opacity', '0');
        }
    });

    //Speed ​​animation
    $(scrollTop).click(function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            100
        );
        return false;
    });
});
// link of software
//Links dos meus knowledge
const techs = [{
    name: 'htmlecss',
    // url: 'https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-html-e-css/'
}, {
    name: 'js',
    // url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/',
}, {
    name: 'sass',
    // url: 'https://sass-lang.com/'
}, {
    name: 'bootstrap',
    // url: 'https://getbootstrap.com/',
}, {
    name: 'reactjs',
    // url: 'https://pt-br.reactjs.org/',
}, {
    name: 'figma',
    // url: 'https://www.figma.com/'
}]

techs.forEach(tech => {
    $('.' + tech.name).on('click', () => {
        window.open(tech.url)
    })
});

//Revelar animação
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

//Home delay
sr.reveal('.button',{delay: 200})
sr.reveal('.projectlanguage',{delay: 400})
sr.reveal('.image-space-delay',{delay: 200})
sr.reveal('.image-other-delay',{delay: 600})
//about me delay
sr.reveal('.image-delay',{})
sr.reveal('.title-delay',{delay: 200})
sr.reveal('.description-delay',{delay: 400})
sr.reveal('.cards-interval',{interval: 400})





/*
//Validação captcha do contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o name "google" com uma letra para enviar!')
    }
}*/