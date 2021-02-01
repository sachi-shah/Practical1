
import {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function Dropdown1() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    setValue(e)
  }
  return (
    <div className="App container">
      <br/>
      <h1>JSX Expression</h1>
      <DropdownButton title="Select a language" id="dropdown-menu-align-right"
      onSelect={handleSelect} >
              <Dropdown.Item eventKey="Hi">Hi</Dropdown.Item>
              <Dropdown.Item eventKey="Hello">Hello</Dropdown.Item>
              <Dropdown.Item eventKey="Hola">Hola</Dropdown.Item>
      </DropdownButton>
<br/> <br/> 
<br/> <br/><br/>
     <h1>Welcome!</h1>
      <input class="p-2 mb-2 bg-info text-white" type="text" value={value + " everyone"} />
    </div>
  );
}

export default Dropdown1;

