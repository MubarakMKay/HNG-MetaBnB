import MBToken from "../Assets/SectionTwoMBToken.svg";
import MetaMask from "../Assets/SectionTwoMetaMask.svg";
import OpenSea from "../Assets/SectionTwoOpenSea.svg";

const SectionTwo = () => {
    return ( 
        <div className="sectionTwo">
            <img src={MBToken} alt="MBToken" />
            <img src={MetaMask} alt="MetaMask" />
            <img src={OpenSea} alt="OpenSea" />
        </div>
     );
}
 
export default SectionTwo;