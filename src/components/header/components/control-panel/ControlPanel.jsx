import styled from 'styled-components';
import { Icon } from '../../../../components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled.button`
	font-size: 18px;
	width: 100px;
	height: 32px;
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 0 0 0 10px;
`;

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<RightAligned>
				<Button>Войти</Button>
			</RightAligned>
			<RightAligned>
				<Icon margin="10px 0 0 0" id="fa-backward" />
				<Icon margin="10px 0 0 16px" id="fa-file-text-o" />
				<Icon margin="10px 0 0 16px" id="fa-users" />
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
