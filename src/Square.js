import {Component} from "react";

class Square extends Component
{
  render()
  {
    return(
        <div>
          <img src={this.props.value[0]} alt="places" height="200px" width="400px"/>
          <p>{this.props.value[1]}</p>
        </div>
    );
  }
}

class Board extends Component{
  renderSquareButton(value)
  {
    return <Square value={value} />;
  }
  render()
  {
    return(
      <div align="center" >
        {this.renderSquareButton(["https://images.unsplash.com/photo-1523980145253-50327d891e0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" ,"Taj Mahal"])}
        {this.renderSquareButton(["https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80","Mumbai"])}
        {this.renderSquareButton(["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80","Goa"])}
        
        </div>
    );
  } 
}

export default Board;


