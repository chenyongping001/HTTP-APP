import axios from "axios";
import { toast } from "react-toastify";
import { Raven } from "raven-js";

axios.interceptors.response.use(null, (error) => {
  const expectError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectError) {
    Raven.captureException(error);
    toast("An unexpected error occured.");
  }
  return Promise.reject(error);
});
export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
