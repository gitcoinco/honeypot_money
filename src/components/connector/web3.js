import {useState} from "react";
import Web3 from "web3";

export function Web3Connector({details, isDaytime, showCampaign, setActiveCampaign}) {
    const [address, setAddress] = useState('')
    const connectWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);

            await window.ethereum.enable()

            window.web3.eth.getAccounts(function (error, address) {
                if (!error) {
                   setAddress(address[0])
                }
            });
            return true;
        }
        return false;
    }


    return (
        <div id="campaign" className={`module ${isDaytime ? "day" : "night"}-mode ${showCampaign ? "expand" : "collapse"}-connect `}>
            <div className="info">
                <div id="campaignHead">
                    <h1>{details.amount} <span>{details.token}</span></h1>
                    <div id="brightId" className={`brightId-${isDaytime ? "black" : "white"}`} />
                </div>
                <div id="btnConnectWeb3" className={`${ !address ? "" : "hidden" }`} onClick={connectWeb3} />
                <div id="btnConnectBright" className={`${ address ? "" : "hidden" }`}/>
                <div id="progressBar">
                    <div id="progress" />
                </div>
            </div>
        </div>)
}
