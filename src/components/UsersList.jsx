import { useContext } from 'react';

import { UserContext } from '../context/UserContext';
import UserRow from './UserRow';

const UsersList = () => {
	const { users } = useContext(UserContext);
	return (
		<>
			<table className='table table-hover table-stripped'>
				<thead>
					<tr>
						<th>#</th>
						<th>Username</th>
						<th>Email</th>
						<th>Update</th>
						<th>Update Route</th>
						<th>Remove</th>
					</tr>
				</thead>

				<tbody>
					{users.map(user => (
						<UserRow key={user.id} user={user} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default UsersList;
