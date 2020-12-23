import { create } from "apisauce"

import cache from "../utility/cache";

const apiClient = create({
    baseURL: "https://easy-shopping4112.herokuapp.com/api/v1"
})

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if(response.ok){
    await cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data: data }: response
}
export default apiClient;