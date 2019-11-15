import React, { Component } from 'react';
import API from "./utils/API"
import EmployeeCard from './components/Card';



class App extends Component {
  state = {
    users: [{}]
  };

  componentDidMount() {
    API.getRandomEmployees().then(results => {
      this.setState({
        users: results.data.results,
      });
    });
    console.log(this.state.users)
  }

  render () {
    return (
      <div>
        <React.Fragment>
        
          <EmployeeCard users={this.state.users} />
        </React.Fragment>
      </div>
    )

    }
  }




export default App;
