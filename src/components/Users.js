import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i) => {
            return <li key={i}>
              UserName: {user.username}<br></br>
              Hometown: {user.hometown}
            </li>
          })}
          
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
  }
}


export default connect(mapStateToProps)(Users)
