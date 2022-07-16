import { compose, createStore, applyMiddleware, } from "redux"; 
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

const composeEnhancer = 
    (process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const sagaMiddleWare = createSagaMiddleWare();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [ process.env.NODE_ENV !== 'production' && logger, sagaMiddleWare ].filter(
    Boolean
);


const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers ); 

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

