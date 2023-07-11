import { useContext } from 'react';
import FormModal from '../components/FormModal';

import UsersList from '../components/UsersList';

import { useUsers } from '../hooks/useUsers';
import { UserContext } from '../context/UserContext';

const UsersPage = () => {
	const { users, visibleForm, handlerVisibleForm } = useContext(UserContext);
	return (
		<>
			{visibleForm && <FormModal />}
			<div className='container my-4'>
				<h2>Users App</h2>
				<div className='row'>
					<div className='col'>
						{!visibleForm && (
							<button
								className='btn btn-primary my-2'
								type='button'
								onClick={() => handlerVisibleForm()}
							>
								Nuevo Usuario
							</button>
						)}

						{users.length === 0 ? (
							<div className='alert alert-warning'>
								No hay usuarios en el sistema
							</div>
						) : (
							<UsersList />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default UsersPage;
