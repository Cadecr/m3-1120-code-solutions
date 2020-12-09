import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      password: e.target.value,
      passwordLength: e.target.value.length
    });
  }

  render() {
    const pass = this.state.passwordLength;
    let warn;
    let check;
    let checkClass;
    if (pass == null) {
      warn = <h3>A password is required</h3>;
      check = <i className="fa fa-times" />;
      checkClass = 'warning';
    } else if (pass <= 7) {
      warn = <h3>Your password is too short.</h3>;
      check = <i className="fa fa-times" />;
      checkClass = 'warning';
    } else {
      check = <i className="fa fa-check" />;
      checkClass = 'approved';
    }
    return (
      <form className="textbox">
        <label>
          Password
          <input type="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <div className={checkClass}>{check}</div>
        <div>{warn}</div>
      </form>
    );
  }
}

export { ValidatedInput };
