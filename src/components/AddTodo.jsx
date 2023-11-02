import React, { Component } from "react";

export default class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <form style={formStyle} onSubmit={this.onSubmit} action="submit">
        <input type="text" style={inputForm} name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
        <input type="submit" style={inputSubmitButton} value="Submit"/>
      </form>
    );
  }
}

const inputForm ={
  flex: '1',
  marginRight: '10px'

}

const inputSubmitButton = {
  flex: '1',
  maxWidth: '100px',
  padding: '10px 10px',
  background: '#555',
  color: 'white',
  border: 'none',
  cursor: 'pointer'

}

const formStyle ={
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'space-between',
  padding: '10px 30px',
}