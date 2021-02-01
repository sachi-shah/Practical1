import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;



// import React from 'react';

// class Error extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             is_error: false,
//             error: null, 
//             errorInfo: null 

//         }
        
//     }
//     static getDerivedStateFromError() {return{
//         is_error: true
//     }}

//     componentDidCatch(error, errorInfo) {
//         // Catch errors in any components below and re-render with error message
//         this.setState({
//           error: error,
//           errorInfo: errorInfo
//         }
//         );
        
//     }

        

//     render(){
        
//         if (this.state.errorInfo) {
//             alert("error is encountered");
//             return <h1>Encountered an error</h1>;
            
//         }
//         return this.props.children;
//     }
// }

// export default Error;