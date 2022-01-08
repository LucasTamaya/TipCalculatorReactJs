// Import des différents composants
import Header from "./components/Header";
import BillContainer from "./components/BillContainer";
import SelectTip from "./components/SelectTip";
import PeopleContainer from "./components/PeopleContainer";
import RecapContainer from "./components/RecapContainer";
import { useEffect, useState } from "react";

function App() {

  // Récupération des inputs
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [nbPeople, setNbPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  console.log(`bill: ${bill}; tip: ${tip}; nbPeople: ${nbPeople}`)

  useEffect(() => {
    if (bill > 0 && tip > 0 && nbPeople > 0) {
      setTipAmount(parseFloat(bill * tip / 100 / nbPeople).toFixed(2));
      setTotalAmount(parseFloat((tipAmount * nbPeople + bill) / nbPeople).toFixed(2));

      console.log(`bill: ${bill}; tip: ${tip}; nbPeople: ${nbPeople}`)

      console.log("tip amount: ", tipAmount);
      console.log("total amount: ", totalAmount)
    }
    // else{
    //   console.log("1er rendu ou réinitialisation du formulaire")
    // }

  }, [bill, tip, nbPeople, tipAmount, totalAmount]);

  return (
    <div>

      <header>
        <Header />
      </header>

      <main>
        <form className="container">
          <div className="general-input-container">
            <BillContainer setBill={setBill} />
            <SelectTip setTip={setTip} />
            <PeopleContainer nbPeople={nbPeople} setNbPeople={setNbPeople} />
          </div>
          <RecapContainer setBill={setBill} setTip={setTip} setNbPeople={setNbPeople} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} tipAmount={tipAmount} totalAmount={totalAmount} />
        </form>
      </main>

    </div>
  );
}

export default App;
