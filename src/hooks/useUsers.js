import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const initialUsers = [
  { id: 1, username: 'pepe', password: '12345', email: 'pepe@correo.com' },
];

const initialUserForm = {
  id: 0,
  username: '',
  password: '',
  email: '',
};

export const useUsers = () => {
  const [users, distpacth] = useReducer(usersReducer, initialUsers);

  const [userSelected, setUserSelected] = useState(initialUserForm);

  const [visibleForm, setVisibleForm] = useState(false);

  const navigate = useNavigate()

  const handlerAddUser = user => {
    let type;

    type = user.id === 0 ? 'addUser' : 'updateUser';

    distpacth({
      type,
      payload: user,
    });

    Swal.fire(
      user.id === 0 ? 'Usuario Creado' : 'Usuario Actualizado',
      user.id === 0 ? 'El usuario ha sido creado con exito!' : 'El usuario ha sido actualizado con exito!',
      'success'
    )
    navigate('/users')
    setVisibleForm(false)
  };

  const handlerRemoveUser = id => {


    Swal.fire({
      title: '¿Estas seguro de eliminar el usario?',
      text: "No puedes revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        distpacth({
          type: 'removeUser',
          payload: id,
        });
        Swal.fire(
          'Usuario Eliminado!',
          'Usuario eliminado con exito.',
          'success'
        )
      }
    })
  };

  const handlerUserSelectedForm = user => {
    setVisibleForm(true)
    setUserSelected({ ...user });
  };

  const handlerVisibleForm = () => {
    setVisibleForm(!visibleForm);
    if (visibleForm)
      setUserSelected(initialUserForm)
  }

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerVisibleForm

  }



}