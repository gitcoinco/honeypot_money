import './App.css';
import {Honeypot} from "./components/campaign";

function App() {
   const campaigns = [{
       id: 1,
       token: 'ETH',
       amount: 0.1,
       desc: '+ For new BrightID verified users'

   }]

  return (
    <div className="App">
      <Honeypot campaigns={campaigns}/>
    </div>
  );
}

export default App;
