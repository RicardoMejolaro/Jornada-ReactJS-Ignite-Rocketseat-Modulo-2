
//Imagens
import logoImg from '../../assets/logo.svg';

//Componentes estilizados
import {
    Container,
    Content

} from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo dtmoney" />
                <button type="button">Nova transação</button>
            </Content>
        </Container>
    )
}