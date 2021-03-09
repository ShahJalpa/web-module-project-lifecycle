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

    axios
       .get("https://api.github.com/users/ShahJalpa/followers")
       .then((response) => {
         console.log(response)
         this.setState({
           followers: response.data
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
        <div className="userCard">
            <div>
                <img src={this.state.user.avatar_url} alt={this.state.user.login} />
            </div>
            <div className="userDetails">
              <h2>{this.state.user.name}</h2>
              <p>Location: {this.state.user.location}</p>
              <p>Repositories: {this.state.user.public_repos}</p>
              <p>Link: {this.state.user.html_url}</p>
              <p>Followers: {this.state.user.followers}</p>
              <p>Following: {this.state.user.following}</p>
            </div>
        </div>
        <div className="followersCard">
            {this.state.followers.map((follower) => 
              <div>
                <img src={follower.avatar_url} alt={follower.login} key={follower.id} />
                <h2>{follower.login}</h2>
              </div>
            )}
        </div>
      </div>
    )
  }

}

export default App


