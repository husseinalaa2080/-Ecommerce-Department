import {combineReducers} from 'redux';

import ScanProductsReducer from './ScanProducts/scanProductsReducer';
import ScanProductDetailsReducer from './ScanProducts/productDetailsReducer';

const rootReducer = combineReducers({
  scanProducts: ScanProductsReducer,
  scanProductDetails: ScanProductDetailsReducer,
});

export default rootReducer;
