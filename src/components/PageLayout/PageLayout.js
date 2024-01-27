//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//Components
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
export default function PageLayout(props) {

  return (
    <div className="page-layout">
      <Navbar />
      <div className="page-layout__content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
