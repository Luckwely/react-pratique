

export default function Kpi() {
  return (
    <div className="grid grid-cols-3 gap-3 items-center">
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h3>SOLD TOTAL</h3>
            <h1>1 993. 50€</h1>
            <p>+12.4% ce mois</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h3>REVENUS</h3>
            <h1>28000€</h1>
            <p>ce mois-ci</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <h3>DEPENSE</h3>
            <h1>806.500€</h1>
            <p>ce mois-ci</p>
        </div>
    </div>
  )
}
