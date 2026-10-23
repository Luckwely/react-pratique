import type { Type } from "../types/type";

export const categories = ["salaire", "loyer", "courses"];
export const types= ["revenu", "depense"];

export const transaction: Type[] = [
    {
        libele: 'test',
        category: 'salaire',
        date: new Date('2026-12-23'),
        type: 'revenu',
        montant: 245
    },
    {
        libele: 'test',
        category: 'salaire',
        date: new Date('2026-12-23'),
        type: 'revenu',
        montant: 245
    },
    {
        libele: 'test',
        category: 'salaire',
        date: new Date('2026-12-23'),
        type: 'revenu',
        montant: 245
    },
]