import { useState } from "react";
import { signup } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setshow] = useState(true);

  const [sign, setSign] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const resetForm = () => {
    setSign({
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(sign, history));

    resetForm();
  };

  const handleChange = (event) => {
    setSign({ ...sign, [event.target.name]: event.target.value });
  };

  return (
    <center>
      <form style={{ width: "350px" }} onSubmit={handleSubmit}>
        <div className="form-group">
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
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">
            <h2>password</h2>
          </label>
          <input
            type={show ? "password" : "text"}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your password"
            onChange={handleChange}
            name="password"
            value={sign.password}
            required
          />
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => setshow(show ? false : true)}
          >
            show/hide
          </button>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">
            <h2>email</h2>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your email"
            onChange={handleChange}
            name="email"
            value={sign.email}
            required
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </center>
  );
};

export default Signup;
