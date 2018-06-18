import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Spotify.css'
import SpotifyUser from './SpotifyUser'

class Spotify extends Component {
  state = {
    username: '',
  }

  handleChange = (ev) => {
    this.setState({ username: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/spotify/${this.state.username}`)
  }

  render() {
    return (
      <div className="Github">
        <img
          src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcwYGxnd7bAhWLxLwKHSJ3C-EQjRx6BAgBEAU&url=http%3A%2F%2Fwww.vulture.com%2F2015%2F06%2Fspotify-green-logo-change.html&psig=AOvVaw1k6vwsSCEAVXYvQzao1T6G&ust=1529446225342830"
          alt="Spotify"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter an artist"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up artist
            </button>
          </div>
        </form>

        <Route path="/Spotify/:artist" component={SpotifyUser} />
      </div>
    )
  }
}

export default Spotify