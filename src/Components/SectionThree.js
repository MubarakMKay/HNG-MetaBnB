import "../Styles/SectionThree.css"
import NFT from "./NFT";
import NFTOne from "../Assets/NFTOne.png";
import NFTTwo from "../Assets/NFTTwo.png";
import NFTThree from "../Assets/NFTThree.png";
import NFTFour from "../Assets/NFTFour.png";
import NFTFive from "../Assets/NFTFive.png";
import NFTSix from "../Assets/NFTSix.png";
import NFTSeven from "../Assets/NFTSeven.png";
import NFTEight from "../Assets/NFTEight.png";

const SectionThree = (props) => {
    return ( 
        <div className="sectionThree">
            <h1>Inspiration for your next adventure</h1>
            <div className="sectionThreeNFTs">
                <NFT imagee={NFTFive} showConnect={props.showConnect}/>
                <NFT imagee={NFTSix} showConnect={props.showConnect}/>
                <NFT imagee={NFTSeven} showConnect={props.showConnect}/>
                <NFT imagee={NFTEight} showConnect={props.showConnect}/>
                <NFT imagee={NFTOne} showConnect={props.showConnect}/>
                <NFT imagee={NFTTwo} showConnect={props.showConnect}/>
                <NFT imagee={NFTThree} showConnect={props.showConnect}/>
                <NFT imagee={NFTFour} showConnect={props.showConnect}/>
            </div>
        </div>
     );
}
 
export default SectionThree;