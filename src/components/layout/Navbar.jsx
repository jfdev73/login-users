import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContex';

const Navbar = () => {
	const { login, handlerLogout } = useContext(AuthContext);
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#'>
						UsersApp
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse align-items-sm-center '
						id='navbarNav'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/users'>
									Usuarios
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/users/register'>
									Registrar Usuario
								</NavLink>
							</li>
						</ul>
						<div
							className='d-flex flex-column flex-lg-row 
              align-items-lg-center 
            align-items-sm-start gap-2'
						>
							<span className='nav-link nav-link text-primary '>
								{login.user?.username}
							</span>
							<button
								type='button'
								className='btn btn-outline-success '
								onClick={handlerLogout}
							>
								Logout
							</button>
						</div>
					</div>

					{/* <div
						className='collapse navbar-collapse justify-content-end'
						id='navbarNavLogout'
					>
						<span className='nav-item nav-link text-primary mx-3'>
							{login.user?.username}
						</span>
						<button className='btn btn-outline-success' onClick={handlerLogout}>
							Logout
						</button>
					</div> */}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
