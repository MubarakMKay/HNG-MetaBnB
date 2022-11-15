import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
import NavbarMetaBnb from "../Assets/NavbarMetaBnb.png";

const Navbar = (props) => {
    return ( 
        <div className="navbar">
            <Link to={"/"} onClick={props.handleExit}><img src={ NavbarMetaBnb } alt="MetaBnb" /></Link>
            <div className="navbarButtons">
                <nav className="navbarButtonsLarge">
                    <ul>
                        <li onClick={props.handleExit}><Link to={"/"}>Home</Link></li>
                        <li onClick={props.handleExit}><Link to={"/place"} >Place to stay</Link></li>
                        <li>NFTs</li>
                        <li>Community</li>
                    </ul>
                </nav>
                <nav className="navbarButtonsSmall">
                    <span>&#9776;</span>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/place"} >Place to stay</Link></li>
                        <li>NFTs</li>
                        <li>Community</li>
                    </ul>
                </nav>
                <input type="button" value="Connect wallet" onClick={props.handleClick}/>
            </div>
        </div>
     );
}
 
export default Navbar;