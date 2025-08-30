import { useEffect } from "react";

function Header() {
    const social = [
        {icon: 'github', url: 'https://github.com/Fedois'},
        {icon: 'instagram', url: 'https://www.instagram.com/fedois_/'},
        {icon: 'linkedin-in', url: 'https://www.linkedin.com/in/federicofois'},
    ]

  useEffect(() => {
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.isDeleting = false;
      this.tick();
    };

    TxtType.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let delta = 200 - Math.random() * 100;
      if (this.isDeleting) delta /= 2;

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => this.tick(), delta);
    };

    const elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);

    return () => {
      if (css && css.parentNode) css.parentNode.removeChild(css);
    };
  }, []);

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
                <span
                  className="typewrite"
                  data-period="2000"
                  data-type='["Full Stack", "Web"]'
                >
                  <span className="wrap"></span>
                </span>{" "}
                Developer
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
                src="../../public/profile_jumbotron.jpg"
              />
              <span
                className="text-center p-2 dark-mode position-absolute top-0 end-0"
                title="change theme"
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
