import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          
          {this.props.users.map(user => <li id={user.id}>{user.username}</li>)}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: [...state.users], userCount: [...state.users].length}
}

export default connect(mapStateToProps)(Users)
