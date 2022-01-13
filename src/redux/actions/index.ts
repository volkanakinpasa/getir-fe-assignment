import * as type from '../types';

const getProducts = () => {
  return { type: type.GET_PRODUCTS_REQUESTED };
};

export { getProducts };
