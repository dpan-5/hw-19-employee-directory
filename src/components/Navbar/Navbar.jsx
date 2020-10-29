import React from "react";

const style = {
    nav: {
        background: "#3d38cf",
        padding: "1.5rem"
  },
    h3: {
        color: "white"
  }
};


const Navbar = () => {
  return (
    <nav className="text-center" style={style.nav}>
      <h3 style={style.h3}>Employee Directory</h3>
      <p style={{color: "white"}}>
        Click on carrots to filter by heading or use the search bar to narrow your search results
      </p>
    </nav>
  );
};

export default Navbar;