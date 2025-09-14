function Skills(){
    const frontend = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "SASS", icon: "devicon-sass-original colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "jQuery", icon: "devicon-jquery-plain colored" },
    { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
    { name: "React JS", icon: "devicon-react-plain colored" }
    ]
    const backend = [
    { name: "Ruby", icon: "devicon-ruby-plain colored" },
    { name: "Ruby on Rails", icon: "devicon-rails-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Laravel", icon: "devicon-laravel-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Django", icon: "devicon-django-plain colored", style: "color: green" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "MySQL/MariaDB", icon: "devicon-mysql-plain colored" }
    ]
    const tools =  [
    { name: "VSCode", icon: "devicon-vscode-plain colored" },
    { name: "Jetbrains", icon: "/img/icon_jetbrains.png", "type": "img" },
    { name: "Neovim", icon: "devicon-neovim-plain colored" },
    { name: "MAMP", icon: "/img/icon_mamp.png", "type": "img" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "GitLab", icon: "devicon-gitlab-plain colored" },
    { name: "Ubuntu", icon: "devicon-ubuntu-plain colored" },
    { name: "Microsoft", icon: "/img/icon_microsoft.png", "type": "img" }
    ]

    return(
         <section id="skills" className=" reveal">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-center mb-3" data-id="skills">SKILLS</h2>

            <div className="container">
                <div className="my-clouds content-tech">
                    <div className="w-50 p-3 text-center" data-aos="fade-up" data-aos-duration="500">
                        <div className="rounded-4 border-color bg-card change-border py-3" >
                            <h3><i className="fa-solid fa-code"></i></h3>
                            <h4>Front-end</h4>
                            <div className="list-languages">
                                <div className="container">
                                    <div className="row row-cols-2">
                                    {frontend.map((data, index) => (
                                      <div className="col" key={index}>
                                            <div className="py-3"> <strong>{data.name}</strong> <em className="d-block text-secondary"><i className={data.icon+' devicon'}></i></em></div>
                                      </div>
                                    ))}
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-50 p-3 text-center" data-aos="fade-up" data-aos-duration="1000" >
                        <div className="rounded-4 border-color bg-card change-border py-3">
                            <h3><i className="fa-solid fa-database"></i></h3>
                            <h4>Back-end</h4>
                            <div className="list-languages">
                                <div className="container">
                                    <div className="row row-cols-2">
                                    {backend.map((data, index) => (
                                      <div className="col" key={index}>
                                            <div className="py-3"> <strong>{data.name}</strong> <em className="d-block text-secondary"><i className={data.icon+' devicon'}></i></em></div>
                                      </div>
                                    ))}
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 p-3 text-center" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="rounded-4 border-color bg-card change-border py-3">
                        <h3><i className="fa-solid fa-laptop"></i></h3>
                        <h4>Tools</h4>
                        <div className="list-languages">
                            <div className="container text-center">
                                <div className="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-4">
                                    {tools.map((data, index) => (
                                      <div className="col" key={index}>
                                            <div className="py-3"> <strong>{data.name}</strong> 
                                                <em className="d-block text-secondary">
                                                    {data.icon.includes('img') ? (
                                                        <img className="devicon-img" src={data.icon}></img>
                                                    ) : <i className={data.icon+' devicon'}></i>}
                                                </em>
                                            </div>
                                      </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills