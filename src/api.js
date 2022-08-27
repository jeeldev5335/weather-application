import axios from "axios";
import { apiBaseUrl } from "./Utils";

const instance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 2000,
});

export default instance;