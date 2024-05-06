// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-links');
const navigation = document.querySelector('.navigation > ul')
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
const root = document.documentElement
const link = document.querySelectorAll('.link-page');
let changeColor = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : 'true';

changeColor == 'true' ? secondTheme(root) : firstTheme(root)

// impostazioni scroll
document.addEventListener('scroll', function(){
    let scroll = window.scrollY;

    // change color navigation
    if(changeColor == 'true'){
        if(scroll > 500){
            localStorage.setItem('scroll', '500')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--primary)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(100, 100, 100, 0.2)')
        } else{
            localStorage.setItem('scroll', '0')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)')
        }
    } else{
        if(scroll > 500){
            localStorage.setItem('scroll', '500')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)')
            
        } else{
            localStorage.setItem('scroll', '0')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(100, 100, 100, 0.2)')
        }
    }
})

// cambia tema
document.querySelector('.dark-mode').addEventListener('click', function(){
    if(changeColor == 'true'){
        changeColor = 'false'
        localStorage.setItem('dark-mode', 'false')
        firstTheme(root)
        if(localStorage.getItem('scroll') == '500'){
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)')
        }
    } else{
        changeColor = 'true'
        localStorage.setItem('dark-mode', 'true')
        secondTheme(root)
        if(localStorage.getItem('scroll') == '500'){
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--blue)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(100, 100, 100, 0.2)')
        }
    }
})


// FUNZIONI
function firstTheme(root){
    document.querySelector('.photo-jumbo').src='img/profile.png';
    document.querySelector('.cornice img').src='img/profile2.png'
    root.style.setProperty('--primary', 'rgba(19,19,19,0.8)');
    root.style.setProperty('--secondary', 'white');
    root.style.setProperty('--text', '#262626');
    root.style.setProperty('--bg-cards', 'rgb(245, 243, 243)');
    root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--shadow', '0px 2px 14px 5px rgba(0,0,0,0.18)');
}

function secondTheme(root){
    document.querySelector('.photo-jumbo').src='img/profileDark.png'
    document.querySelector('.cornice img').src='img/profile2dark.png'
    root.style.setProperty('--primary', 'rgba(255,255,255,0.7)');
    root.style.setProperty('--secondary', '#1c1c1c');
    root.style.setProperty('--text', '#e0e0e0');
    root.style.setProperty('--bg-cards', '#151515');
    root.style.setProperty('--bg-blur', 'rgba(100,100,100,0.2)');
    root.style.setProperty('--shadow', '0px 1px 14px 5px rgba(255,255,255,0.1)');
}
