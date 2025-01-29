import { H2, PrivateContent } from '../../components/index.js';
import { TableRow, UserRow } from './components/index.js';
import { useEffect, useState } from 'react';
import { ROLE } from '../../constants/index.js';
import { checkAccess } from '../../utils/index.js';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors/index.js';
import styled from 'styled-components';
import { request } from '../../utils/request.js';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserLists, setShouldUpdateUserLists] = useState(false);
	const userRole = useSelector(selectUserRole);

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}
		Promise.all([request('/api/users'), request('/api/users/roles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				const formattedRoles = rolesRes.data.map(({ id, role }) => ({
					id: Number(id),
					name: role,
				}));
				setRoles(formattedRoles);
				setUsers(usersRes.data);
			},
		);
	}, [shouldUpdateUserLists, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		request(`/api/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserLists(!shouldUpdateUserLists);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => Number(roleId) !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;
	font-size: 18px;
`;
