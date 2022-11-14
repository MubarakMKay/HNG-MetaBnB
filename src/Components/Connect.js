import "../Styles/Connect.css"
import WalletX from "../Assets/WalletX.png";
import WalletMetaMask from "../Assets/WalletMetaMask.png";
import WalletWalletConnect from "../Assets/WalletWalletConnect.png";
import WalletNext from "../Assets/WalletNext.png";

const Connect = () => {
    return ( 
        <div className="connect">
            <div className="connectHeader">
                <span>Connect Wallet</span>
                <img src={WalletX} alt="" />
            </div>
            <div className="connectMain">
                <span>Choose your preferred wallet:</span>
                <div>
                    <div>
                        <img src={WalletMetaMask} alt="" />
                        <span>Meta Mask</span>
                    </div>
                    <img src={WalletNext} alt="" />
                </div>
                <div>
                    <div>
                        <img src={WalletWalletConnect} alt="" />
                        <span>Wallet Connect</span>
                    </div>
                    <img src={WalletNext} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Connect;