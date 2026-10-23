import type { MouseEventHandler } from "react";
import { FaTimes } from "react-icons/fa";
import type { Type } from "../types/type";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>
    categories: string[];
    types: string[];
}

export default function CreateForm({onClick, categories, types}: Props) {
  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl">Nouveau transaction</h1>
            <button onClick={onClick}><FaTimes/></button>
        </div>
        <form action="">
            <div className="mb-2">
                <label>Libelle*</label>
                <input type="text" placeholder="libele" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg" />
            </div>
            <div className="mb-2">
                <label>Category*</label>
                <select name="" id="" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg">
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label>Date*</label>
                <input type="date" placeholder="Date" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg" />
            </div>
            <div className="mb-2">
                <label>Type*</label>
                <select name="" id="" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg">
                {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
                </select>
            </div>
            <div className="mb-2">
                <label>Montant*</label>
                <input type="number" placeholder="montant" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg" />
            </div>
            <button type="submit" className="px-3 py-1 bg-violet-600 text-white rounded-full">Save</button>
        </form>
    </div>
  )
}
