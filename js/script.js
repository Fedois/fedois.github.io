
// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-links');
const navigation = document.querySelector('.navigation > ul')
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
const root = document.documentElement
const link = document.querySelectorAll('.link-page');
let changeColor = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : 'false';

changeColor == 'true' ? whiteTheme(root) : darkTheme(root)

// impostazioni scroll
document.addEventListener('scroll', function(){
    // componenti html
    let scroll = window.scrollY;
    const menu = document.querySelector('.btn');
    const photo = document.querySelector('.ph-img');
    const projects = document.querySelectorAll('.card-proj');
    const nameHeader = document.querySelector('.header-fixed h4')

    // change color navigation
    if(changeColor == 'true'){
        if(scroll > 500){
            localStorage.setItem('scroll', '500')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--blue)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(34, 79, 170, 0.2)')
            
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
            root.style.setProperty('--bg-blur', 'rgba(1, 1, 26, 0.2)')
        }
    }
})

// cambia tema
document.querySelector('.dark-mode').addEventListener('click', function(){
    if(changeColor == 'true'){
        changeColor = 'false'
        localStorage.setItem('dark-mode', 'false')
        darkTheme(root)
        if(localStorage.getItem('scroll') == '500'){
            console.log('ci')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)')
        }
    } else{
        changeColor = 'true'
        localStorage.setItem('dark-mode', 'true')
        whiteTheme(root)
        if(localStorage.getItem('scroll') == '500'){
            console.log('ci')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--blue)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(34, 79, 170, 0.2)')
        }
    }
})


// FUNZIONI
function darkTheme(root){
    root.style.setProperty('--secondary', 'rgb(1, 1, 26)');
    root.style.setProperty('--text', '#b9b9b9');
    root.style.setProperty('--bg-cards', 'rgb(2, 2, 36)');
    document.querySelector('.photo-jumbo').src='img/bgMeJumboDark.png'
    root.style.setProperty('--bg-blur', 'rgba(1, 1, 26, 0.2)');
    root.style.setProperty('--bg-blur-arr', 'rgba(1, 1, 26, 0.2)');
    root.style.setProperty('--shadow', '0px 1px 14px 5px rgba(255,255,255,0.1)');
}
function whiteTheme(root){
    root.style.setProperty('--secondary', 'white');
    root.style.setProperty('--text', '#262626');
    root.style.setProperty('--bg-cards', 'rgb(245, 243, 243)');
    document.querySelector('.photo-jumbo').src='img/bgMeJumbo.png'
    root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--bg-blur-arr', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--shadow', '0px 2px 14px 5px rgba(0,0,0,0.18)');
}
