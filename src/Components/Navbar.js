import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
import NavbarMetaBnb from "../Assets/NavbarMetaBnb.png";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to={"/"}><img src={ NavbarMetaBnb } alt="MetaBnb" /></Link>
            <div className="navbarButtons">
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/place"} >Place to stay</Link></li>
                        <li>NFTs</li>
                        <li>Community</li>
                    </ul>
                </nav>
                <Link to={"/connectWallet"} ><input type="button" value="Connect wallet"/></Link> 
            </div>
        </div>
     );
}
 
export default Navbar;