import './App.css';
import {Honeypot} from "./components/campaign";
import {useEffect, useState} from "react";

function App() {
  const [campaigns, setCampaigns] = useState([])
  const ENDPOINT = process.env.REACT_APP_API_ENDPOINT
  useEffect(() => {
    const getCampaigns =  async () => {
      const response = await fetch(`${ENDPOINT}/campaigns`)
      const campaigns = await response.json()
      console.log(campaigns)
      setCampaigns(campaigns)
    }

    getCampaigns()
  }, [])


  return (
    <div className="App">
      <Honeypot campaigns={campaigns}/>
    </div>
  );
}

export default App;
