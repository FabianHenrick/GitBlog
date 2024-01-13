import axios from "axios";

const Url = axios.create({
  baseURL: "https://api.github.com/users/fabianhenrick",
});

export default Url;
