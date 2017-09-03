const favoritesCounter = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FAVORITE_COUNTER':
            console.log('action: ', action.data)
            return action.data
        case 'INCREASE_FAVORITE_COUNTER':
            return state += 1;
        case 'DECREASE_FAVOIRTE_COUNTER':
            return state -= 1;
        default: 
            return state;
    }
}

export default favoritesCounter;