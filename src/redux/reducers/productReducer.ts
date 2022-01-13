import * as type from '../types';

const initialState = {
  products: [],
  loading: false,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return { ...state, loading: true };
    case type.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.products };

    default:
      return state;
  }
};
export default productReducer;
