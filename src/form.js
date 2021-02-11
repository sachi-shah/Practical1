import {Component} from "react";

class Form extends Component{
  state = {username: 'Enter github username',
            res_name: '' 
          }


  handleSubmit = async(event) => {
    event.preventDefault();
    const axios = require('axios');
     const response = await axios.get(`https://api.github.com/users/${this.state.username}` )
     console.log(response)
     this.setState({res_name: String(response.data.login)})

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter your name" value={this.state.username}
        onChange = {event => this.setState({username: event.target.value})}/>
        <button>Submit</button>
        <h1>{this.state.res_name}</h1>
        
      </form>
    );
  }
}
export default Form;

