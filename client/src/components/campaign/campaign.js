export function CampaignOverview({details, isDaytime, showCampaign, setActiveCampaign}) {
    const expandCampaign = () => {
        setActiveCampaign(details)
    }

    return (
        <div id="campaign" className={`module ${isDaytime ? "day" : "night"}-mode ${showCampaign ? "expand" : "collapse"} `}>

            <div className="info" onClick={expandCampaign}>
                <div id="campaignHead">
                    <h1>{details.amount} <span>{details.token}</span></h1>
                    <div id="brightId" className={`brightId-${isDaytime ? "black" : "white"}`} />
                </div>
                <div id="campaignDesc" className={ `${isDaytime ? "day" : "night"}-campaign`}>
                    <p>{details.desc}</p>
                </div>
            </div>
        </div>)
}


export function Campaign({details, isDaytime, showCampaign, setActiveCampaign, nextStep = () => {}}) {
    const expandCampaign = () => {
        setActiveCampaign(false)
    }

    return (
        <div id="campaign" className={`module ${isDaytime ? "day" : "night"}-mode ${showCampaign ? "expand" : "collapse"} `}>

            <div className="info" onClick={expandCampaign}>
                <div id="campaignHead">
                    <h1>{details.amount} <span>{details.token}</span></h1>
                    <div id="brightId" className={`brightId-${isDaytime ? "black" : "white"}`} />
                </div>
                <div id="honeyPot" className={`${showCampaign ? "" : "hidden"} honeypot-${isDaytime ? "day" : "night"}`} />
                <div id="campaignDesc" className={ `${isDaytime ? "day" : "night"}-campaign`}>
                    <p>{details.desc}</p>
                </div>
                <div id="btnPickUp" className={`${showCampaign ? "" : "hidden"}`}  onClick={(e) => {
                    e.stopPropagation()
                    nextStep()
                }} />
            </div>
        </div>)
}
