import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

//API
import { api } from "../services/api";

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
interface TransactionProviderProps {
    children: ReactNode
}
interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        try {
            const response = await api.post('/transactions', {
                ...transactionInput,
                createdAt: new Date()
            })
            const { transaction } = response.data

            setTransactions([
                ...transactions,
                transaction
            ])

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}