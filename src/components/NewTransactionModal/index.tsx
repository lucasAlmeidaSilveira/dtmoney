import Modal from 'react-modal';
import { Container } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <h2>cadastrar Transação</h2>

        <input placeholder='Título' />

        <input type='number' placeholder='Valor' />

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
