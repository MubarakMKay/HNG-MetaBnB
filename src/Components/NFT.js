import "../Styles/NFT.css"
import NFTStar from "../Assets/NFTStar.png";

const NFT = (props) => {

    let shade = props.showConnect ? "none" : ""

    const styles = {
        background: shade
    }

    return ( 
        <div className="nft" style={styles}>
            <img src={props.imagee} alt="NFT" />
            <div className="nftTop">
                <span>Desert king</span>
                <span>1MBT per night</span>
            </div>
            <div className="nftMiddle">
                <span>2345km away</span>
                <span>available for 2weeks stay</span>
            </div>
            <div className="nftBottom">
                <img src={NFTStar} alt="Star" />
                <img src={NFTStar} alt="Star" />
                <img src={NFTStar} alt="Star" />
                <img src={NFTStar} alt="Star" />
                <img src={NFTStar} alt="Star" />
            </div>
        </div>
     );
}
 
export default NFT;