import { put, call,takeLatest,takeEvery,throttle} from 'redux-saga/effects'

export  function generateTakeLatestSaga(actionCreator,networkMethod){
    function* generatorAsync(action){
        let params=action.payload
        try{
            yield put(actionCreator.createPendingAction())
            const response=yield call(networkMethod,params)
            if(response.statusCode>=300){
                yield put(actionCreator.createFailAction(response.data))
            }else{
                yield put(actionCreator.createSuccessAction({...action.payload,result:response.data}))
            }
         }catch(error) {
             yield put(actionCreator.createFailAction({"error":"发生网络错误"}))
         }
    } 
    return function* (){
        yield takeLatest(actionCreator.getStateRequest().request(), generatorAsync)
    }
}
export  function generateTakeEverySaga(actionCreator,networkMethod){
    function* generatorAsync(action){
        let params=action.payload
        try{
            yield put(actionCreator.createPendingAction())
            const response=yield call(networkMethod,params)
            if(response.statusCode>=300){
                yield put(actionCreator.createFailAction(response.data))
            }else{
                yield put(actionCreator.createSuccessAction({...action.payload,result:response.data}))
            }
         }catch(error) {
             yield put(actionCreator.createFailAction({"error":"发生网络错误"}))
         }
    } 
    return function* (){
        yield takeEvery(actionCreator.getStateRequest().request(), generatorAsync)
    }
}
export  function generateThrottleSaga(actionCreator,networkMethod,duration){
    function* generatorAsync(action){
        let params=action.payload
        try{
            yield put(actionCreator.createPendingAction())
            const response=yield call(networkMethod,params)
            if(response.statusCode>=300){
                yield put(actionCreator.createFailAction(response.data))
            }else{
                yield put(actionCreator.createSuccessAction({...action.payload,result:response.data}))
            }
         }catch(error) {
             yield put(actionCreator.createFailAction({"error":"发生网络错误"}))
         }
    } 
    return function* (){
        yield throttle(duration,actionCreator.getStateRequest().request(), generatorAsync)
    }
}