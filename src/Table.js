import React, {Component} from 'react';
class Table_had extends Component{
render(){
    return(
        <table>
            <thead>
                <tr>
                    <th>Student_name</th>
                    <th>Roll_no</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sachi</td>
                    <td>381</td>
                    <td>syit</td>
                </tr>
                <tr>
                    <td>dhwani</td>
                    <td>300</td>
                    <td>syit</td>
            </tr>
        </tbody>
        </table>
    )
}
}

const Table = () => {
    return (
        <html>
       <h1>This is function</h1> 
       </html>
    );
}
export default Table_had;
export { Table }