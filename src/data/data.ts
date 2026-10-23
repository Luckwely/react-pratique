import type { Type } from "../types/type";

export const categories = ["salaire", "loyer", "courses"];
export const types= ["revenu", "depense"];

export const transaction: Type[] = [
    {
        id: 1,
        libele: 'test',
        category: 'salaire',
        date: new Date('2026-12-23'),
        type: 'revenu',
        montant: 245
    },
    {
        id: 2,
        libele: 'test',
        category: 'salaire',
        date: new Date('2026-12-23'),
        type: 'revenu',
        montant: 245
    },
    {
        id: 3,
        libele: 'test',
        category: 'salaire',
        date: new Date('2026-12-23'),
        type: 'revenu',
        montant: 245
    },
]