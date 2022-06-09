import React, { Component } from 'react';

class Useritem extends Component {
  state = {
    id: 'id',
    login: 'seble',
    avatar_url: 'https://avatars.githubusercontent.com/u/61608724?v=4',
    html_url: 'https://github.com/sebleYA'
  };

  render() {
    const { login, avatar_url, html_url } = this.state; // using deconstruction method
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt='' className='round-img' style={{ width: '60px' }} />
        <h3>{login} </h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Useritem;
