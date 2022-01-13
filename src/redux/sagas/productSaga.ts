import * as type from '../types';

import { call, put, takeEvery } from 'redux-saga/effects';

import { get } from '../../services/api';

function* fetchProducts(): any {
  const products = yield call(get, {});
  yield put({ type: type.GET_PRODUCTS_SUCCESS, products });
}

function* productSaga(): any {
  yield takeEvery(type.GET_PRODUCTS_REQUESTED, fetchProducts);
}

export default productSaga;
