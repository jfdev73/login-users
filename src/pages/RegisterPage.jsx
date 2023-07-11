import { useContext, useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RegisterPage = () => {
	const { users = [], initialUserForm } = useContext(UserContext);

	const [userSelected, setUserSelectec] = useState(initialUserForm);

	const { id } = useParams();
	useEffect(() => {
		if (id) {
			const user = users.find(u => u.id == id) || initialUserForm;
			setUserSelectec(user);
		}
	}, [id]);
	return (
		<div className='container my-4'>
			<h4>{userSelected.id > 0 ? 'Editar Usuario' : 'Registro de Usuarios'}</h4>
			<div className='row'>
				<div className='col'>
					<UserForm userSelected={userSelected} />
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
