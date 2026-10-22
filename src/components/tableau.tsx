import React from 'react'

export default function Tableau() {
  return (
    <div>
        <div className='p-3 bg-white'>TRANSACTIONS</div>
        <table>
            <tr>
                <th>libele</th>
                <th>category</th>
                <th>date</th>
                <th>type</th>
                <th>montant</th>
            </tr>
            <tr>
                <td>salaire</td>
                <td>salaire</td>
                <td>01 nov 2025</td>
                <td>revenu</td>
                <td>+250€</td>
            </tr>
        </table>
    </div>
  )
}
