import { useEffect, useState } from "react";

function NavBar(){
    const links = [
        { title: "home", href: "jumbotron", icon: "fa-solid fa-house" },
        { title: "su di me", href: "about-me", icon: "fa-solid fa-user" },
        { title: "skills", href: "skills", icon: "fa-solid fa-laptop-code" },
        { title: "progetti", href: "projects", icon: "fa-regular fa-folder-open" },
        { title: "contatti", href: "contact-me", icon: "fa-regular fa-paper-plane" },
    ];
    const [activeLink, setActiveLink] = useState(links[0].href)

    useEffect(()=> {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.attributes['data-id'].nodeValue)
                }
                });
            },
            { threshold: 1 }
        );
        document.querySelectorAll('section h2').forEach(section => observer.observe(section));
    }, [])

    return(
        <div className="header-links rounded-5">
        <div className="h-100 w-100">
            <nav className="navigation" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="-10"  data-aos-delay="700">
                <ul className="m-0 p-0 d-flex justify-content-center align-items-center">
                    {links.map((link, index) => (
                        <li key={index} className="text-center p-2">
                            <a title={link.title} className={`link-page ${link.href === activeLink ? 'active' : ''}`} href={`#${link.href}`}>
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