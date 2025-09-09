function Contacts(){
    const footerLinks = [
        { title: "Home", href: "#jumbotron" },
        { title: "Su di me", href: "#about-me" },
        { title: "Skills", href: "#skills" },
        { title: "Progetti", href: "#projects" }
    ];

    return(
        <section id="contact-me" className="position-relative">
            <h2 className="text-center mb-4" data-aos="fade-up" data-aos-duration="1000" data-id="contact-me">CONTATTI</h2>

            <div className="text-center pb-5">
                <div className="border-color bg-card rounded-5 d-inline-block p-3" data-aos="fade-up" data-aos-duration="1000">
                    <p className="d-inline-block me-3 mb-0"><a href="mailto:fedefox14@gmail.com" target="_blank" className="footer-link"><i className="fa-solid fa-envelope pe-1"></i> Fedefox14@gmail.com</a></p>
                    <p className="d-inline-block mb-0"><a href="https://www.linkedin.com/in/federicofois" target="_blank" className="footer-link"><i className="fa-brands fa-linkedin pe-1"></i> Linkedin</a></p>
                </div>
            </div>

            <ul className="m-0 p-0 text-center mt-5" data-aos="fade-up" data-aos-duration="1000">
            {footerLinks.map((link, index) => (
                <li key={index} className="d-inline-block mx-4 mb-4">
                <a className="footer-link text-uppercase" href={link.href}>
                    {link.title}
                </a>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default Contacts