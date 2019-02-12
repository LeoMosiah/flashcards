import { cloneDeep } from "lodash";

export const initialState = {};

export const decksSelector = state => state;

export const RECEIVE_DECKS = "decks/receive-decks";
export const ADD_DECK = "decks/add";
export const ADD_CARD = "decks/add-card";

export const receiveDecksAction = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const addDeckAction = deck => ({
  type: ADD_DECK,
  deck
});

export const addCardAction = (id, card) => ({
  type: ADD_CARD,
  card,
  id
});

export const handleSetDecks = (state, action) => {
  let clonedState = cloneDeep(state);
  clonedState = action.decks;
  return clonedState;
};

export const handleAddDeck = (state, action) => ({
  ...state,
  [action.deck.id]: action.deck
});

export const handleAddCard = (state, action) => {
  let clonedState = cloneDeep(state);
  clonedState[action.id].questions.push(action.card);
  return clonedState;
};

export const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return handleSetDecks(state, action);
    case ADD_DECK:
      return handleAddDeck(state, action);
    case ADD_CARD:
      return handleAddCard(state, action);
    default:
      return state;
  }
};
