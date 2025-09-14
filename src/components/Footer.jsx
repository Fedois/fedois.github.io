function Footer(){
    return(
    <footer className="position-relative" style={{ marginTop: '-30px' }}>
        <div className="container d-flex justify-content-between align-items-center p-4">
            <div className="signature">
                <p className="m-0 footer-text">
                    &copy; 2023 Federico Fois
                </p>
            </div>

            <ul className="m-0 p-0 position-relative">
                <li className="d-inline-block">
                    <a className="footer-text social  rounded-circle text-center align-center" href="https://github.com/Fedois" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li className="d-inline-block">
                    <a className="footer-text social  rounded-circle text-center align-center" href="https://www.instagram.com/fedois_/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li className="d-inline-block">
                    <a className="footer-text social  rounded-circle text-center align-center" href="https://www.linkedin.com/in/federicofois" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer