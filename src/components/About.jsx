import { useEffect, useState } from "react"

function About(){
    const [years, setYears] = useState(0)
    const experiences = [
        {title: 'Rubycon Italy', logo: 'job3.jpg', date: 'Luglio 2025 - Presente', role: 'Co-Fonder & Co-Organizer', href:'https://www.rubycon.it/'},
        {title: 'Wide Group', logo: 'job1.png', date: 'Aprile 2025 - Presente', role: 'Full Stack Developer', href: 'https://www.widegroup.eu/'},
        {title: 'Rubycon Italy', logo: 'job2.png', date: 'Maggio 2023 - Aprile 2025', role: 'Full Stack Developer', classes: 'bg-white', href: 'https://engim.eu/'},
    ]
    const educations = [
        {title: 'Università Pegaso', logo: 'edu1.jpg', date: 'Agosto 2025 - Presente', role: 'Laurea triennale in informatica', href: 'https://www.unipegaso.it/'},
        {title: 'CS50W', logo: 'edu3.png', date: 'Settembre 3 - Gennaio 2024', role: 'Corso Python Web Developer', classes: 'bg-white', href: 'https://cs50.harvard.edu/web/2020/'},
        {title: 'Boolean Careers', logo: 'edu2.png', date: 'Novembre 2022 - Maggio 2023', role: 'Master Full Stack Web Developer', href: 'https://boolean.careers/'},
    ]

    useEffect(()=> {
        const start_date = new Date('05/15/2023')
        const current_date = new Date()
        let calc_years = current_date.getFullYear() - start_date.getFullYear()
        let calc_months = current_date.getMonth() - start_date.getMonth()

        if (calc_months < 0){
            calc_years--
        }
        setYears(calc_years)
    }, [])

    const Card = (props) => (
        <div className="w-50 p-3 text-center">
            <p className="m-0 mb-1">
                <i className="fa-solid fa-briefcase"></i>
                <strong>{props.title}</strong>
            </p>
            <div id={'carousel'+props.title} className="carousel slide bg-card rounded-3 change-border border-color px-4 py-3">
                <div className="carousel-inner position-relative">
                    <i className="fa-solid fa-arrow-up-right-from-square position-absolute top-0 m-5" style={{opacity: "0"}}></i>
                    
                    {props.data.map((d, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : null}`} key={index}>
                        <a href={d.href} target="blank" className="d-block">
                            <h6>{d.title}</h6>
                            <img src={'../public/img/'+d.logo} className={`text-inline-block text-center rounded-2 ${d.classes || ''}`} alt="Wide Group"
                                style={{width: "70px", height: "70px", objectFit: "contain"}}/>
                            <div className="text-inline-block mt-2">
                                {d.date} <br/> {d.role}
                            </div>
                        </a>
                    </div>
                    ))}
                </div>

            <button className="carousel-control-prev" type="button" data-bs-target={'#carousel'+props.title} data-bs-slide="prev">
                <span className="fs-2" aria-hidden="true"><i className="fa-solid fa-angle-left"></i></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#carousel'+props.title} data-bs-slide="next">
                <span className="fs-2" aria-hidden="true"><i className="fa-solid fa-angle-right"></i></span>
            </button>
            </div>
        </div>
    )

    return(
        <section id="about-me" className="reveal">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-center mb-5" data-id="about-me">SU DI ME</h2>

            <div className="container d-flex align-items-center" >
                <div className="info-me">
                    <div className="mb-3 my-clouds my-experiences" data-aos="fade-up" data-aos-duration="1000" >
                        <Card title="Esperienze" data={experiences}/>
                        <Card title="Educazione" data={educations} />
                    </div>

                    <p className="fs-5" data-aos="fade-up" data-aos-duration="1000">
                        Ciao, sono Federico, sviluppatore full stack con
                        +{years} anni
                        di esperienza nella progettazione di applicazioni
                        web e sistemi backend. <br/><br/>Attualmente mi occupo
                        di sviluppo backend con Ruby e il framework Ruby on
                        Rails e React JS per il frontend. Mi sono occupato
                        dello sviluppo di microservizi basati su Node.js e
                        Python, e ho competenze anche in altri linguaggi e
                        framework come Vue.js e PHP.<br/><br/>Sono inoltre
                        co-founder e co-organizer di RubyCon Italia, la
                        principale conferenza italiana dedicata alla
                        community Ruby, per la quale ho contribuito allo
                        sviluppo e alla gestione di esso.<br/><br/> Sul mio
                        sito web puoi trovare una panoramica completa delle
                        mie competenze e una selezione dei progetti che ho
                        realizzato.
                    </p>
                </div>
            </div>

            <div className="curriculum mt-5 text-center">
                <a href="https://www.canva.com/design/DAGPon8A9gE/BWQr7n4Jc1fff_rsHoIK3Q/edit?utm_content=DAGPon8A9gE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="border-color bg-card px-3 py-2">
                    Download CV
                </a>
            </div>
        </section>
    )
}

export default About