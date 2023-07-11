export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'login':

      return {
        isAuth: true,
        user: action.payload
      };

    case 'logout':
      sessionStorage.removeItem('login');
      return {
        isAuth: false

      }

    default:
      state;
  }
}