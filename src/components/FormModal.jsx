import { useContext } from 'react';
import UserForm from './UserForm';
import { UserContext } from '../context/UserContext';

const FormModal = () => {
	const { userSelected, handlerVisibleForm } = useContext(UserContext);
	return (
		<>
			<div className='abrir-modal animacion fadeIn'>
				<div className='modal' style={{ display: 'block' }} tabIndex='-1'>
					<div className='modal-dialog modal-dialog-centered' role='document'>
						<div className='modal-content'>
							<div className='modal-header d-flex align-items-center justify-content-center'>
								<h5 className='modal-title'>
									{userSelected.id > 0 ? 'Editar' : 'Crear'} Usuario
								</h5>
							</div>
							<div className='modal-body '>
								<UserForm
									userSelected={userSelected}
									handlerVisibleForm={handlerVisibleForm}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormModal;
