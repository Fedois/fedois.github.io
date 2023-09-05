
// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-links');
const navigation = document.querySelector('.navigation > ul')
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
const root = document.documentElement
let changeColor = false;

// impostazioni scroll di default
document.addEventListener('scroll', function(){
    // componenti html
    let scroll = window.scrollY;
    const link = document.querySelectorAll('.link-page');
    const menu = document.querySelector('.btn');
    const photo = document.querySelector('.ph-img');
    const projects = document.querySelectorAll('.card-proj');
    const nameHeader = document.querySelector('.header-fixed h4')

    // change color navigation
    if(changeColor == false){
        if(scroll > 500){
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--blue)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(34, 79, 170, 0.2)')
            
        } else{
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'white', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)')
        }
    } else{
        if(scroll > 500){
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)')
            
        } else{
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)', 'important');
            }
            root.style.setProperty('--bg-blur', 'rgba(1, 1, 26, 0.2)')
        }
    }
})

// cambia icona dark mode

document.querySelector('.dark-mode').addEventListener('click', function(){
    changeColor = changeColor == true ? false : true
    if(changeColor == true){
        root.style.setProperty('--secondary', 'rgb(1, 1, 26)');
        root.style.setProperty('--text', 'white');
        root.style.setProperty('--border-color', '#888888');
        document.querySelector('.photo-jumbo').src='img/bgMeJumboDark.png'
        root.style.setProperty('--bg-blur', 'rgba(1, 1, 26, 0.2)');
        root.style.setProperty('--bg-blur-arr', 'rgba(1, 1, 26, 0.2)');
        document.querySelector('.dark-mode i:first-child').style.display = 'none'
        document.querySelector('.dark-mode i:last-child').style.display = 'block'
        root.style.setProperty('--shadow', '0px 1px 14px 5px rgba(255,255,255,0.1)');
    } else{
        root.style.setProperty('--secondary', 'white');
        root.style.setProperty('--text', 'rgb(25, 25, 25)');
        root.style.setProperty('--border-color', 'rgb(134, 133, 133)');
        document.querySelector('.photo-jumbo').src='img/bgMeJumbo.png'
        root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--bg-blur-arr', 'rgba(255, 255, 255, 0.2)');
        document.querySelector('.dark-mode i:first-child').style.display = 'block'
        document.querySelector('.dark-mode i:last-child').style.display = 'none'
        root.style.setProperty('--shadow', '0px 2px 14px 5px rgba(0,0,0,0.18)');
    }
})
console.log(changeColor)


// FUNZIONI
