import axios from "axios";

export const handleSignUp = async (formValues) => {
  console.log(process.env.REACT_APP_API);
  return await axios.post(process.env.REACT_APP_API, formValues);
};
