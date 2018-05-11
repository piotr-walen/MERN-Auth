import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handlers.clearStatus();
    }
    state = {
        username: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handlers.login({
            ...this.state
        });

        this.setState({
            username: '',
            password: ''
        });
    };

    handleChange = field => event => {
        const value = event.target.value;
        this.setState(previousState => {
            const newState = { ...previousState };
            newState[field] = value;
            return newState;
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Login Form </label>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                />
                <input
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange('password')}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default LoginForm;