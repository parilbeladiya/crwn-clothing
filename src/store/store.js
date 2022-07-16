import { compose, createStore, applyMiddleware, } from "redux"; 
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const loggerMiddlewars = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('=== Type: ', action.type);
    console.log('=== Payload: ', action.payload);
    console.log('=== Current State: ', store.getState());

    next(action);
    console.log('=== Next State: ', store.getState());

};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],    
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [ loggerMiddlewars ];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers ); 

export const persistor = persistStore(store);

