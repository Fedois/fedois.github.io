// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-links');
const navigation = document.querySelector('.navigation > ul')
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
const root = document.documentElement
const link = document.querySelectorAll('.link-page');
let changeColor = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : 'true';
changeColor == 'true' ? secondTheme(root) : firstTheme(root)

// Imposta anni e mesi
const start_date = new Date('05/15/2023')
const current_date = new Date()
let calc_years = current_date.getFullYear() - start_date.getFullYear()
let calc_months = current_date.getMonth() - start_date.getMonth()
if (calc_months < 0){
    calc_years--
    calc_months += 12
}
document.getElementById('years').innerHTML = calc_years+' anni'
document.getElementById('months').innerHTML = calc_months+' mesi'

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
        } else{
            localStorage.setItem('scroll', '0')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)', 'important');
            }
        }
    } else{
        if(scroll > 500){
            localStorage.setItem('scroll', '500')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            
        } else{
            localStorage.setItem('scroll', '0')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)', 'important');
            }
        }
    }
})

// change theme
document.querySelector('.dark-mode').addEventListener('click', function(){
    if(changeColor == 'true'){
        changeColor = 'false'
        localStorage.setItem('dark-mode', 'false')
        firstTheme(root)
        if(localStorage.getItem('scroll') == '500'){
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
        }
    } else{
        changeColor = 'true'
        localStorage.setItem('dark-mode', 'true')
        secondTheme(root)
        if(localStorage.getItem('scroll') == '500'){
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--primary)', 'important');
            }
        }
    }
})

// Typewrite
const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


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
