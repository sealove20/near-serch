import Modal from 'react-modal';

const customStyles = {
    content: {
        border: 'none',
        inset: 0,
    },
};

type Props = {
    children: React.ReactNode
    isModalOpen: boolean
    onModalClose: () => void
}

Modal.setAppElement('#__next');

export const ModalPage: React.FC<Props> = ({ children, isModalOpen, onModalClose }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onModalClose}
            style={customStyles}
        >
            {children}
        </Modal>
    )
}