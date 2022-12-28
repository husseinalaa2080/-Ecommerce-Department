import {
  START_GET_SCAN_PRODUCT_DETAILS,
  SUCCESS_GET_PRODUCT_DETAILS,
  FAILED_GET_PRODUCT_DETAILS,
} from '../../constants/index';

const initState = {
  scanProductDetailsLoading: false,
  scanProductDetailsList: [],
  scanProductDetailsFailed: [],
};

const ScanProductDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GET_SCAN_PRODUCT_DETAILS:
      return {
        ...state,
        scanProductDetailsLoading: true,
        scanProductDetailsList: [],
        scanProductDetailsFailed: [],
      };
    case SUCCESS_GET_PRODUCT_DETAILS:
      return {
        ...state,
        scanProductDetailsLoading: false,
        scanProductDetailsList: action.payload,
        scanProductDetailsFailed: [],
      };
    case FAILED_GET_PRODUCT_DETAILS:
      return {
        ...state,
        scanProductDetailsLoading: false,
        scanProductDetailsList: [],
        scanProductDetailsFailed: action.payload,
      };
    default:
      return state;
  }
};

export default ScanProductDetailsReducer;
