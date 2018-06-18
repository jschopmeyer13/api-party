import React, { Component } from 'react'

class PokemonUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.number !== this.props.match.params.number) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.number}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state

    return (
      <div className="PokemonUser">
        <h3>Pokemon:</h3><h2>{user.name}</h2>
        <h3>Weight:</h3>
        <h3>{user.weight}</h3>
      </div>
    )
  }
}

export default PokemonUser