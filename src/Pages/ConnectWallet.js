import "../Styles/ConnectWallet.css"
import Navbar from "../Components/Navbar";
import SectionOne from "../Components/SectionOne";
import SectionThree from "../Components/SectionThree";
import SectionTwo from "../Components/SectionTwo";
import Connect from "../Components/Connect";

const ConnectWallet = () => {
    return ( 
        <div className="connectWallet">
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Connect />
        </div>
     );
}
 
export default ConnectWallet;