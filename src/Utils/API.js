import Axios from "axios";

const getClient = () => {
  const baseURL = process.env.REACT_APP_API;
  return Axios.create({
    baseURL,
    headers: {
      Authorization: window.localStorage.getItem("token")
    }
  });
};

// Users

export const createUser = ({ first, last, email, password, phone }) => {
  return getClient().post("/user", { first, last, email, password, phone });
};

export const loginUser = ({ email, password }) => {
  return getClient().post("/user/login", { email, password });
};

export const deleteUser = ({ id }) => {
  return getClient().delete(`/user/${id}`);
};

export const logOut = () => {
  window.localStorage.removeItem("token");
};
