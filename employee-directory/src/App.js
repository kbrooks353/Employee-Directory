import React, { Component } from 'react';
import API from "./utils/API"
import EmployeeCard from './components/Card/Card';
import Wrapper from "../src/components/Wrapper/index";
import SearchForm from "../src/components/SearchForm/Search";



class App extends Component {
  state = {
    users: []
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
        <SearchForm />
        <Wrapper>
          <React.Fragment>
          {this.state.users.map(user => (
            <EmployeeCard 
              first={user.name.first}
              last={user.name.last}
              image={user.picture.medium}
              dob={user.dob.age}
              phone={user.phone}
              email={user.email}
            />
          ))}

          </React.Fragment>
        </Wrapper>
      </div>
    )

    }
  }




export default App;
