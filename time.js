import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.Change = this.Change.bind(this);
    this.Rest = this.Rest.bind(this);
    this.state = { Hour: 0, Minute: 0, Second: 0 };
  }

  Change() {
    this.interval = setInterval(() => {
      this.setState(Second => ({ Second: this.state.Second + 1 }));
      if (this.state.Second == 60) {
        this.setState(Minute => ({ Minute: this.state.Minute + 1 }));
        this.setState(Second => ({ Second: (this.state.Second = 0) }));
      }
      if (this.state.Minute == 60) {
        this.setState(Hour => ({
          Hour: Number.parseFloat(this.state.Hour) + 1
        }));
        this.setState(Minute => ({ Minute: (this.state.Minute = 0) }));
      }
      if (this.state.Hour == 23) {
        this.setState(Hour => ({ Hour: (this.state.Hour = 0) }));
      }
    }, 1000);
  }
  Rest() {
    this.setState(Second => ({ Second: (this.state.Second = 0) }));
    this.setState(Minute => ({ Minute: (this.state.Minute = 0) }));
    this.setState(Hour => ({ Hour: (this.state.Hour = 0) }));
  }

  render() {
    return (
      <div>
        <div className="structure1">
          <p />
        </div>

        <div className="Inputs-value">
          <input value={this.state.Hour} />
          <span>:</span>
          <input value={this.state.Minute} />
          <span>:</span>
          <input value={this.state.Second} />
          <button className="button1" type="button" onClick={this.Change}>
            Start
          </button>
          <button className="button2" type="button" onClick={this.Rest}>
            Reset
          </button>
        </div>
        <div className="structure2">
          <p />
        </div>
        <div className="structure3">
          <p />
        </div>
        <div className="structure4">
          <p />
        </div>
      </div>
    );
  }
}
