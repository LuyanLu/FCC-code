import React, { Component } from 'react';
import './App.css';
var clock;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workSet: {title: "work time", time: 25},
      breakSet: {title: "break time", time: 5},
      timer: {title: "working", minutes: "25", seconds: "00"}
    };
    this.handleBMinusClick = this.handleBMinusClick.bind(this);
    this.handleBPlusClick = this.handleBPlusClick.bind(this);
    this.handleWMinusClick = this.handleWMinusClick.bind(this);
    this.handleWPlusClick = this.handleWPlusClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  preNum(num) {
    return ("00" + num.toString()).slice(-2);
  }
  handleBMinusClick() {
    this.setState((prevState) => (
      prevState.breakSet.time && {breakSet: {title: "break time", time: prevState.breakSet.time - 1}}
    ));
  }
  handleBPlusClick() {
    this.setState((prevState) => (
      prevState.breakSet.time<60 && {breakSet: {title: "break time", time: prevState.breakSet.time + 1}}
    ));
  }
  renderBreakSet() {
    return (
      <div className="setting">
        <p>{ this.state.breakSet.title }</p>
        <div>
          <button className="minus" onClick={ this.handleBMinusClick }>-</button>
          <p className="timeLength">{ this.state.breakSet.time }</p>
          <button className="plus"onClick={ this.handleBPlusClick }>+</button>
        </div>
      </div>
    );
  }
  handleWMinusClick() {
    this.setState((prevState) => (
      prevState.workSet.time && {workSet: {title: "work time", time: prevState.workSet.time - 1}}
    ));
  }
  handleWPlusClick() {
    this.setState((prevState) => (
      prevState.workSet.time<60 && {workSet: {title: "work time", time: prevState.workSet.time + 1}}
    ));
  }
  renderWorkSet() {
    return (
      <div className="setting">
        <p>{ this.state.workSet.title }</p>
        <div>
          <button className="minus" onClick={ this.handleWMinusClick }>-</button>
          <p className="timeLength">{ this.state.workSet.time }</p>
          <button className="plus"onClick={ this.handleWPlusClick }>+</button>
        </div>
      </div>
    );
  }
  renderClock() {
    return (
      <div className='clock'>
        <p className='title'>{ this.state.timer.title }</p>
        <p className='timer'>{ this.state.timer.minutes }:{ this.state.timer.seconds }</p>
      </div>
    );
  }
  countDown() {
    let minutes = parseInt(this.state.timer.minutes, 10),
        seconds = parseInt(this.state.timer.seconds, 10);
    if (minutes<60 && minutes>=0) {
      if (seconds>0) {
        seconds--;
      } else {
        minutes--;
        seconds = 60;
        seconds--;
      }
      this.setState((prevState) => ({
        timer: {title: prevState.timer.title, minutes: this.preNum(minutes), seconds: this.preNum(seconds)}
      }));
    }
    if (minutes<=0 && seconds<=0) {
      if (this.state.timer.title === "working") {
        this.setState({
          timer: {title: "breaking", minutes: this.state.breakSet.time, seconds: "00"}
        });
      } else {
        this.setState({
          timer: {title: "working", minutes: this.state.workSet.time, seconds: "00"}
        });
      }     
    }    
  }
  handleStartClick() {
    if (!clock) {
      clock = setInterval(this.countDown, 1000);
    }
  }
  handlePauseClick() {
    if (clock) {
      clearInterval(clock);
      clock = 0;
    }
  }
  handleResetClick() {
    this.setState({
      workSet: {title: "work time", time: 25},
      breakSet: {title: "break time", time: 5},
      timer: {title: "working", minutes: "25", seconds: "00"}
    });
    clearInterval(clock);
    clock = 0;
  }
  renderControl() {
    return (
      <div className="controlButton">
        <button className="start" onClick={ this.handleStartClick }>start</button>
        <button className="pause" onClick={ this.handlePauseClick }>pause</button>
        <button className="reset" onClick={ this.handleResetClick }>reset</button>
      </div>
    );
  }
  render() {
    return (
      <div className="main-container">
        {this.renderBreakSet()}
        {this.renderWorkSet()}
        {this.renderClock()}
        {this.renderControl()}
      </div>
      );
  }
}

export default App;