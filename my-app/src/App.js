import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    user: {},
    followers: []
  }

  componentDidMount(){
    axios
       .get("https://api.github.com/users/ShahJalpa")
       .then((response) => {
         console.log(response)
         this.setState({
           user: response.data
         })
       })
       .catch((error) => {
         console.log(error)
       })
  }
  render(){
    return(
      <div className="app">
        <div className="title">
            <h1>Github User Card</h1>
        </div>
        <div className="userDetail">
            <img src={this.state.user.avatar_url} />
            <h2>Name: {this.state.user.name}</h2>
            <p>Location: {this.state.user.location}</p>
            <p>Repositories: {this.state.user.public_repos}</p>
            <p>Followers: {this.state.user.followers}</p>
            <p>Following: {this.state.user.following}</p>
            <p>Link: {this.state.user.html_url}</p>

        </div>
      </div>
    )
  }

}

export default App


