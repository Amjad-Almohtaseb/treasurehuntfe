import { NavItem } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../store/actions/authActions";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <h2 style={{ marginRight: "150px" }}>hello {user.username}</h2>

            <button
              style={{ color: "white" }}
              className="nav-item btn btn-success"
              onClick={() => dispatch(signout(history))}
            >
              signOut
            </button>
          </>
        ) : (
          <>
            <NavItem
              style={{
                textDecoration: "none",
                fontSize: "30px",
                color: "#012354",
                textShadow: "2px 2px 5px white",
              }}
              className="nav-item"
              to="/"
            >
              Home
            </NavItem>
            <NavItem
              style={{
                textDecoration: "none",
                fontSize: "30px",
                color: "#012354",
                textShadow: "2px 2px 5px white",
              }}
              className="nav-item"
              to="/signup"
            >
              Signup
            </NavItem>

            <NavItem
              style={{
                textDecoration: "none",
                fontSize: "30px",
                color: "#012354",
                textShadow: "2px 2px 5px white",
              }}
              className="nav-item"
              to="/signin"
            >
              Signin
            </NavItem>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
