import axios from "axios";
import { apiBaseUrl } from "./Utils";

const instance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
});

export default instance;