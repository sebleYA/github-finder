import React, { Component } from 'react';
import Useritem from './Useritem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'seble',
        avatar_url: 'https://avatars.githubusercontent.com/u/61608724?v=4',
        html_url: 'https://github.com/sebleYA'
      },
      {
        id: '2',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: '3',
        login: 'pjhyett',
        avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/sebleYA'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};


export default Users;