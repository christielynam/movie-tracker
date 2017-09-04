import React from 'react';


const handleFavoriteButton = (props) => {
    let userKeys = Object.keys(props.activeAccount)
    if (userKeys.length > 0) {
        // console.log(props)
        props.usersFavoriteMovies()
        props.changeRoute('/favorites');
        console.log('fav button user signed in!')
    } else {
        console.log('MUST SIGN IN')
    }
}



const FavoritesNavButton = (props) => {
    const { favoritesCounter } = props

    return(
        <div>
            <button type='button' 
                    className='favorites-nav-button'
                    onClick={(e) => {
                        e.preventDefault();
                        handleFavoriteButton(props);
                        {/* props.usersFavoriteMovies(); */}
                    }} >Favorites: {favoritesCounter}</button>
        </div>

    )
}

export default FavoritesNavButton