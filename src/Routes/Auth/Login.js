import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../../Utils/API";
import { setToken } from "../../Redux/reducer";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const token = useSelector(s => s.token);

  useEffect(() => {
    let to = null;
    if (error) {
      to = setTimeout(() => setError(""), 5000);
    }
    return () => to && clearTimeout(to);
  }, [error]);

  if (token) return <Redirect to="/" />;

  if (!accepted) return <Agreement accept={() => setAccepted(true)} />;
  return (
    <div className="flex-column justify-between full-height">
      <div>
        <h1 className="text-center">Log in</h1>
        <input
          onChange={e => setForm({ ...form, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={e => setForm({ ...form, password: e.target.value })}
          type="password"
          placeholder="Password"
        />
      </div>
      {error && <div>{error}</div>}
      <div className="flex-column">
        <button
          className="success"
          onClick={() =>
            loginUser(form)
              .then(({ data }) => dispatch(setToken({ token: data })))
              .catch(({ data }) => setError(data))
          }
        >
          Log in
        </button>
        <Link to="/auth/create" className="button pseudo">
          Create Account
        </Link>
      </div>
    </div>
  );
};

const Agreement = ({ accept }) => {
  return (
    <div className="flex-column full-height justify-center">
      <article className="card">
        <header>
          <h3 className="full-width text-center">Agree to terms of service?</h3>
        </header>
        <footer>
          <div className="flex-1">
            This may be riddled with bugs and may not be guaranteed to be
            secure. All use is at your own risk. By clicking "I Agree" you
            accept that we accept no responsibility for this rag tag app meant
            to help people.
          </div>
        </footer>
      </article>

      <button onClick={accept} className="success">
        I Agree
      </button>
    </div>
  );
};
