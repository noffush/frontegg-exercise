import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api';

async function userLogin(email, password) {
  console.log(BASE_URL);
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    const user = response.data;
    return { status: "success", user };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const message = error.response.data.message;
      return { stauts: "failed", message };
    } else {
      return { stauts: "failed", message: "Something went wrong. Please try again later" };
    }
  }
}

export default { userLogin };
