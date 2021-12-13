import { FormEvent, useState } from 'react';

//Modal Lib
import Modal from 'react-modal';

//Hook contexto de transações
import { useTransactions } from '../../hooks/useTransactions';

//Imagens
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

//Componentes estilizados
import {
    Container,
    TransactionTypeContainer,
    RadioBoxButton

} from './styles';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount: Number(amount),
            category,
            type
        })

        setTitle('')
        setAmount('')
        setCategory('')
        setType('deposit')

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBoxButton
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomingImg} alt="Valor entrada" />
                        <span>Entrada</span>
                    </RadioBoxButton>

                    <RadioBoxButton
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Valor saída" />
                        <span>Saída</span>
                    </RadioBoxButton>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}