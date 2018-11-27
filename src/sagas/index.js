import { put, takeEvery,all,take } from 'redux-saga/effects'
import {delay,} from 'redux-saga';

export function* incrementAsync() {
  console.log("goog")  
  yield delay(1000)
  yield put({ type: 'ADD' })
}

export  function* watchIncrementAsync() {
  yield takeEvery('ASYNC_ADD', incrementAsync)
}

export function* helloSaga(){
  while(true){
      yield take("*")
      yield put({type:"MINUS"})
  }

}
  

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }