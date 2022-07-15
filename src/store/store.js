import { compose, createStore, applyMiddleware, } from "redux"; 

import { rootReducer } from "./root-reducer";

const loggerMiddlewars = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    next(action);

};

const middlewares = [ loggerMiddlewars ];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers ); 

