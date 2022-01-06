// Import des différents composants
import Header from "./components/Header";
import BillContainer from "./components/BillContainer";
import SelectTip from "./components/SelectTip";
import PeopleContainer from "./components/PeopleContainer";
import RecapContainer from "./components/RecapContainer";

function App() {
  return (
    <div>

      <header>
        <Header />
      </header>

      <main>
        <form className="container">
          <div className="general-input-container">
            <BillContainer />
            <SelectTip />
            <PeopleContainer />
          </div>
          <RecapContainer />
        </form>
      </main>

    </div>
  );
}

export default App;
