import axios from "axios";

const Url = axios.create({
  baseURL: "https://api.github.com/users/",
});

export default Url;
