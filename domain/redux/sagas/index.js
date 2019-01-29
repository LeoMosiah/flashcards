import { all, takeLatest } from "redux-saga/effects";
import { GET_DECKS, getDecksSaga } from "./decksSaga";

export function* rootSaga() {
  yield all([takeLatest(GET_DECKS, getDecksSaga)]);
}
