import {
  RETRIEVE_ADS
} from "./types";

import AdDataService from "../services/ad.service";


export const retrieveAds = () => async (dispatch) => {
  try {
    const res = await AdDataService.getAll();

    dispatch({
      type: RETRIEVE_ADS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const findAdsById = (id) => async (dispatch) => {
  try {
    const res = await AdDataService.get(id);

    dispatch({
      type: RETRIEVE_ADS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};