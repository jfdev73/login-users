import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { login, handlerLogin, handlerLogout } = useAuth();
	return (
		<AuthContext.Provider value={{ login, handlerLogin, handlerLogout }}>
			{children}
		</AuthContext.Provider>
	);
};
