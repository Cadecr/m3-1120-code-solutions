/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    console.log('State:', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const element = (
  <div>
    <NewsletterForm />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
