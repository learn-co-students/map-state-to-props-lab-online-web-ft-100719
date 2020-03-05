import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let userNames = this.props.users.map((user, i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {userNames}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
