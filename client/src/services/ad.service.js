import http from "../http-common";

class AdsDataService {
  getAll() {
    return http.get("/ads");
  }

  get(id) {
    return http.get(`/ads/${id}`);
  }


  findById(id) {
    return http.get(`/ads?id=${id}`);
  }
}

export default new AdsDataService();