import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export default function PageLayout(props) {
  return (
    <>
      <Navbar />
      <div className="page-layout">{props.children}</div>
      <Footer />
    </>
  );
}
