import { useState, type Dispatch, type FormEvent, type MouseEventHandler, type SetStateAction } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import type { Type } from "../types/type";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    categories: string[];
    types: string[];
    setTransaction: Dispatch<SetStateAction<Type[]>>;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function CreateForm({onClick, categories, types, setTransaction, setOpenModal}: Props) {
    const [transactionData, setTransactionData] = useState({
        libele: '',
        category: categories[0] || '',
        date: '',
        type: types[0] || '',
        montant: ''
    });
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('submited');

        if (transactionData.libele.trim() =='' ||
            transactionData.category.trim() =='' ||
            transactionData.date.trim() =='' ||
            transactionData.type.trim() =='' ||
            transactionData.montant.trim() ==''
        ) {
            toast.error('Tous les champs sont obligatoire');
            return;
        }

        const newTransation = {
            id: crypto.randomUUID(),
            libele: transactionData.libele,
            category: transactionData.category,
            date: new Date(transactionData.date),
            type: transactionData.type,
            montant: +transactionData.montant,
        }

        setTransaction((old) => [...old, newTransation]);
        toast.success('Ajoute avec success');
        setOpenModal(false);
    }

  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl">Nouveau transaction</h1>
            <button onClick={onClick}><FaTimes/></button>
        </div>
        <form onSubmit={onSubmit}>
            <div className="mb-2">
                <label>Libelle*</label>
                <input 
                    onChange={e => setTransactionData(old => ({
                        ...old,
                        libele: e.target.value
                    }))}
                    type="text" 
                    placeholder="libele" 
                    className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg" />
            </div>
            <div className="mb-2">
                <label>Category*</label>
                <select 
                    onChange={e => setTransactionData(old => ({
                                ...old,
                                category: e.target.value
                            }))}
                    name="" id="" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg">
                    {categories.map((category) => (
                        <option 
                            key={category} 
                            value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label>Date*</label>
                <input 
                    onChange={e => setTransactionData(old => ({
                        ...old,
                        date: e.target.value
                    }))}
                    type="date" 
                    placeholder="Date" 
                    className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg" />
            </div>
            <div className="mb-2">
                <label>Type*</label>
                <select
                    onChange={e => setTransactionData(old => ({
                            ...old,
                            type: e.target.value
                        }))}
                    name="" id="" className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg">
                {types.map((type) => (
                    <option 
                        
                        key={type} 
                        value={type}>{type}</option>
                ))}
                </select>
            </div>
            <div className="mb-2">
                <label>Montant*</label>
                <input 
                    onChange={e => setTransactionData(old => ({
                        ...old,
                        montant: e.target.value
                    }))}
                    type="number" 
                    placeholder="montant" 
                    className="w-full px-2 py-1 border border-gray-200 outline-none rounded-lg" />
            </div>
            <button 
                type="submit" 
                className="px-3 py-1 bg-violet-600 text-white rounded-full">Save</button>
        </form>
    </div>
  )
}
