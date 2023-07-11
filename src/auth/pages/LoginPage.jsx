import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContex';
const initialLoginForm = {
	username: '',
	password: '',
};
const LoginPage = () => {
	const { handlerLogin } = useContext(AuthContext);
	const [loginForm, setLoginForm] = useState(initialLoginForm);

	const { username, password } = loginForm;
	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setLoginForm({
			...loginForm,
			[name]: value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		if ([username, password].includes('')) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Username y password son requeridos!',
			});
		}

		handlerLogin({ username, password });

		setLoginForm({ ...loginForm, password: '' });
	};
	return (
		<>
			<div className='modal dark' tabIndex='-1' style={{ display: 'block' }}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Login</h5>
						</div>
						<form onSubmit={onSubmit}>
							<div className='modal-body'>
								<div className='mb-3 '>
									<label htmlFor='' className='form-label'>
										Usuario
									</label>
									<input
										type='text'
										className='form-control  '
										placeholder='username'
										name='username'
										value={username}
										onChange={onInputChange}
									/>
								</div>

								<div className='mb-3 '>
									<label htmlFor='' className='form-label'>
										Password
									</label>
									<input
										type='password'
										className='form-control'
										placeholder='password'
										name='password'
										value={password}
										onChange={onInputChange}
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<button type='submit' className='btn btn-primary'>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
