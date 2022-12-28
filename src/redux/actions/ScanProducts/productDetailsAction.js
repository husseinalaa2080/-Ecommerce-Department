import {
  START_GET_SCAN_PRODUCT_DETAILS,
  SUCCESS_GET_PRODUCT_DETAILS,
  FAILED_GET_PRODUCT_DETAILS,
} from '../../constants/index';

import Axios from '../../../utils/axios';

export const getScanProductDetails = id => {
  return dispatch => {
    dispatch({type: START_GET_SCAN_PRODUCT_DETAILS});

    return Axios('GET', `/yeshtery/product?product_id=${id}`)
      .then(res => {
        //console.log(res?.data);
        dispatch({
          type: SUCCESS_GET_PRODUCT_DETAILS,
          payload: res?.data,
        });
      })
      .catch(error => {
        dispatch({
          type: FAILED_GET_PRODUCT_DETAILS,
          payload: error,
        });
      });
  };
};
