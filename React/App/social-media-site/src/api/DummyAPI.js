import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "628ee0fef2484a975fe0d2e8",
  },
});
