import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SectionFour from "../Components/SectionFour";
import SectionOne from "../Components/SectionOne";
import SectionThree from "../Components/SectionThree";
import SectionTwo from "../Components/SectionTwo";
import "../Styles/Home.css"

const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </div>
     );
}
 
export default Home;