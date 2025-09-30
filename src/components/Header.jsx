import { useCallback, useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

function firstTheme(root){
    document.querySelector('.dark-mode i').className = 'fa-solid fa-toggle-on'
    root.style.setProperty('--primary', 'rgba(19,19,19,0.7)');
    root.style.setProperty('--secondary', 'white');
    root.style.setProperty('--text', '#262626');
    root.style.setProperty('--bg-cards', 'rgb(245, 243, 243)');
    root.style.setProperty('--bg-blur', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--shadow', '0px 2px 14px 5px rgba(0,0,0,0.18)');
}

function secondTheme(root){
    document.querySelector('.dark-mode i').className = 'fa-solid fa-toggle-off'
    root.style.setProperty('--primary', 'rgba(255,255,255,0.5)');
    root.style.setProperty('--secondary', '#1c1c1c');
    root.style.setProperty('--text', '#e0e0e0');
    root.style.setProperty('--bg-cards', '#151515');
    root.style.setProperty('--bg-blur', 'rgba(100,100,100,0.2)');
    root.style.setProperty('--shadow', '0px 1px 14px 5px rgba(255,255,255,0.1)');
}


function Header() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true')
  const social = [  
        {icon: 'github', url: 'https://github.com/Fedois'},
        {icon: 'instagram', url: 'https://www.instagram.com/fedois_/'},
        {icon: 'linkedin-in', url: 'https://www.linkedin.com/in/federicofois'},
  ]

  const scrollOption = useCallback(()=> {
    const link = document.querySelectorAll('.link-page');
    const scroll = window.scrollY;
    const color = darkMode ? 'var(--primary)' : 'var(--text)'

    if(scroll > 500){
        localStorage.setItem('scroll', '500')
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', color, 'important');
        }
    } else{
        localStorage.setItem('scroll', '0')
        for (let i = 0; i < link.length; i++) {
            link[i].style.setProperty('color', 'var(--secondary)', 'important');
        }
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('dark-mode', darkMode)
    const root = document.documentElement
    darkMode ? firstTheme(root) : secondTheme(root)

    document.addEventListener('scroll', scrollOption)
    return () => {document.removeEventListener('scroll', scrollOption)}
  }, [darkMode])

  return (
    <header className="position-relative" id="home">
      <div id="background"></div>

      <section id="jumbotron" className="position-relative">
        <h2 data-id="jumbotron" className="m-0"></h2>
        <div className="position-fixed w-100 top-50 start-50 translate-middle">
          <div className="jumbo-content text-center d-flex align-items-center justify-content-center">
            <div
              className="my-name"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay="300"
            >
              <h1 className="m-0">Federico Fois</h1>
              <h2 className="m-0" data-id="jumbotron">
                  <ReactTyped 
                    strings={["Full Stack Developer", "Web Developer"]} 
                    typeSpeed={60}
                    backSpeed={30}
                    loop={true} 
                  />
              </h2>

              <div className="socials-jumbo">
                <ul className="mt-4 p-0 position-relative">
                  {social.map((s, index) => (
                    <li className="d-inline-block mx-1" key={index}>
                        <a
                        className="social m-0 rounded-circle align-center"
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        >
                        <i className={`fa-brands fa-${s.icon}`}></i>
                        </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="position-relative"
            >
              <img
                className="photo-jumbo rounded-circle object-fit-cover"
                alt=""
                src="/img/profile_jumbotron.jpg"
              />
              <span
                className="text-center p-2 dark-mode position-absolute top-0 end-0"
                title="change theme"
                onClick={() => setDarkMode(prev => !prev)}
              >
                <a title="cambia tema">
                  <i></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
