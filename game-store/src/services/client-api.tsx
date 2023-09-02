import axios from "axios";


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "aa04471e29f4438bb6231bd81440f12e" },
});