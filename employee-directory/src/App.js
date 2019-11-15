import React, { Component } from 'react';
import API from "./utils/API"
import EmployeeCard from './components/Card/Card';
import Wrapper from "../src/components/Wrapper/index";
import SearchForm from "../src/components/SearchForm/Search";
import Sort from "../src/components/SortButton/Sort";


class App extends Component {
  state = {
    users: [],
    search: "",
    searchedUsers: []
  };

  componentDidMount() {
    API.getRandomEmployees().then(results => {
      this.setState({
        users: results.data.results,
        searchedUsers: results.data.results
      });
    });
  };

  handleAgeSort = event => {
    let users = this.state.users;
    users.sort(function(a,b){
      return a.dob.age-b.dob.age;
    })
    this.setState({
      searchedUsers: users
    })
  }

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    let search = this.state.search.toLowerCase();

    let filterUsers = this.state.users.filter(item => {
      return item.name.first.toLowerCase().includes(search);
      
    })
    this.setState({
      searchedUsers: filterUsers
    })
  }

  render () {
    return (
      <div>
        <SearchForm 
          formSubmit={this.handleFormSubmit}
          inputChange={this.handleInputChange}
          />
        <Sort handleSort={this.handleAgeSort}/>
        <Wrapper>
          <React.Fragment>
          {this.state.searchedUsers.map(user => (
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
