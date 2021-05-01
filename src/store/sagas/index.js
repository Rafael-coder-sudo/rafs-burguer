import { fork } from 'redux-saga/effects'
import wacthItems from '../ducks/items/sagas'


export default function* startForman() {
  yield fork(wacthItems);
}
