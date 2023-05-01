import logger from "redux-logger";
import "./App.css";
import AcountComponents from "./components/AcountComponents";
import BonusComponent from "./components/BonusComponent";
import { useSelector } from "react-redux";
import Reward from "./components/Reward";
import Admin from "./components/Admin";
function App() {

  const initialAmount = useSelector(state => state.acount.amount)
  const initialPoints = useSelector(state => state.bonus.points)

  return (
    <div className="App" style={{ width: "100%" }}>
      {/* Chapter 3 has been completed */}
      {/* chapter 4 starts from 4:03 hr */}
      {/* chapter 4 completed  */}
      <div style={{ width: "auto", height: "auto", border: "2px solid black", }}>
        <h1>Current Amount:{initialAmount} </h1>
        <h1>Total Bonus:{initialPoints} </h1>
      </div>
      <div style={{ width: "auto", height: "auto", border: "2px solid black", }}>
        <AcountComponents />
      </div>
      <div style={{ width: "auto", height: "auto", border: "2px solid black", }}>
        <BonusComponent />
      </div>
      <div style={{ width: "auto", height: "auto", border: "2px solid black", }}>
        <Reward />
      </div>
      <div style={{ width: "auto", height: "auto", border: "2px solid black", }}>
        <Admin />
      </div>
      {/* <Reward />
      <Admin /> */}
    </div>
  );
}

export default App;
