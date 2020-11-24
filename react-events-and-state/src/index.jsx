import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <button>Thank you!</button>;
    } else {
      button = <button onClick={this.handleClick}>{this.props.text}</button>;
    }
    return (
      button
    );
  }
}

const element = (
  <div>
    <CustomButton text="Click me!"/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
