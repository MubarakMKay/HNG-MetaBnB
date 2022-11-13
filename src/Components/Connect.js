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
            <hr />
            <div className="connectMain">
                <span>Choose your preferred wallet:</span>
                <div>
                    <img src={WalletMetaMask} alt="" />
                    <span>Meta Mask</span>
                    <img src={WalletNext} alt="" />
                </div>
                <div>
                    <img src={WalletWalletConnect} alt="" />
                    <span>Wallet Connect</span>
                    <img src={WalletNext} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Connect;