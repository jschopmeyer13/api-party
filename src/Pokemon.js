import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokemonUser from './PokemonUser'

class Pokemon extends Component {
  state = {
    number: '',
  }

  handleChange = (ev) => {
    this.setState({ number: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.number}`)
  }

  render() {
    return (
      <div className="Pokemon">
        <img
          src="http://i0.kym-cdn.com/photos/images/original/001/024/523/1c7.jpg"
          alt="Pokemon"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter a Pokemon number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up Pokemon
            </button>
          </div>
        </form>

        <Route path="/Pokemon/:number" component={PokemonUser} />
      </div>
    )
  }
}

export default Pokemon