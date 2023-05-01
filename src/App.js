import logger from "redux-logger";
import "./App.css";
import AcountComponents from "./components/AcountComponents";
import BonusComponent from "./components/BonusComponent";
import { useSelector } from "react-redux";
import Reward from "./components/Reward";
function App() {

  const initialAmount = useSelector(state => state.acount.amount)
  const initialPoints = useSelector(state => state.bonus.points)

  return (
    <div className="App" style={{ width: "100%" }}>
     {/* Chapter 3 has been completed */}
      <div style={{ width: "70vw", height: "33vh", border: "2px solid black", marginLeft: "15vw" }}>
        <h1>Current Amount:{initialAmount} </h1>
        <h1>Total Bonus:{initialPoints} </h1>
      </div>
      <div style={{ width: "70vw", height: "33vh", border: "2px solid black", marginLeft: "15vw" }}>
        <AcountComponents />
      </div>
      <div style={{ width: "70vw", height: "33vh", border: "2px solid black", marginLeft: "15vw" }}>
        <BonusComponent />
      </div>
      <Reward/> 
    </div>
  );
}

export default App;
