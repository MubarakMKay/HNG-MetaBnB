import ImageOne from "../Assets/SectionOneImageOne.png";
import ImageTwo from "../Assets/SectionOneImageTwo.png";
import ImageThree from "../Assets/SectionOneImageThree.png";
import ImageFour from "../Assets/SectionOneImageFour.png";

const SectionOne = () => {
    return ( 
        <div className="sectionOne">
            <div className="sectionOneText">
                <h1>Rent a <span>Place</span> away from<br /><span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses<br />in the metaverse, get a chance to turn your<br />imagination to reality at your comfort zone</p>
                <div className="sectionOneSearch">
                    <input type="text" name="" id="" placeholder="Search for location"/>
                    <input type="button" value="Search" />
                </div>
            </div>
            <div className="sectionOneImages">
                <img src={ImageOne} alt="NFT"/>
                <img src={ImageTwo} alt="NFT"/>
                <img src={ImageThree} alt="NFT"/>
                <img src={ImageFour} alt="NFT"/>
            </div>
        </div>
     );
}
 
export default SectionOne;