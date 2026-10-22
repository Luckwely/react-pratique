import { TiTimes } from "react-icons/ti";
import ButtonPrimary from "./ui/buttonPrimary";
import { FaSearch } from "react-icons/fa";


export default function Filter() {
  return (
    <div className="bg-white rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center  border-b border-gray-200 pb-2">
            <div className="w-full relative">
                <input type="text" className=" w-[50%] pl-7 py-1 border border-gray-200 outline-none rounded-lg" placeholder="Rechercher une transaction" />
                <i className="absolute top-2.5 left-2"><FaSearch/></i>
            </div>
            <div className="flex gap-3 items-center">
                <select name="" id="" className="p-2 border border-gray-200 rounded-lg">
                    <option value="">Depense</option>
                </select>
                <select name="" id="" className="p-2 border border-gray-200 rounded-lg">
                    <option value="">Loyer</option>
                </select>
                <button className="p-2 border border-gray-200 rounded-lg">Reinitialiser</button>
            </div>
        </div>
        <div className="flex gap-3 bg-white py-2">
            <p>filter actifs: </p>
            <div className="flex gap-1 items-center bg-violet-200 text-violet-600 rounded-full px-2 py-1">
                <p>Type: Depense</p>
                <button><TiTimes /></button>
            </div>
            <div className="flex gap-1 items-center bg-violet-200 text-violet-600 rounded-full px-2 py-1">
                <p>Categorie: loyer</p>
                <button><TiTimes /></button>
            </div>
            <div className="flex gap-1 items-center bg-violet-200 text-violet-600 rounded-full px-2 py-1">
                <p>Periode: ce mois</p>
                <button><TiTimes /></button>
            </div>
        </div>
    </div>
  )
}
