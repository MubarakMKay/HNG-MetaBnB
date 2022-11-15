import Connect from "../Components/Connect";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SectionFour from "../Components/SectionFour";
import SectionOne from "../Components/SectionOne";
import SectionThree from "../Components/SectionThree";
import SectionTwo from "../Components/SectionTwo";
import "../Styles/Home.css"
import { useState } from "react";

const Home = () => {
    const [ showConnect, setShowConnect ] = useState(false)
    let shade = showConnect ? "rgba(64, 64, 64, 0.3)" : "#FFF"

    const styles = {
        backgroundColor: shade
    }

    function handleClick() {
        setShowConnect(true)
    }

    function handleExit() {
        setShowConnect(false)
    }

    return ( 
        <div className="home" style={styles}>
            <Connect showConnect={showConnect}/>
            <Navbar handleClick={handleClick} handleExit={handleExit}/>
            <SectionOne />
            <SectionTwo />
            <SectionThree showConnect={showConnect}/>
            <SectionFour />
            <Footer />
        </div>
     );
}
 
export default Home;