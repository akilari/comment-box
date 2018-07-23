import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComments } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state= {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  renderUser({id, title}) {
    return (
      <li className="list-group-item" key= { _.uniqueId() }>{title}</li>
    );
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.props.comments);
    let newComments = [this.props.comments.push({id:_.uniqueId(), title: this.state.term})];
    this.setState({
      term:'',
      comments: newComments
    });
  }
  render() {
    return (
      <div>
        <ul className='list-group'> {this.props.comments.map(this.renderUser)}</ul>
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input type='text' value={this.state.term} onChange={this.onInputChange} placeholder='type here..' className='form-control'/>
          <button type='submit' className='btn btn-secondary'>Post</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({comments}) {
  return {comments};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateComments }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
