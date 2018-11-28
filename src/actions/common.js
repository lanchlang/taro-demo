/**
 * action creator: request,cancel,pending,success,fail
 *  */
class ActionCreator{
    constructor(request){
       this.request=request
    }
    createRequestAction(payload){
       return {
           type:this.request.request(),
           payload:payload
       }
    }
    createCancelAction(){
        return {
            type:this.request.cancel(),
        }
    }
    createPendingAction(){
        return {
            type:this.request.pending(),
        }
    }
    createSuccessAction(payload){
        return {
            type:this.request.success(),
            payload:payload,
        }
    }
    createFailAction(payload){
        return {
            type:this.request.fail(),
            payload:payload
        }
    }
}

export default ActionCreator;