const accounts = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return action.data;

    case 'REMOVE_ACTIVE_USER':
      localStorage.removeItem('user');
      return {};
      
    default:
      return state;
  }
}

export default accounts;
