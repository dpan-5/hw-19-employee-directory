import React, { Component } from "react";

const style = {
  form: {
    padding: "1%",
    backgroundColor: "#f2f2f0"
  }
};

class SearchBar extends Component {

  render() {
    return (
      <form style={style.form} className="text-center">
        <input
          onChange={this.props.handleInputChange}
          type="text"
          placeholder="Search..."
          name="search"
          value={this.props.search}
          id="search"
        />
      </form>
    );
  }
}

export default SearchBar;