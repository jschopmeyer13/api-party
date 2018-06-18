import React, {Component} from 'react'
import Github from './Github';

class GithubUser extends Component {
    render() {
        const { params } = this.props.match
        return (
            <div classname="GithubUser">
                {params.username}
            </div>
        )
    }
}

export default GithubUser