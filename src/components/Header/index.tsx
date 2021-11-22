import { useState } from 'react';

//Imagens
import logoImg from '../../assets/logo.svg';

//Componentes estilizados
import {
    Container,
    Content

} from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo dtmoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}