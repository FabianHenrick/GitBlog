import axios from "axios";

const blogUrl = axios.create({
  baseURL: "https://api.github.com/users/fabianhenrick",
});

export default blogUrl;
