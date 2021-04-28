import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          block
          variant="primary"
          style={{
            marginRight: "1rem",
          }}
        >
          ABOUT
        </Button>
      </Link>
      <Link to="/hobbies" style={{ textDecoration: "none" }}>
        <Button block variant="primary">
          HOBBIES
        </Button>
      </Link>
    </div>
  );
}
export default Nav;
