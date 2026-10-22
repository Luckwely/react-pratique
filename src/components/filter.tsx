import ButtonPrimary from "./ui/buttonPrimary";


export default function Filter() {
  return (
    <div className="bg-white rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center  border-b border-gray-200 pb-2">
            <div className="w-full">
                <input type="text" className=" w-[50%] px-3 py-1 border rounded-lg" placeholder="Rechercher une transaction" />
            </div>
            <div className="flex gap-3 items-center">
                <select name="" id="">
                    <option value="">Depense</option>
                </select>
                <select name="" id="">
                    <option value="">Loyer</option>
                </select>
                <button>Reinitialiser</button>
            </div>
        </div>
        <div className="flex gap-3 bg-white py-2">
            <p>filter actifs: </p>
            <span>type: depense</span>
            <span>categorie: loyer</span>
            <span>periode: ce mois</span>
        </div>
    </div>
  )
}
