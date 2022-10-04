import {
  RETRIEVE_ADS
} from "../actions/types";

const initialState = [];

function adReducer(ads = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_ADS:
      return payload;
    default:
      return ads;
  }
};

export default adReducer;