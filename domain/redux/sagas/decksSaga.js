import { call, put } from "redux-saga/effects";
import { getDecks } from "../../../data/api";
import { receiveDecksAction } from "../ducks/decksReducer";

export const GET_DECKS = "sagas/getDecks";

export const getDecksAction = () => ({
  type: GET_DECKS
});

export function* getDecksSaga() {
  try {
    const decks = yield call(getDecks);
    yield put(receiveDecksAction(decks));
  } catch (error) {
    console.log(error);
  }
}
