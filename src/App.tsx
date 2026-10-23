
import Filter from "./components/filter";
import Kpi from "./components/kpi";
import Nav from "./components/nav";
import Tableau from "./components/tableau";
import ButtonPrimary from "./components/ui/buttonPrimary";
import Modal from "./components/modal";
import CreateForm from "./components/createForm";
import { useState } from "react";
import { categories, transaction, types } from "./data/data";
import type { Type } from "./types/type";

export default function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [transactions, setTransaction] = useState<Type[]>(transaction);
  const toggleModal = () => {
    setOpenModal((oldValue) => !oldValue);
  }

  return (
    <div className='max-w-[60%] mx-auto relative'>
      <Nav />
      <div className="flex items-center justify-between py-2 px-4">
        <div>
          <h3 className="font-bold text-xl">Mes finances</h3>
          <p className="text-xs">Gestion de budget personnel</p>
        </div>
        <div>
          <ButtonPrimary onClick={toggleModal}>+ Nouvelle transaction</ButtonPrimary>
        </div>
      </div>
      <div>
        {openModal &&
          <Modal >
            <CreateForm onClick={() => setOpenModal(false)} categories={categories} types={types} />
          </Modal>
        }
      </div>

      <div className="bg-gray-300 p-4">
        <Kpi />
        <Filter />
        <Tableau transactions={transactions} />
      </div>
    </div>
  )
}
