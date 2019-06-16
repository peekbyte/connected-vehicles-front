import { getConfig } from "../utils/config";
import { call } from "../utils/fetcher";
const { apiEndpoint } = getConfig();
const getVehicles = async (q='') => call(apiEndpoint + `vehicles?q=${q}`, "GET");

const api = {
  getVehicles
};

export default api;
