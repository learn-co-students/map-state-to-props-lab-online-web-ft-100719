import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    
    const usersList = this.props.usernames.map(user => {
      debugger;
        return <li>{user.username}</li>
      });

    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {usersList}
          {/* In addition, display the total number of users curently in the store */}
          <p>{this.props.usernames.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    usernames: state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
