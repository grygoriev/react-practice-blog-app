import styled from 'styled-components';
import { Button, Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { ROLE } from '../../../../constants';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							margin="0 0 0 10px"
							id="fa-sign-out"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}{' '}
			</RightAligned>
			<RightAligned>
				<Icon margin="10px 0 0 0" id="fa-backward" onClick={() => navigate(-1)} />
				<Link to="/post">
					<Icon margin="10px 0 0 16px" id="fa-file-text-o" />
				</Link>
				<Link to="/users">
					<Icon margin="10px 0 0 16px" id="fa-users" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
