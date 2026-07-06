import API from "./auth";

export const signupUser = (data) => {
  return API.post("/auth/signup", data);
};