import { Component } from 'react';


export class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {time: this.getTime(this.props.zone)}
        
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({time: this.getTime(this.props.zone)}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getTime(zone) {
        const date = new Date();
        const h = (date.getUTCHours() + +zone) < 0 ? 24 + (date.getUTCHours() + +zone) : (date.getUTCHours() + +zone);
        const m = date.getUTCMinutes();
        const s = date.getUTCSeconds();
        return {h, m, s};
    }

    render() {
        return (
            <li className='clock'>
                <p>{this.props.name}</p>
                <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
                <p>{this.state.time.h}:{this.state.time.m}:{this.state.time.s}</p>
            </li>
        )
    }
}