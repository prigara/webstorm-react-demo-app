import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0, isStartButtonDisabled: false };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    startTimer = () => {
        this.interval = setInterval(() => this.tick(), 1000);
        this.setState({
            isStartButtonDisabled: true
        });
    };

    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({
            isStartButtonDisabled: false
        });
    };

    render() {
        return (
            <div className="Timer">
                <div>Seconds: {this.state.seconds}</div>
                <button onClick={this.startTimer} disabled={this.state.isStartButtonDisabled}>Start timer</button>
                <button onClick={this.stopTimer}>Stop timer</button>
            </div>
        )
    }
}

export default Timer;