import { createPortal } from 'react-dom';
import { FormModal } from '../FormModal/FormModal';

import classes from './Modal.module.scss';

const modalRoot = document.getElementById('modal');

const Modal = ({ open, onClose }) => {
	if (!open) return null;
	return createPortal(
		<div className={classes.modal} onClick={onClose}>
			<div
				className={classes.modalCard}
				onClick={(event) => event.stopPropagation()}
			>
				<span className={classes.modalTop}>
					<h2>Ваш заказ</h2>
					<div className={classes.close} onClick={onClose}></div>
				</span>
				<FormModal />
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
