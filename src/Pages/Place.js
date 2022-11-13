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

const Place = () => {
    return ( 
        <div className="place">
            <Navbar />
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
                <div className="placeLocation">
                    <span>Location</span>
                    <img src={PlaceLocation} alt="" />
                </div>
            </div>
            <div className="placeNFTs">
                <NFT imagee={NFTOne} />
                <NFT imagee={NFTTwo} />
                <NFT imagee={NFTThree} />
                <NFT imagee={NFTFour} />
                <NFT imagee={NFTFive} />
                <NFT imagee={NFTSix} />
                <NFT imagee={NFTSeven} />
                <NFT imagee={NFTEight} />
                <NFT imagee={NFTNine} />
                <NFT imagee={NFTTen} />
                <NFT imagee={NFTEleven} />
                <NFT imagee={NFTTwelve} />
                <NFT imagee={NFTThirteen} />
                <NFT imagee={NFTFourteen} />
                <NFT imagee={NFTFifteen} />
                <NFT imagee={NFTSixteen} />
            </div>
            <Footer />
        </div>
     );
}
 
export default Place;