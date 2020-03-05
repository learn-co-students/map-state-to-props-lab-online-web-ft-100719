import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user,i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          <br/>
          <br/>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
          <br/>
          There are {this.props.numberOfUsers} users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStatetoProps = (state) => {
  return { 
    users: state.users,
    numberOfUsers: state.users.length 
  }
} 

export default connect(mapStatetoProps)(Users);