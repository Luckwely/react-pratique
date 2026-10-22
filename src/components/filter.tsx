import ButtonPrimary from "./ui/buttonPrimary";


export default function Filter() {
  return (
    <div className="bg-white rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center  border-b border-gray-200 pb-2">
            <div className="w-full">
                <input type="text" className=" w-[50%] px-3 py-1 border border-gray-200 outline-none rounded-lg" placeholder="Rechercher une transaction" />
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
            <span className="py-1 px-3 text-sm bg-violet-200 text-violet-600 rounded-full">categorie: loyer</span>
            <span className="py-1 px-3 text-sm bg-violet-200 text-violet-600 rounded-full">type: depense</span>
            <span className="py-1 px-3 text-sm bg-violet-200 text-violet-600 rounded-full">periode: ce mois</span>
        </div>
    </div>
  )
}
