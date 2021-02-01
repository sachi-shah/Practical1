import React from 'react';

class List_value extends React.Component{
    state = {
        list_array : ["Google","Facebook","Amazon"],
    };
// throwingError(){
//     throw new Error('New Error');
// }
    
    render(){
        return(
            
            <React.Fragment>
                {/* {this.throwingError()} */}
                <h1>Create component which renders lists iteratively using map function of array.</h1>
                <ul>
                {this.state.list_array.map((i) => <li> {i} </li>)}
                </ul>

               
              <button onClick={() => this.setState({list_array: this.state.list_array.sort()})}>
                  sort</button>

            {/* <button onClick={() => {throw new Error('New Error')}}>
                  Error</button> */}

            </React.Fragment>
            
        )
        
    }
}
export default List_value;