import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      name: '',
      value: 'easy'
    }
  }

  static propTypes = {
    onload: PropTypes.func.isRequired
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.state.name !== '') {
      this.props.onload(this.state.name, this.state.value)
    } else {
      this.setState({error: "Name can NOT be blank!"})
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.onSubmit.bind(this)}>
          {this.errorHtml()}
          <label>Name</label>
          <input id="name" type="text" name="name" onChange={(e) => {this.setState({name: e.target.value})}} value={this.state.name} placeholder="Example" autoFocus></input>
          <select value={this.state.value} onChange={(e) => {this.handleChange(e)}} >
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
          <button type="submit" name="Play">Play</button>
        </form>
      </div>
    )
  }

  errorHtml() {
    if (this.error !== '') {
      return <h1 className="error">{this.state.error}</h1>
    }
    return ''
  }
}

export default Login
