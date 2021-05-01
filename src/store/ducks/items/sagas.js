import types from "./types";
import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as selectors from './selectors';
import actions from './actions'
import * as api from '../../../api/api'

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
    console.log(payload.query)
    sessionStorage.setItem('cli', JSON.stringify(payload.query))
  } catch (err) {
    console.log(err)
  }
}

export function* cancel() {
  sessionStorage.removeItem('cli')
  sessionStorage.removeItem('price')
  sessionStorage.removeItem('list')
}

export function* onGetCep(payload) {
  const { data } = payload

  try {

    const response = yield call(api.onCep, data)
    
    yield put(actions.setEnd(response.data))
      
  } catch (err) {
    alert(err)
  }

}



export default function* wacthItems() {
  yield takeLatest(types.NEXT_ETAPA, nextEtapa)
  yield takeLatest(types.SET_CLIENT, setClient)
  yield takeLatest(types.CANCEL, cancel)
  yield takeLatest(types.ON_CEP, onGetCep)

}