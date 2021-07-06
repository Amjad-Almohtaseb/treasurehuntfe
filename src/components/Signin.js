import { signin } from "../store/actions/authActions";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Signin = () => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const [sign, setSign] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setSign({ ...sign, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(sign, history));
  };
  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div style={{ width: "350px" }} className="form-group">
          <label for="exampleFormControlInput1">
            <h2>username</h2>{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter username"
            onChange={handleChange}
            name="username"
            value={sign.username}
          />
        </div>
        <div style={{ width: "350px" }} className="form-group">
          <label for="exampleFormControlInput1">
            <h2>password</h2>{" "}
          </label>
          <input
            type={show ? "password" : "text"}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your password"
            onChange={handleChange}
            name="password"
            value={sign.password}
          />

          <button
            className="btn btn-dark"
            type="button"
            onClick={() => setshow(show ? false : true)}
          >
            show/hide
          </button>
          <br />
          <br />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </center>
  );
};

export default Signin;
