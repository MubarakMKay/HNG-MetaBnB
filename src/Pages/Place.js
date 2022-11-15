import "../Styles/Place.css"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PlaceLocation from "../Assets/PlaceLocation.svg";
import NFTOne from "../Assets/NFTOne.png";
import NFTTwo from "../Assets/NFTTwo.png";
import NFTThree from "../Assets/NFTThree.png";
import NFTFour from "../Assets/NFTFour.png";
import NFTFive from "../Assets/NFTFive.png";
import NFTSix from "../Assets/NFTSix.png";
import NFTSeven from "../Assets/NFTSeven.png";
import NFTEight from "../Assets/NFTEight.png";
import NFTNine from "../Assets/NFTNine.png";
import NFTTen from "../Assets/NFTTen.png";
import NFTEleven from "../Assets/NFTEleven.png";
import NFTTwelve from "../Assets/NFTTwelve.png";
import NFTThirteen from "../Assets/NFTThirteen.png";
import NFTFourteen from "../Assets/NFTFourteen.png";
import NFTFifteen from "../Assets/NFTFifteen.png";
import NFTSixteen from "../Assets/NFTSixteen.png";
import NFT from "../Components/NFT";
import Connect from "../Components/Connect";
import { useState } from "react";

const Place = () => {
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
        <div className="place" style={styles}>
            <Connect showConnect={showConnect} handleExit={handleExit}/>
            <Navbar handleClick={handleClick} handleExit={handleExit}/>
            <div className="placeText">
                <nav>
                    <ul>
                        <li>Restaurant</li>
                        <li>College</li>
                        <li>Castle</li>
                        <li>fantasy city</li>
                        <li>Beach</li>
                        <li>Cabins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
                    </ul>
                </nav>
                <div className="placeLocation" style={{background: showConnect ? "none" : ""}}>
                    <span>Location</span>
                    <img src={PlaceLocation} alt="" />
                </div>
            </div>
            <div className="placeNFTs">
                <NFT imagee={NFTOne} showConnect={showConnect}/>
                <NFT imagee={NFTTwo} showConnect={showConnect}/>
                <NFT imagee={NFTThree} showConnect={showConnect}/>
                <NFT imagee={NFTFour} showConnect={showConnect}/>
                <NFT imagee={NFTFive} showConnect={showConnect}/>
                <NFT imagee={NFTSix} showConnect={showConnect}/>
                <NFT imagee={NFTSeven} showConnect={showConnect}/>
                <NFT imagee={NFTEight} showConnect={showConnect}/>
                <NFT imagee={NFTNine} showConnect={showConnect}/>
                <NFT imagee={NFTTen} showConnect={showConnect}/>
                <NFT imagee={NFTEleven} showConnect={showConnect}/>
                <NFT imagee={NFTTwelve} showConnect={showConnect}/>
                <NFT imagee={NFTThirteen} showConnect={showConnect}/>
                <NFT imagee={NFTFourteen} showConnect={showConnect}/>
                <NFT imagee={NFTFifteen} showConnect={showConnect}/>
                <NFT imagee={NFTSixteen} showConnect={showConnect}/>
            </div>
            <Footer />
        </div>
     );
}
 
export default Place;