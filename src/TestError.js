import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class TestError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shouldCrash: false};
    }

    makeItCrash() {
        this.setState({shouldCrash: true});
    }

    render() {
        if (this.state.shouldCrash) {
            // Simulate a JS error
            throw new Error('I have crashed!');
        }
        return <button type="button" onClick={this.makeItCrash.bind(this)}>Click me to Crash it</button>
    }
}
function ErrorPage() {
    return (
        <div>
            <p>
                <b>
                    Error boundaries in React
                </b>
            </p>
            <ErrorBoundary>
                <TestError/>
            </ErrorBoundary>
        </div>
    );
}

export default ErrorPage;
