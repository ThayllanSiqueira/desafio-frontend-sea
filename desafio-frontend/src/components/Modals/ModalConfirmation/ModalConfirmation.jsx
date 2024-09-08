import { StyledModal, StyledButtonModal } from './ModalConfirmation.styles';

const ModalConfirmation = ({isOpen, handleClose, title, ...modalProps}) => {

  return (
    <StyledModal
      title={title}
      centered
      open={isOpen}
      onOk={handleClose}
      onCancel={handleClose}
      footer={[
        <StyledButtonModal key="ok" type="link" onClick={handleClose}>
          OK
        </StyledButtonModal>
      ]}
      {...modalProps}
    >
    </StyledModal>
  )
}

export default ModalConfirmation;
