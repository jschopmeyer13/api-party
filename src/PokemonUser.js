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
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${user.id}.png`} alt="" />
        <h3>{`Pokemon: ${user.name}`}</h3>
        <h3>{`Weight: ${user.weight}`}</h3>
        {/* <h2>{user.weight}</h2> */}
        
      </div>
    )
  }
}

export default PokemonUser