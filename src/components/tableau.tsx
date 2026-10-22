import React from 'react'

export default function Tableau() {
  return (
    <div className='p-3 bg-white rounded-lg mt-4'>
        <div className='bg-white'>TRANSACTIONS</div>
        <table className='w-full mt-2'>
            <tr className='bg-gray-200'>
                <th className='py-2'>libele</th>
                <th className='py-2'>category</th>
                <th className='py-2'>date</th>
                <th className='py-2'>type</th>
                <th className='py-2'>montant</th>
                <th className='py-2'></th>
            </tr>
            <tr className='bg-gray-100'>
                <td className='py-2 px-3'>salaire</td>
                <td className='py-2 px-3'>salaire</td>
                <td className='py-2 px-3'>01 nov 2025</td>
                <td className='py-2 px-3'>revenu</td>
                <td className='py-2 px-3'>+250€</td>
                <td className='py-2 px-3'>X</td>
            </tr>
        </table>
    </div>
  )
}
