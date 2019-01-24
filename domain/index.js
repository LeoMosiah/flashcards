import { applyMiddleware, createStore } from "redux";
import { decksReducer } from "./redux/ducks/decksReducer";
import logger from "redux-logger";

export const initializeDomainLayer = () => {
  const store = createStore(decksReducer, applyMiddleware(logger));
  return { store };
};
