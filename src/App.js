import "./App.css";
import AcountComponents from "./components/AcountComponents";
import BonusComponent from "./components/BonusComponent";
import { store } from 'redux'
import { useSelector } from 'react-redux'

function App() {

  const initialAmount = useSelector(state => state.account.amount)
  const initialBonus = useSelector(state => state.bonus.points)

  return (
    <div className="App">
      <div style={{ width: "70vw",height:"33vh", border: "2px solid black",marginLeft:"15vw" }}>
        <h1>Current Amout :{initialAmount} </h1>
        <h1>Total Bonus :{initialBonus}</h1>
      </div>
      <div style={{ width: "70vw",height:"33vh", border: "2px solid black",marginLeft:"15vw" }}>
        <AcountComponents />
      </div>
      <div style={{ width: "70vw",height:"33vh", border: "2px solid black",marginLeft:"15vw" }}>
        <BonusComponent />
      </div>
    </div>
  );
}

export default App;
