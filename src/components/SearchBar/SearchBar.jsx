import React, { Component } from "react";
import API from '../utils/API';

const style = {
  form: {
    margin: "2%"
  }
};

class SearchBar extends Component {

  state = {
    search: "",
    results: [],
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value
     });
  };

  componentDidMount() {
    API.getEmployees("https://randomuser.me/api/?results=50&nat=us").then((res) => {
      this.setState({ results: res.data.results });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    return (
      <form style={style.form} className="text-center" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search..."
          name="search"
          id="search"
        />
      </form>
    );
  }
}

export default SearchBar;