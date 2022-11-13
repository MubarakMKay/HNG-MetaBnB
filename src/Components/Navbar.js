import { Link } from "react-router-dom";
import NavbarMetaBnb from "../Assets/NavbarMetaBnb.png";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={ NavbarMetaBnb } alt="MetaBnb" />
            <div className="navbarButtons">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li><Link to={"/place"} >Place to stay</Link></li>
                        <li>NFTs</li>
                        <li>Community</li>
                    </ul>
                </nav>
                <Link to={"/connect"} ><input type="button" value="Connect wallet"/></Link> 
            </div>
        </div>
     );
}
 
export default Navbar;