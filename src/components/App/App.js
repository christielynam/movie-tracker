import React, { Component } from 'react';
import { fetchAllMovies, fetchFavoriteMovies } from '../../../utils/movieApi';
import MovieDirectoryContainer from '../../containers/MovieDirectory-container';
import Header from './Header/Header';
import Modal from './Account/Modal/Modal';
import { Route } from 'react-router';
// import Notifications from './Notifications';
import Notifications from 'react-notification-system-redux';
import { withRouter } from 'react-router-dom';


const notificationStyle = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px',
      borderRadius: '12px',
      fontSize: '18px',
    },

    success: { // Applied only to the success notification item
      color: 'red',
      fontSize: '20px',
      backgroundColor: '#000000',
      borderTop: '4px solid red',
      borderBottom: '4px solid red'
    }
  },
  Title: {
    DefaultStyle: {
      fontSize: '18px',
      margin: '10px',
      padding: 0,
      fontWeight: 'bold'
    },

    success: {
      color: '#ffffff'
    }
  },
  Action: {
    DefaultStyle: {
      background: '#ffffff',
      borderRadius: '3px',
      fontSize: '16px',
      padding: '8px 20px',
      fontWeight: 'bold',
      margin: '10px',
      border: 0
    },

    success: {
      backgroundColor: '#c74148',
      color: '#ffffff',
      cursor: 'pointer'
    }
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  retrieveFavoriteMovies() {
    const { activeAccount } = this.props;

    if (Object.keys(activeAccount).length > 0) {
      return fetchFavoriteMovies(activeAccount.id)
        .then(data => {
          if (data.status === 'success') {
            if (data.data.length > 0) {
              this.props.fetchUserFavorites(data.data)
              this.props.setFavCount(data.data.length)
            }
          } else {
            console.log('ERROR: grabbing favorites from db');
          }
        })

    } else {
      this.props.resetFavCounter();
    }
  }

  retrieveLocalStorage() {
    if (localStorage.getItem('user')) {
      this.props.handleSignInSuccess(JSON.parse(localStorage.getItem('user')))
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data => {
        this.props.fetchRecentMovies(data);
        this.retrieveLocalStorage();
        return this.retrieveFavoriteMovies()
      })
      .then(data => {
        if (this.props.location.pathname === '/favorites') {
          if (Object.keys(this.props.activeAccount).length > 0) {
            this.props.usersFavoriteMovies();
          } else {
            console.log('MUST SIGN IN TO SEE FAVS')
          }
        }
      })
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {

      if (location.pathname === '/') {
        fetchAllMovies()
          .then(data => {
            this.props.fetchRecentMovies(data);
            this.retrieveFavoriteMovies();
          })
      }
    })
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Route exact path='/signin'
          render={() => <Modal action='signin' />}
        />
        <Route exact path='/signup'
          render={() => <Modal action='signup' />}
        />
        <Route exact path='/fullmoviedetail/:movieId'
          render={() => <Modal action='fullmoviedetail' />}
        />
        <MovieDirectoryContainer />
        <Notifications notifications={this.props.notifications}
          style={notificationStyle}
        />
      </div>
    )
  }
}

export default withRouter(App);

App.contextTypes = {
  store: React.PropTypes.object
}
