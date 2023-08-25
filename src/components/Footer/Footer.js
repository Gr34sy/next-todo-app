import { Logo } from "../Logo/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser} from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <Logo />
        <h2 className="copyright__header">
          Copyright by Peter Slupski 2023 &copy;
        </h2>
      </div>

      <div className="footer__links">
        <Link href="https://heroic-quokka-3e69bf.netlify.app">
          <p className="footer__link">
            <FontAwesomeIcon icon={faUser} className="footer__icon"/>
            Check my profile page
          </p>
        </Link>

        <Link href="https://github.com/Gr34sy">
          <p className="footer__link">
            <FontAwesomeIcon icon={faGithub} className="footer__icon"/>
            Check my Github
          </p>
        </Link>

        <Link href="https://linkedin.com/in/piotr-słupski-greasy17">
          <p className="footer__link">
            <FontAwesomeIcon icon={faLinkedin} className="footer__icon"/>
            Check my LinkedIn
          </p>
        </Link>
      </div>
    </footer>
  );
}
