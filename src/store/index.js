import {applyMiddleware, createStore} from 'redux'
import reducer from '../reducers'

/**
 * Logs all actions and states after they are dispatched.
 */
const myLogger = (store)=>(next)=>(action)=>{
    console.log("Dispatching action" , action);
    next(action);
    console.log("Next state", store.getState())
};

const store = createStore(reducer,
    {},
    applyMiddleware(myLogger));

export default store;
