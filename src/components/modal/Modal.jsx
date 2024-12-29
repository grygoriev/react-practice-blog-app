import styled from 'styled-components';
import { Button } from '../button/Button.jsx';
import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCansel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const isOpen = useSelector(selectModalIsOpen);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCansel);

	if (!isOpen) {
		return null;
	}

	console.log(onConfirm);

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}

	& .box {
		top: 50%;
		transform: translate(0, -50%);
		width: 400px;
		margin: auto;
		z-index: 30;
		position: relative;
		background-color: #fff;
		border: 3px solid #000;
		padding: 0 20px 20px;
		text-align: center;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .buttons button {
		margin: 0 5px;
	}
`;
