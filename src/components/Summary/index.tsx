import { useContext } from 'react';

//Contexto de Transações
import { TransactionsContext } from '../../TransactionsContext';

//Imagens
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

//Componentes estilizados
import { Container } from "./styles";


export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Icone entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Icone saídas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Icone total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}