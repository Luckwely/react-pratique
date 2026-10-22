import Filter from "./components/filter";
import Kpi from "./components/kpi";
import Nav from "./components/nav";
import Tableau from "./components/tableau";
import ButtonPrimary from "./components/ui/buttonPrimary";

export default function App() {
  return (
    <div className='max-w-[60%] mx-auto'>
      <Nav />
      <div className="flex items-center justify-between py-2 px-4">
        <div>
          <h3>Mes finances</h3>
          <p>Gestion de budget personnel</p>
        </div>
        <div>
          <ButtonPrimary> + Nouvelle transaction</ButtonPrimary>
        </div>
      </div>
      <div className="bg-gray-300 p-4">
        <Kpi />
        <Filter />
        <Tableau />
      </div>
    </div>
  )
}
