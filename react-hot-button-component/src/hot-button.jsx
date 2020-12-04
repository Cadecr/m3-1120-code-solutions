import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    let button;
    const currentCount = this.state.count;
    if (currentCount <= 2) {
      button = <button className="button" onClick={this.handleClick}>Hot Button</button>;
    } else if (currentCount >= 3 && currentCount <= 5) {
      button = <button className="button2" onClick={this.handleClick}>Hot Button</button>;
    } else if (currentCount >= 6 && currentCount <= 8) {
      button = <button className="button3" onClick={this.handleClick}>Hot Button</button>;
    } else if (currentCount >= 9 && currentCount <= 11) {
      button = <button className="button4" onClick={this.handleClick}>Hot Button</button>;
    } else if (currentCount >= 12 && currentCount <= 14) {
      button = <button className="button5" onClick={this.handleClick}>Hot Button</button>;
    } else if (currentCount >= 15) {
      button = <button className="button6" onClick={this.handleClick}>Hot Button</button>;
    }
    return (
      button
    );
  }
}

export { HotButton };
