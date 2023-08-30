
// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-fixed');
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
let changeColor = false;

// impostazioni scroll di default
document.addEventListener('scroll', function(){
    // componenti html
    let scroll = window.scrollY;
    const link = document.querySelectorAll('.link-page');
    const menu = document.querySelector('.btn');
    const photo = document.querySelector('.ph-img');
    const projects = document.querySelectorAll('.card-proj');

    // inizializzazione scroll
    if(scroll > 400){
        localStorage.setItem('scroll', '400')
        // animazione header fixed
        header.style.background = 'white';
        header.style.boxShadow = '5px 5px 10px -10px #000000';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'black', 'important');
        }
        menu.style.color = 'black';
    }
    else{
        localStorage.setItem('scroll', '0')
        header.style.background = 'rgba(0, 0, 0, 0.2)'
        header.style.boxShadow = '0px 0px 0px 0px';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'white', 'important');
        }
        menu.style.color = 'white';
    }
    // animazione about me e progetti
    if (scroll > 500){
        photo.style.animation = 'reveal 1s ease forwards;';
        animation = 'reveal 1s ease forwards;'
    }
    if (scroll > 1200){
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.animation = 'reveal 1s ease forwards;';
        }
    }
})

// bottone per attivare la dark-mode
const button = document.querySelector('.dark-mode');
button.addEventListener('click', function(){
    // imposta TEMA CHIARO
    if(changeColor == true){
        changeColor = false;
        localStorage.setItem('dark-mode', 'true')
        changeTheme('white', 'black', 'rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.5)', '5px 5px 14px 0px rgba(0,0,0,0.57)', changeColor)
    }
    // imposta TEMA SCURO
    else{
        changeColor = true;
        localStorage.setItem('dark-mode', 'false')
        changeTheme('rgb(19, 19, 19)', 'white', 'rgba(255, 255, 255, 0.3)', 'rgba(0, 0, 0, 0.5)', '2px 2px 5px 0px white', changeColor)
    }
})

// FUNZIONI
function changeTheme(color1, color2, coverColor, bgArrow, projShadow, black = 'black', changeColor){
    // componenti html per le impostazioni di dark-mode
    const iconSun = document.querySelector('.sun');
    const iconMoon = document.querySelector('.moon');
    const title = document.querySelectorAll('.my-name > *');
    const cover = document.querySelector('.cover-jumbo')
    const socials = document.querySelectorAll('.socials-jumbo a');
    const main = document.querySelector('main');
    const arrow = document.querySelector('.direction a');
    const cornice = document.querySelector('.cornice');
    const link = document.querySelectorAll('.link-page');
    const menu = document.querySelector('.btn');
    const projects = document.querySelectorAll('.card-proj');

    // cambio icona e colori dark-mode
    if(iconSun.style.display == 'block'){
        iconSun.style.display = 'none'
        iconMoon.style.display = 'inline-block';
    } else{
        iconSun.style.display = 'block'
        iconMoon.style.display = 'none';
    }
    
    button.style.backgroundColor = color1;
    button.style.color = color2
    
    // cambio colori
    if(parseInt(localStorage.getItem('scroll')) >= 400 ){
        header.style.background = color1;
        header.style.boxShadow = `5px 5px 10px -10px ${color2}`;
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', color2, 'important');
        }
        menu.style.color = color2;
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.2)'
        header.style.boxShadow = '0px 0px 0px 0px';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', color1, 'important');
        }
        menu.style.color = color1;
    }

    for (let i = 0; i < title.length; i++) {
        title[i].style.setProperty('color', color1, 'important');
    }
    console.log(localStorage)
    let important = localStorage.getItem('dark-mode') == 'true' ? '' : 'important'
    for (let i = 0; i < socials.length; i++) {
        socials[i].style.setProperty('color', color1, important);
        socials[i].style.border = `2px solid ${color1}`;
        socials[i].style.fontWeight = 'bold'
    }
    cover.style.backgroundColor = coverColor;
    main.style.backgroundColor = color1;
    main.style.color = color2
    arrow.style.color = color1;
    arrow.style.backgroundColor = bgArrow;
    arrow.style.setProperty('color', color2, 'important');
    info.style.setProperty('color', color2, 'important');
    cornice.style.border = `5px solid ${color2}`;
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.boxShadow = projShadow;
    }

    // impostazioni scroll della pagina tema chiaro
    document.addEventListener('scroll', function(){
        
        // componenti html
        let scroll = window.scrollY;
        const link = document.querySelectorAll('.link-page');
        const menu = document.querySelector('.btn');
        const photo = document.querySelector('.ph-img');
        const projects = document.querySelectorAll('.card-proj');
        
        // inizializzazione scroll
        if(scroll > 400){
            // animazione header fixed
            header.style.background = color1;
            header.style.boxShadow = '5px 5px 10px -10px #000000';
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', color2, 'important');
            }
            menu.style.color = color2;
        }
        else{
            header.style.background = 'rgba(0, 0, 0, 0.2)'
            header.style.boxShadow = '0px 0px 0px 0px';
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', color1, 'important');
            }
            menu.style.color = color1;
        }
    })
}