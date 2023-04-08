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
        
        // animazione header fixed
        header.style.background = 'white';
        header.style.boxShadow = '5px 5px 10px -10px #000000';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'black', 'important');
        }
        menu.style.color = 'black';
    }
    else{
        header.style.background = 'rgba(0, 0, 0, 0.2)'
        header.style.boxShadow = '0px 0px 0px 0px';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'white', 'important');
        }
        menu.style.color = 'white';
    }
    // animazione about me e progetti
    if (scroll > 500){
        photo.style.display = 'block';
        info.style.display = 'block';
    }
    if (scroll > 1200){
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.display = 'block';
        }
    }
})

// bottone per attivare la dark-mode
const button = document.querySelector('.dark-mode');
button.addEventListener('click', function(){
    
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

    // imposta TEMA CHIARO
    if(changeColor == true){
        changeColor = false;

        // cambio icona e colori dark-mode
        iconSun.style.display = 'none';
        iconMoon.style.display = 'inline-block';
        button.style.backgroundColor = 'white';
        button.style.color = 'black'
        
        // cambio colori
        header.style.background = 'rgba(0, 0, 0, 0.2)'
        header.style.boxShadow = '0px 0px 0px 0px';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'white', 'important');
        }
        menu.style.color = 'white';

        for (let i = 0; i < title.length; i++) {
            title[i].style.setProperty('color', 'white', 'important');
        }
        for (let i = 0; i < socials.length; i++) {
            socials[i].style.setProperty('color', 'white');
            socials[i].style.border = '2px solid white';
        }
        cover.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        main.style.backgroundColor = 'white';
        main.style.color = 'black'
        arrow.style.color = 'white';
        arrow.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        arrow.style.setProperty('color', 'black', 'important');
        info.style.setProperty('color', 'black', 'important');
        cornice.style.border = '5px solid black';
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.boxShadow = '5px 5px 14px 0px rgba(0,0,0,0.57)';
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
                header.style.background = 'white';
                header.style.boxShadow = '5px 5px 10px -10px #000000';
                for (let i = 0; i < link.length; i++) {
                    link[i].style.setProperty('color', 'black', 'important');
                }
                menu.style.color = 'black';
            }
            else{
                header.style.background = 'rgba(0, 0, 0, 0.2)'
                header.style.boxShadow = '0px 0px 0px 0px';
                for (let i = 0; i < link.length; i++) {
                    link[i].style.setProperty('color', 'white', 'important');
                }
                menu.style.color = 'white';
            }
        })
    }
    // imposta TEMA SCURO
    else{
        changeColor = true;

        // cambio icona dark-mode
        iconMoon.style.display = 'none';
        iconSun.style.display = 'inline-block';
        button.style.backgroundColor = 'rgb(19, 19, 19)';
        button.style.color = 'white'
        
        // cambio colori
        header.style.background = 'rgba(0, 0, 0, 0.2)'
        header.style.boxShadow = '0px 0px 0px 0px';
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'rgb(19, 19, 19)', 'important');
            link[i].style.fontWeight = 'bold'
        }

        for (let i = 0; i < title.length; i++) {
            title[i].style.setProperty('color', 'rgb(19, 19, 19)', 'important');
        }
        for (let i = 0; i < socials.length; i++) {
            socials[i].style.setProperty('color', 'rgb(19, 19, 19)', 'important');
            socials[i].style.border = '2px solid rgb(19, 19, 19)';
            socials[i].style.fontWeight = 'bold'
        }
        cover.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        main.style.backgroundColor = 'rgb(19, 19, 19)';
        main.style.color = 'white'
        arrow.style.color = 'rgb(19, 19, 19)';
        arrow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        arrow.style.setProperty('color', 'white', 'important');
        info.style.setProperty('color', 'white', 'important');
        cornice.style.border = '5px solid white';
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.boxShadow = '2px 2px 5px 0px white';
        }

        // impostazioni scroll della pagina tema scuro
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
                header.style.background = 'rgb(19, 19, 19)';
                header.style.boxShadow = '5px 5px 10px -10px white';
                for (let i = 0; i < link.length; i++) {
                    link[i].style.setProperty('color', 'white', 'important');
                }
                menu.style.color = 'white'
            }
            else{
                header.style.background = 'rgba(0, 0, 0, 0.2)'
                header.style.boxShadow = '0px 0px 0px 0px';
                for (let i = 0; i < link.length; i++) {
                    link[i].style.setProperty('color', 'rgb(19, 19, 19)', 'important');
                }
                menu.style.color = 'white';
            }
        })
    }
})