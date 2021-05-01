import types from "./types";
import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as selectors from './selectors';
import * as actions from './actions'

export function* nextEtapa(payload) {

  try {
    const list = yield select(selectors.getList)
    const price = yield select(selectors.getTotal);

    sessionStorage.setItem('list', JSON.stringify(list))
    sessionStorage.setItem('price', JSON.stringify(price))

  } catch (error) {
    console.log(error)
  }

}

export function* setClient(payload) {
  try {
    sessionStorage.setItem('cli', JSON.stringify(payload.query))
  } catch (err) {
    console.log(err)
  }
}



export default function* wacthItems() {
  yield takeLatest(types.NEXT_ETAPA, nextEtapa)
  yield takeLatest(types.SET_CLIENT, setClient)

}