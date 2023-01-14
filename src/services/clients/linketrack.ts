import axios from "axios";

const linketrack = axios.create({
  baseURL: "https://api.linketrack.com",
});

export default linketrack;
