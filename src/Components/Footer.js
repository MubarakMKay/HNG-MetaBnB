import FooterMetaBnb from "../Assets/FooterMetaBnb.svg";
import FooterFacebook from "../Assets/FooterFacebook.png";
import FooterInsta from "../Assets/FooterInsta.png";
import FooterTwitter from "../Assets/FooterTwitter.png";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerNav">
                <div className="nav">
                    <span>Community</span>
                    <nav>
                        <ul>
                            <li>NFTs</li>
                            <li>Tokens</li>
                            <li>Landlords</li>
                            <li>Discord</li>
                        </ul>
                    </nav>
                </div>
                <div className="nav">
                    <span>Places</span>
                    <nav>
                        <ul>
                            <li>Castle</li>
                            <li>Farms</li>
                            <li>Beach</li>
                            <li>Learn more</li>
                        </ul>
                    </nav>
                </div>
                <div className="nav">
                    <span>About us</span>
                    <nav>
                        <ul>
                            <li>Road map</li>
                            <li>Creators</li>
                            <li>Career</li>
                            <li>Contact us</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="footerOthers">
                <img src={FooterMetaBnb} alt="MetaBnb" />
                <div className="footerSocials">
                    <img src={ FooterFacebook } alt="Facebook" />
                    <img src={ FooterInsta } alt="Instagram" />
                    <img src={ FooterTwitter } alt="Twitter" />
                </div>
                <span>&copy; 2022 </span>
            </div>
        </div>
     );
}
 
export default Footer;