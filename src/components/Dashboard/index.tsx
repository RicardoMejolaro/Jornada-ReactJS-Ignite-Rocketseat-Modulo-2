//Componentes
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

//Componentes estilizados
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}