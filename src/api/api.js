import { getConfig } from "../utils/config";
import { call } from "../utils/fetcher";
const { apiEndpoint } = getConfig();
const getVehicles = async (q='', status= "all") => call(apiEndpoint + `vehicles?q=${q}&status=${status}`, "GET");

const api = {
  getVehicles
};

export default api;
