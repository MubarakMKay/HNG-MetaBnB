import NFT from "./NFT";
import NFTOne from "../Assets/NFTOne.png";
import NFTTwo from "../Assets/NFTTwo.png";
import NFTThree from "../Assets/NFTThree.png";
import NFTFour from "../Assets/NFTFour.png";
import NFTFive from "../Assets/NFTFive.png";
import NFTSix from "../Assets/NFTSix.png";
import NFTSeven from "../Assets/NFTSeven.png";
import NFTEight from "../Assets/NFTEight.png";

const SectionThree = () => {
    return ( 
        <div className="sectionThree">
            <h1>Inspiration for your next adventure</h1>
            <div className="sectionThreeNFTs">
                <NFT imagee={NFTFive} />
                <NFT imagee={NFTSix} />
                <NFT imagee={NFTSeven} />
                <NFT imagee={NFTEight} />
                <NFT imagee={NFTOne} />
                <NFT imagee={NFTTwo} />
                <NFT imagee={NFTThree} />
                <NFT imagee={NFTFour} />
            </div>
        </div>
     );
}
 
export default SectionThree;