const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
    console.log('add movie action called');
      return [...state, ...action.data]
    default:
      return state
  }
}

export default movies;
