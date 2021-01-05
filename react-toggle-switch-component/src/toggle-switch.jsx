import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    const yesClicked = this.state.isClicked;
    if (yesClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    const isClicked = this.state.isClicked;
    let checkBox;
    if (isClicked) {
      checkBox = (
        <label className="switch">
          <input type="checkbox" onClick={this.handleClick} checked></input>
          <span className="slider round"></span>
          <div>
            <h3 className="on">ON</h3>
          </div>
        </label>
      );
    } else {
      checkBox = (
        <label className="switch">
          <input type="checkbox" onClick={this.handleClick}></input>
          <span className="slider round"></span>
          <div>
            <h3 className="off">OFF</h3>
          </div>
        </label>
      );
    }
    return (
      checkBox
    );
  }
}

export { ToggleSwitch };
