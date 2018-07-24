import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Forum extends Component {
  renderList ({title}) {
    return (
      <li onClick={()=>{console.log('clicked');}} className="list-group-item" key= { _.uniqueId() }>
      <Link to="/forum">{ title }</Link>
      </li>
    );
  }
  render() {
    return (
      <div className='comment-container col-lg-6 col-sm-12'>
      <h3> Pick your favourite forum </h3>
        <ul className='list-group'>
          {this.props.forum.map(this.renderList)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({forum}) {
  return {forum};
}

export default connect(mapStateToProps)(Forum);
