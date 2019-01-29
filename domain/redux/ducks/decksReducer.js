import _ from "lodash";

export const initialState = {};

export const decksSelector = state => state.decks;

export const RECEIVE_DECKS = "decks/receiveDecks";

export const receiveDecksAction = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const handleSetDecks = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.decks;
  return clonedState;
};

export const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return handleSetDecks(state, action);
    default:
      return state;
  }
};
