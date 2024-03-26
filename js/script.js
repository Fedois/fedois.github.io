// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-links');
const navigation = document.querySelector('.navigation > ul')
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
const root = document.documentElement
const link = document.querySelectorAll('.link-page');
let changeColor = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : 'true';

changeColor == 'true' ? whiteTheme(root) : darkTheme(root)

// impostazioni scroll
document.addEventListener('scroll', function(){
    let scroll = window.scrollY;

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
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--blue)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(34, 79, 170, 0.2)')
        }
    }
})


// FUNZIONI
function darkTheme(root){
    document.querySelector('.photo-jumbo').src='img/bgMeJumboDark.png'
    root.style.setProperty('--secondary', '#111');
    root.style.setProperty('--text', '#e0e0e0');
    root.style.setProperty('--bg-cards', '#15151d');
    root.style.setProperty('--bg-blur', 'rgba(6,29,61,0.2)');
    root.style.setProperty('--bg-blur-arr', 'rgba(6,29,61,0.2)');
    root.style.setProperty('--shadow', '0px 1px 14px 5px rgba(255,255,255,0.1)');
}

function whiteTheme(root){
    document.querySelector('.photo-jumbo').src='img/bgMeJumbo.jpeg';
    root.style.setProperty('--secondary', 'white');
    root.style.setProperty('--text', '#262626');
    root.style.setProperty('--bg-cards', 'rgb(245, 243, 243)');
    root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--bg-blur-arr', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--shadow', '0px 2px 14px 5px rgba(0,0,0,0.18)');
}
