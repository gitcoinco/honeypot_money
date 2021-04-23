import {CampaignOverview} from "./campaign";

export function Campaigns({campaigns, isDaytime, setActiveCampaign, activeCampaign}) {
    if (!campaigns.length) {
        return ( <div id="campaign" className={`status ${isDaytime ? "day" : "night"}-mode`}>
            <div className="info">
                <p id="status" style={{color: isDaytime ? "var(--day-orange)" : "var(--night-yellow)"}}>
                    No Active Campaign <br/>
                    Check back later in 7 Days
                </p>
            </div>
        </div>)
    }

    return campaigns.map(campaign => <CampaignOverview details={campaign}
                                               isDaytime={isDaytime}
                                               setActiveCampaign={setActiveCampaign}
                                               showCampaign={false} />)
}