import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export default function Layout(props){
    return (
        <>
            <Navbar />
            <div className="layout">
                {props.children}
            </div>
            <Footer />
        </>
    )
}