import React, { Component } from 'react';
import Comments from './comments';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='comment-container col-md-8'>
      <Comments/>
      </div>
    );
  }
}

export default Post;
