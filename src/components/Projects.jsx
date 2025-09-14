function Projects(){
    const projects = [
    {
        title: "RubyCon Italy",
        link: "https://rubycon.it",
        image: "/img/rubycon.png",
        github: "https://github.com/Fedois/htmlcss-dropbox",
        description: `Ho contribuito alla realizzazione del sito ufficiale di RubyCon, la principale conferenza italiana dedicata alla community Ruby. 
    Il sito è stato sviluppato con Jekyll e include: design responsive realizzato con TailwindCSS, animazioni fluide tramite AOS (Animate on Scroll),
    sezioni dinamiche per speaker, programma ed eventi, integrazione di un form con Kit per la registrazione e la raccolta dei contatti.`,
        collapseId: "collapse0"
    },
    {
        title: "PersonalDiary",
        link: null,
        image: "/img/personaldiary.jpeg",
        github: "https://github.com/Fedois/htmlcss-dropbox",
        description: `Applicazione web responsive che offre agli utenti la possibilità di creare diari personali e di gestire elenchi di compiti. 
    Per la sua realizzazione ho utilizzato Django, un framework di sviluppo web basato su Python, insieme a JavaScript. 
    L'applicazione include un sistema di autenticazione per garantire la sicurezza degli utenti e utilizza FETCH per interagire 
    con il server per il recupero e la modifica dei dati.`,
        collapseId: "collapse6"
    },
    {
        title: "Booking",
        link: null,
        image: "/img/boolbnb.png",
        github: "https://github.com/Chiaravalle04/boolbnb_be",
        description: `Replica di un sistema di prenotazione con la collaborazione di un team, con l'obiettivo di creare
    una piattaforma web che consente agli utenti di prenotare servizi o risorse in modo efficiente e intuitivo.
    La parte backend è stata sviluppata utilizzando Laravel, un framework PHP robusto e flessibile, mentre la parte
    frontend è stata realizzata con Vue.js, framework JavaScript progressivo.`,
        collapseId: "collapse2"
    },
    {
        title: "Phlox",
        link: null,
        image: "/img/agency.png",
        github: "https://github.com/Fedois/proj-html-vuejs",
        description: `Creazione di un sito web di una azienda, utilizzando un insieme di tecnologie web tra cui HTML5, CSS3, JavaScript, Sass, Vue.js e Vite.js. 
    Durante il progetto, ho creato un sito web con un design moderno e accattivante, caratterizzato da una navigazione intuitiva e facile da usare. 
    Inoltre, ho utilizzato Vue.js e Vite.js per garantire una rapida velocità di caricamento della pagina e una migliore esperienza utente.`,
        collapseId: "collapse1"
    },
    {
        title: "Netflix",
        link: null,
        image: "/img/boolflix.png",
        github: "https://github.com/Fedois/vite-boolflix",
        description: `Creazione di una piattaforma di streaming video simile a Netflix, concentrandoci sull'utilizzo di chiamate Axios per recuperare i dati dei film e serie-tv dal server remoto. 
    Ho utilizzato tecnologie come HTML5, CSS3, JavaScript, Axios, Vue.js e Node.js per creare una piattaforma reattiva, scalabile e sicura.`,
        collapseId: "collapse3"
    }
    ];


    return (
        <section id="projects" className="reveal">
                <h2 data-aos="fade-up" data-aos-duration="1000" className="text-center mb-5" data-id="projects">PROGETTI</h2>

                <div className="container">
                    <div className="row g-3 row-cols-1 row-cols-lg-2 justify-content-center">
                        {projects.map((project, index) => (
                        <div className="col mb-2 p-3 text-center" data-aos="fade-up" data-aos-duration="1000" key={index}>
                            <div className="content-proj change-border border-color bg-card p-4 rounded-4"  >
                                <a href={project.link} target="_blank">
                                    <h3 className="mb-3 d-inline-block">{project.title}</h3>
                                    {project.link && <i className="fa-solid fa-arrow-up-right-from-square ms-3 fs-5"></i>}
                                </a>
                                <div className="img-proj rounded-4"> <img src={project.image}  className="h-100 w-100" alt="" /></div>
                                <div className="buttons-proj mt-4">
                                    <a className="d-inline-block mx-2 p-2 mini-git border-color bg-card" href={project.github}>Github <i style={{ fontSize: '15px' }} className="fa-brands fa-github"></i></a>
                                    <a className="d-inline-block mx-2 p-2 btn-description" data-bs-toggle="collapse" href={'#'+project.collapseId} role="button" aria-expanded="false" aria-controls="collapse">Descrizione <i style={{ fontSize: '10px' }} className="fa-solid fa-arrow-turn-down"></i></a>
                                </div>
                                <div className="collapse" id={project.collapseId}>
                                    <div className="card bg-transparent card-body border-0">
                                        <p className="m-0">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="git h-100 w-100 text-center mt-5">
                    <a href="https://github.com/Fedois?tab=repositories" target="_blank" className="border-color bg-card px-3 py-2">Tutti i progetti</a>
                </div>
            </section>
    )
}

export default Projects