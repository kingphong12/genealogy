import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = "/photos";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = ``;
    return axiosClient.get(url);
  },
};

export default userApi;
