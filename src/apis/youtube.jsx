import axios from "axios";
const KEY = "AIzaSyB45FB8Zjj3aS3A_g3eBWp_X874m2T93c8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
