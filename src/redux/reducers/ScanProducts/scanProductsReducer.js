import {
  START_GET_SCAN_PRODUCTS,
  SUCCESS_GET_SCAN_PRODUCTS,
  FAILED_GET_SCAN_PRODUCTS,
} from '../../constants/index.js';

const initState = {
  scanProductsLoading: false,
  scanProductsList: [],
  scanProductsFailed: [],
};

const ScanProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GET_SCAN_PRODUCTS:
      return {
        ...state,
        scanProductsLoading: true,
        scanProductsList: [],
        scanProductsFailed: [],
      };
    case SUCCESS_GET_SCAN_PRODUCTS:
      return {
        ...state,
        scanProductsLoading: false,
        scanProductsList: action.payload,
        scanProductsFailed: [],
      };
    case FAILED_GET_SCAN_PRODUCTS:
      return {
        ...state,
        scanProductsLoading: false,
        scanProductsList: [],
        scanProductsFailed: action.payload,
      };
    default:
      return state;
  }
};

export default ScanProductsReducer;
