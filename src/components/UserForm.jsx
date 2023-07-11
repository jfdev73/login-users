import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserContext';

const UserForm = ({ userSelected, handlerVisibleForm }) => {
	const { initialUserForm, handlerAddUser } = useContext(UserContext);

	const [userForm, setUserForm] = useState(initialUserForm);

	const { id, username, password, email } = userForm;

	useEffect(() => {
		setUserForm({ ...userSelected, password: '' });
	}, [userSelected]);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setUserForm({
			...userForm,
			[name]: value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();

		if ((!password && id === 0) || [username, email].includes('')) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Debes completar todos los campos!',
			});
			return;
		}
		handlerAddUser(userForm);
		setUserForm(initialUserForm);
	};

	const closeVisibleForm = () => {
		handlerVisibleForm();
		setUserForm(initialUserForm);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='ms-2'>
					<div className='mb-3 '>
						<label htmlFor='' className='form-label'>
							Usuario
						</label>
						<input
							type='text'
							className='form-control  '
							placeholder='username'
							name='username'
							onChange={onInputChange}
							value={username}
						/>
					</div>
					{id === 0 && (
						<div className='mb-3 '>
							<label htmlFor='' className='form-label'>
								Password
							</label>
							<input
								type='password'
								className='form-control'
								placeholder='password'
								name='password'
								onChange={onInputChange}
								value={password}
							/>
						</div>
					)}

					<div className='mb-3 '>
						<label htmlFor='' className='form-label'>
							Email
						</label>

						<input
							type='email'
							className='form-control'
							placeholder='email'
							name='email'
							onChange={onInputChange}
							value={email}
						/>
					</div>

					<input type='hidden' name='id' value={id} />
				</div>

				<div className='d-flex p-2 justify-content-between'>
					<button className='btn btn-primary' type='submit'>
						{id === 0 ? 'Crear' : 'Editar'}
					</button>
					{handlerVisibleForm && (
						<button
							className='btn btn-secondary '
							type='button'
							onClick={closeVisibleForm}
						>
							Cerrar
						</button>
					)}
				</div>
			</form>
		</>
	);
};

export default UserForm;
