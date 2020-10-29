import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import EmployeeDirectory from "../../components/EmployeeDirectory/EmployeeDirectory";
import API from '../../utils/API';

class EmployeeDirectoryContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };

  // SearchBar functions ==========================================================

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    // Checck if search is empty or not, then set filteredResult
    if(this.state.search !== "") {
        const filteredResults = this.state.results.filter(employee => {
            return (
                (employee.name.first + " " + employee.name.last).includes(this.state.search)
                || employee.phone.includes(this.state.search)
                || employee.email.includes(this.state.search)
                )
        });
        this.setState({filteredResults: filteredResults});
    } else {
        this.setState({filteredResults: this.state.results});
    }
  };

  // EmployeeDirectory functions ===================================================

  componentDidMount() {
    API.getEmployees("https://randomuser.me/api/?results=30&nat=us")
        .then(res => {
            this.setState({ results: res.data.results, filteredResults: res.data.results });
        })
        .catch(err => console.log(err));
  }

  handleFilterClick = (e) => {
      const { name } = e.target;
      if(name === "filterByName") {
          console.log("you clicked filter by name");
      }
  }

  render() {
    return (
      <>
        <Navbar />
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <EmployeeDirectory results={this.state.filteredResults}/>
      </>
    );
  }
}

export default EmployeeDirectoryContainer;
