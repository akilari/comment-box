import React, { Component } from 'react';
import Section from '../containers/sections';
import Comments from '../containers/comments';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Section/>
      </div>
    )
  }
}

export default App;
