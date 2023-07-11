import { useUsers } from '../hooks/useUsers';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
	const {
		users,
		userSelected,
		initialUserForm,
		visibleForm,
		handlerAddUser,
		handlerRemoveUser,
		handlerUserSelectedForm,
		handlerVisibleForm,
	} = useUsers();
	return (
		<UserContext.Provider
			value={{
				users,
				userSelected,
				initialUserForm,
				visibleForm,
				handlerAddUser,
				handlerRemoveUser,
				handlerUserSelectedForm,
				handlerVisibleForm,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
