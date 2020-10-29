import React, { Component } from "react";

const style = {
  container: {
    paddingTop: "1rem",
  },
};

class EmployeeDirectory extends Component {
  render() {
    return (
      <>
        <div className="container" style={style.container}>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.results.map(employee => (
                    <tr>
                      <td><img alt={`Headshot of ${employee.name.first}`} src={employee.picture.thumbnail} /></td>
                      <td>{employee.name.first} {employee.name.last}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.email}</td>
                      <td>{employee.dob.date.substr(0,10).replace(/(\d{4})\-(\d{2})\-(\d{2})/, '$2/$3/$1')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EmployeeDirectory;
