/**
 * Logs all actions and states after they are dispatched.
 */
const loggingMiddleware = (store)=>(next)=>(action)=>{
    console.log("Dispatching action" , action);
    next(action);
    console.log("Next state", store.getState())
};



export default loggingMiddleware;


