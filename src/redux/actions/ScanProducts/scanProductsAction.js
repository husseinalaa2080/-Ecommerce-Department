import {
  START_GET_SCAN_PRODUCTS,
  SUCCESS_GET_SCAN_PRODUCTS,
  FAILED_GET_SCAN_PRODUCTS,
} from '../../constants/index.js';

import Axios from '../../../utils/axios';

export const getScanProducts = () => {
  return dispatch => {
    dispatch({type: START_GET_SCAN_PRODUCTS});

    return Axios('GET', `/yeshtery/products`)
      .then(res => {
        //console.log(res?.data);
        dispatch({
          type: SUCCESS_GET_SCAN_PRODUCTS,
          payload: res?.data,
        });
      })
      .catch(error => {
        dispatch({
          type: FAILED_GET_SCAN_PRODUCTS,
          payload: error,
        });
      });
  };
};
