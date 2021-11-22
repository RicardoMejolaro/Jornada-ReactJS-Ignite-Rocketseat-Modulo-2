import { useState } from 'react';

//Modal Lib
import Modal from 'react-modal';

//Componentes
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

//Estilos
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

//Recurso para acessibilidade do Modal
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModal} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </>
  );
}
