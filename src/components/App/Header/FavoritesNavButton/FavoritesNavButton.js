import React from 'react';


const handleFavoriteButton = () => {
    // props.usersFavoriteMovies()
}



const FavoritesNavButton = () => {

    return(
        <div>
            <button type='button' 
                    className='favorites-nav-button'
                    onClick={(e) => {
                    e.preventDefault();
                    console.log(e)
                    handleFavoriteButton();
                    }} >Favorites 0</button>
        </div>

    )
}

export default FavoritesNavButton