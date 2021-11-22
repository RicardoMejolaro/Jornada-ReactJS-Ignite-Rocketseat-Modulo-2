
//Modal Lib
import Modal from 'react-modal';

//Imagens
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

//Componentes estilizados
import {
    Container,
    TransactionTypeContainer

} from './styles';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <button
                        type="button"

                    >
                        <img src={incomingImg} alt="Valor entrada" />
                        <span>Entrada</span>
                    </button>

                    <button
                        type="button"

                    >
                        <img src={outcomeImg} alt="Valor saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}