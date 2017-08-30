const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      console.log('ADD MOVIE ACTION CALLED')
      return [...state, ...action.data];
    default:
      console.log('DOES DEFAULT GET RAN')
      return state;
  }
}

export default movies;
