import { createStore, combineReducers, applyMiddleware } from "redux";
import { demoReduces } from "../redeces/demo";
import { Store } from "../types/index";
import initState from './initState';

//合并多个Reduce
const rootReducer = combineReducers({
    demo: demoReduces
});
export default () => {
    const store = createStore<Store>(rootReducer, initState);
    return store;
}