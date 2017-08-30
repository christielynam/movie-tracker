import React, { Component } from 'react';

export default class MovieDirectory extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchRecentMovies([{name: 'Christie'}])
  }

  render() {
    return (
      <div>
      MOVIES
      </div>
    )
  }
}
