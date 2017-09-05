import favoritesCounterReducer from '../reducers/favoritesCounter-reducer';

describe('Reducers', () => {
  it('Favorites Counter Reducer: Initial State', () => {
    expect(favoritesCounterReducer(undefined, {})).toEqual(0)
  })

  it('Favorites Counter Reducer: INCREASE_FAVORITE_COUNTER', () => {
    expect(favoritesCounterReducer(undefined, {})).toEqual(0)

    expect(
      favoritesCounterReducer(0, { type: 'INCREASE_FAVORITE_COUNTER'})
    ).toEqual(1)

    expect(
      favoritesCounterReducer(1, { type: 'INCREASE_FAVORITE_COUNTER' })
    ).toEqual(2)

  })


  it('Favorites Counter Reducer: DECREASE_FAVORITE_COUNTER', () => {
    expect(favoritesCounterReducer(undefined, {})).toEqual(0)

    expect(
      favoritesCounterReducer(4, { type: 'DECREASE_FAVORITE_COUNTER' })
    ).toEqual(3)

    expect(
      favoritesCounterReducer(1, { type: 'DECREASE_FAVORITE_COUNTER' })
    ).toEqual(0)

  })
})
