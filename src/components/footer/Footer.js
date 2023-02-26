import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

function Footer() {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a
                            href="https://vk.com/poposhka1990"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><img src={vk} alt="VK link"
                        /></a>
                    </li>
                    <li className="social__item">
                        <a
                            href="https://www.instagram.com/poposhka1990/"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><img
                                src={instagram}
                                alt="Instagram link"
                        /></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"
                            ><img
                                src={twitter}
                                alt="Twitter link"
                        /></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"
                            ><img
                                src={gitHub}
                                alt="GitHub link"
                        /></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"
                            ><img
                                src={linkedIn}
                                alt="LinkedIn link"
                        /></a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Developer Portfolio</p>
                </div>
            </div>
        </div>
    </footer>
     );
}

export default Footer;