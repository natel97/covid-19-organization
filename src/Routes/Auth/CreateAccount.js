import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { setToken } from "../../Redux/reducer";
import { createUser } from "../../Utils/API";

export default () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="justify-between flex-column full-height">
      <h3 className="text-center">Create Account</h3>
      <Link to="/auth" className="pseudo button">
        Or click here if you already have an account
      </Link>
      <form
        onSubmit={e => submitData(e, form, setError, history, dispatch)}
        className="flex-column justify-between flex-1"
      >
        <fieldset className="flex-1">
          <input
            className="stack"
            placeholder="First"
            type="text"
            name="given-name"
            minLength="2"
            onChange={e => setForm({ ...form, first: e.target.value })}
          />
          <input
            className="stack"
            placeholder="Last"
            type="text"
            name="family-name"
            minLength="2"
            onChange={e => setForm({ ...form, last: e.target.value })}
          />
          <input
            className="stack"
            placeholder="Email"
            type="email"
            name="email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="stack"
            placeholder="Phone Number: 888-888-8888"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="telephone"
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
          <input
            className="stack"
            placeholder="Password"
            type="password"
            name="password"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <input
            className="stack"
            placeholder="Confirm Password"
            type="password"
            name="confirm-password"
            onChange={e =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
        </fieldset>
        <input
          type="submit"
          className="button success"
          value="Create Account"
        />
      </form>
      <div>{error}</div>
    </div>
  );
};

const submitData = (e, form, setError, history, dispatch) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    return setError("Passwords do not match");
  }

  let field;

  Object.keys(form).forEach(x => (field = form[x] ? field : x));

  if (field) {
    return setError(`Field "${field}" is required`);
  }

  createUser(form)
    .then(({ data }) => {
      dispatch(setToken({ token: data }));
      history.push("/", { newAccount: data });
    })
    .catch(error => setError(error.response.data.error));
};
