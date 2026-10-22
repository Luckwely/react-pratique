

export default function Kpi() {
  return (
    <div className="grid grid-cols-3 gap-3 items-center">
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h3 className="text-xs font-bold text-gray-500">SOLD TOTAL</h3>
            <h1 className="text-xl font-bold mt-2">1 993. 50€</h1>
            <p className="text-xs">+12.4% ce mois</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h3 className="text-xs font-bold text-gray-500">REVENUS</h3>
            <h1 className="text-xl font-bold mt-2">28000€</h1>
            <p className="text-xs">ce mois-ci</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h3 className="text-xs font-bold text-gray-500">DEPENSE</h3>
            <h1 className="text-xl font-bold mt-2">806.500€</h1>
            <p className="text-xs">ce mois-ci</p>
        </div>
    </div>
  )
}
