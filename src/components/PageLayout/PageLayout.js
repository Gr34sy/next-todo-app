import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useSession } from "next-auth/react";

export default function PageLayout(props) {
  const { data: session } = useSession();
  console.log(session);
  
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
