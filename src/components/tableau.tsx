import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function Tableau() {
  return (
    <div className='p-3 bg-white rounded-lg mt-4'>
        <div className='bg-white flex justify-between items-center'>
            <p className='font-bold text-xl'>TRANSACTIONS</p>
            <span className='px-2 rounded-full border border-gray-200'>4 résults</span>
        </div>
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
                <td className='py-2 px-3'><FaTrashAlt/></td>
            </tr>
        </table>
    </div>
  )
}
