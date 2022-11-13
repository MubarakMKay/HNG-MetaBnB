import SectionFourImage from "../Assets/SectionFourImage.png";

const SectionFour = () => {
    return ( 
        <div className="sectionFour">
            <div className="sectionFourText">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal<br />customers gets amazing gift cards which are<br />traded as NFTs. These NFTs gives our cutomer<br />access to loads of our exclusive services.</p>
                <input type="button" value="Learn more" />
            </div>
            <div className="sectionFourImage">
                <img src={SectionFourImage} alt="NFTs" />
            </div>
        </div>
     );
}
 
export default SectionFour;