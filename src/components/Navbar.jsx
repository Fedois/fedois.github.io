import { useEffect } from "react";

function NavBar(){
    const links = [
        { title: "home", href: "jumbotron", icon: "fa-solid fa-house" },
        { title: "su di me", href: "about-me", icon: "fa-solid fa-user" },
        { title: "skills", href: "skills", icon: "fa-solid fa-laptop-code" },
        { title: "progetti", href: "projects", icon: "fa-regular fa-folder-open" },
        { title: "contatti", href: "contact-me", icon: "fa-regular fa-paper-plane" },
    ];

    useEffect(()=>{
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
    }, [])

    return(
        <div className="header-links rounded-5">
        <div className="h-100 w-100">
            <nav className="navigation" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="-10"  data-aos-delay="700">
                <ul className="m-0 p-0 d-flex justify-content-center align-items-center">
                    {links.map((link, index) => (
                        <li key={index} className="text-center p-2">
                            <a title={link.title} className="link-page" href={`#${link.href}`}>
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default NavBar