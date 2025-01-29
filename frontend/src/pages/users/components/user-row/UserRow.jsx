import PropTypes from 'prop-types';
import { Icon } from '../../../../components/index.js';
import { TableRow } from '../table-row/TableRow.jsx';
import { useState } from 'react';
import { PROP_TYPE } from '../../../../constants/index.js';
import styled from 'styled-components';
import { request } from '../../../../utils/request.js';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleIds, setInitialRoleIds] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/api/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleIds(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleIds;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<div className={'save-role-button'}>
						<Icon
							id="fa-floppy-o"
							margin="0 0 0 10px"
							disabled={isSaveButtonDisabled}
							onClick={() => onRoleSave(id, selectedRoleId)}
						/>
					</div>
				</div>
			</TableRow>
			<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUserRemove} />
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& select {
		padding: 0 5px;
		font-size: 16px;
	}
`;

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
