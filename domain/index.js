import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { decksReducer } from "./redux/ducks/decksReducer";
import { rootSaga } from "./redux/sagas";
import { logger } from "redux-logger";

export const initializeDomainLayer = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    decksReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
