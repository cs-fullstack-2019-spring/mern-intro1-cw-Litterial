import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={ticket_data:[]};  //state to update the ticket
        this.getData(); //fuction to grab data
    }

    getData(){
        fetch('/tickets/alltickets')  //grabs data from this directory
            .then(filterdata=>{
                return filterdata.json();   //filters all json content
            })

            .then(arrr4ydata=>this.setState({ticket_data:arrr4ydata}))  //fills array with json content
    }

  render() {
        const map_my_data=this.state.ticket_data.map((ele)=>  //iterates through array and puts key-value pairs in table cells
        {
            return(

                    <tr>
                        <td>
                            {ele.person_reporting}
                        </td>
                        <td>
                            {ele.problem_description}
                        </td>
                        <td>
                            {ele.ticket_date}
                        </td>
                    </tr>
            )
        });
    return (
      <div className="App">
        <header className="App-header">
            <table className='tableBorder'>
                <caption> Report Tickets</caption>
                <tr>
                <th>
                    Person
                </th>
                    <th>
                        Issue
                    </th>
                    <th>
                        Date
                    </th>
                </tr>
                {map_my_data}
            </table>

        </header>
      </div>
    );
  }
}

export default App;
