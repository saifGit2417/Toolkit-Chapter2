import logger from "redux-logger";
import "./App.css";
import AcountComponents from "./components/AcountComponents";
import BonusComponent from "./components/BonusComponent";
import { useSelector } from 'react-redux'

function App() {

  const initialAmount = useSelector(state => state.account.amount)
  const initialBonus = useSelector(state => state.bonus.points)
  const acount = useSelector(state => console.log(state))



  return (
    <div className="App">
      {/* tried to learn toolkit but couldnt understand a single word */}
      {/* making commit to maintain sreal */}
      <div style={{ width: "70vw", height: "33vh", border: "2px solid black", marginLeft: "15vw" }}>
        {/* {acount.pending ? <p>....loading</p> : <h1>Current Amout :{initialAmount} </h1>} */}
        <h1>Current Amout :{initialAmount} </h1>
        <h1>Total Bonus :{initialBonus}</h1>
      </div>
      <div style={{ width: "70vw", height: "33vh", border: "2px solid black", marginLeft: "15vw" }}>
        <AcountComponents />
      </div>
      <div style={{ width: "70vw", height: "33vh", border: "2px solid black", marginLeft: "15vw" }}>
        <BonusComponent />
      </div>
    </div>
  );
}

export default App;
