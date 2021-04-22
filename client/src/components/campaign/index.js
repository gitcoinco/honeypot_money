import {useState} from "react";
import './style.css'
import logo from '../../assets/logo.svg'
import {pickRandomEntry} from "../../utils/scenario";
import {
    leftFlower, leftFungi,
    leftGrass,
    leftInsect, leftNightGrass,
    leftPlant, leftShroom,
    rightFlower, rightFungi, rightGrass,
    rightInsect, rightNightGrass,
    rightPlant, rightShroom
} from "../../consts/scenario";
import {Campaigns} from "./campaigns";
import {CAMPAIGN_VIEW, CONNECT_VIEW, DEFAULT_VIEW, LIST_VIEW} from "../../consts/views";
import {Campaign} from "./campaign";
import {Web3Connector} from "../connector/web3";

const getGraphicsClasses = (campaigns, isDaytime, view) => {
    if (view === CONNECT_VIEW) return `connect-${isDaytime ? "morning" : "night"}`

    return `${!campaigns.length ? "campaign-none-" : ""}${isDaytime ? "morning" : "night"}`
}


export function Honeypot({campaigns}) {
    const [activeCampaign, setActiveCampaign] = useState(false)
    const [isDaytime, setIsDaytime] = useState(true)
    const [currentView, setCurrentView] = useState(DEFAULT_VIEW)

    let hour = new Date().getHours()
    let timeOfDay = hour >= 6 && hour <= 18

    if (timeOfDay !== isDaytime) setIsDaytime(timeOfDay)


    let randomLeftFlower = pickRandomEntry(leftFlower)
    let randomRightFlower = pickRandomEntry(rightFlower);
    let randomLeftInsect = pickRandomEntry(leftInsect);
    let randomRightInsect = pickRandomEntry(rightInsect);
    let randomLeftPlant = pickRandomEntry(leftPlant)
    let randomRightPlant = pickRandomEntry(rightPlant)
    let randomLeftGrass = pickRandomEntry(leftGrass)
    let randomRightGrass = pickRandomEntry(rightGrass)
    let randomLeftShroom = pickRandomEntry(leftShroom)
    let randomRightShroom = pickRandomEntry(rightShroom)
    let randomLeftFungi = pickRandomEntry(leftFungi)
    let randomRightFungi = pickRandomEntry(rightFungi)
    let randomLeftNightGrass = pickRandomEntry(leftNightGrass)
    let randomRightNightGrass = pickRandomEntry(rightNightGrass)

    const setCampaign = (mode) => (campaign) => {
        setActiveCampaign(campaign)
        setCurrentView(mode)
    }

    return (<div className="container">
        <div className="logo">
            <img src={logo} alt="HoneyPot.Money" />
        </div>

        <div id="graphic" className={getGraphicsClasses(campaigns, isDaytime, currentView)}>
            <h2>Campaign</h2>
            <div id="leftFlower" className={`foreground ${isDaytime ? randomLeftFlower : randomLeftShroom}`} />
            <div id="rightFlower" className={`foreground ${isDaytime ? randomRightFlower : randomRightShroom}`} />
            <div id="leftInsect" className={`foreground ${randomLeftInsect}`} />
            <div id="rightInsect" className={`foreground ${randomRightInsect}`} />
            <div id="leftPlant" className={`foreground ${isDaytime ? randomLeftPlant : randomLeftFungi}`} />
            <div id="rightPlant" className={`foreground ${isDaytime ? randomRightPlant : randomRightFungi}`} />
            <div id="leftGrass" className={`foreground ${isDaytime ? randomLeftGrass : randomLeftNightGrass}`} />
            <div id="rightGrass" className={`foreground ${isDaytime ? randomRightGrass : randomRightNightGrass}`} />

            { currentView === LIST_VIEW && <Campaigns campaigns={campaigns} isDaytime={isDaytime} setActiveCampaign={setCampaign(CAMPAIGN_VIEW)} /> }
            { currentView === CAMPAIGN_VIEW && <Campaign details={activeCampaign}
                                                         isDaytime={isDaytime}
                                                         setActiveCampaign={setCampaign(LIST_VIEW)}
                                                         nextStep={() => setCurrentView(CONNECT_VIEW)}
                                                         showCampaign={true} /> }
            { currentView === CONNECT_VIEW && <Web3Connector details={activeCampaign}
                                                             isDaytime={isDaytime}
                                                             setActiveCampaign={setCampaign(LIST_VIEW)}
                                                             showCampaign={true} /> }
        </div>

        <div className="nav">
            <div id="btnBack" className={`${currentView !== LIST_VIEW && activeCampaign ? "" : "invisible" }  back-${isDaytime ? "day" : "night"}`} onClick={setCampaign(LIST_VIEW)} />
            <div id="btnHelp" className={`help-${isDaytime ? "day" : "night"}`} />
        </div>
    </div>)
}