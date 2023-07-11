import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
  isAuth: false,
  user: undefined,
};




export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const navigate = useNavigate()

  const handlerLogin = (loginUser) => {
    const isLogin = authService(loginUser);
    if (isLogin) {
      const user = { username: 'admin' };
      dispatch({
        type: 'login',
        payload: user,
      });
      sessionStorage.setItem(
        'login',
        JSON.stringify({
          isAuth: true,
          user,
        })
      );
      navigate('/users')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username o password invalidos!',
      });
    }
  };

  const handlerLogout = () => {
    dispatch({
      type: 'logout',
    });
  };
  return { login, handlerLogin, handlerLogout }


}