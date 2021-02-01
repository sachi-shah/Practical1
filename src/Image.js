import {Component} from "react";
class Image extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: 'places'}
    }
  render()
  {
    return(
        <div>
            <img src={this.props.value[0]} alt="places" height="200px" width="400px" 
              onClick = 
              { () => { this.setState({value: 'clicked'}) }
              }/>
          <p>{this.state.value}</p>
        </div>
      ); }
}
class Board extends Component{
  renderButton(value)
  {
    return <Image value={value} />;
  }
  render()
  {
    return(
      <div align="center" >
        {this.renderButton(["https://images.unsplash.com/photo-1523980145253-50327d891e0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80"])}
        {this.renderButton(["https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"])}
        {this.renderButton(["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"])}
      </div>
    );
  } 
}
export default Board;


