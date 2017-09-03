import React from 'react';


const handleFavoriteButton = () => {
    // props.usersFavoriteMovies()
}



const FavoritesNavButton = (props) => {

    return(
        <div>
            <button type='button' 
                    className='favorites-nav-button'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(e);
                        // handleFavoriteButton();
                        props.usersFavoriteMovies();
                    }} >Favorites 0</button>
        </div>

    )
}

export default FavoritesNavButton