import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    startTimer = () => {
        this.interval = setInterval(() => this.tick(), 1000);
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div className="timer">
                <div>Seconds: {this.state.seconds}</div>
                <button onClick={this.startTimer}>Start timer</button>
                <button onClick={this.stopTimer}>Stop timer</button>
            </div>
        )
    }
}

export default Timer;