
const INITIAL_STATE = {};
export const RECEIVE_DECKS = "decks/receive";
export const ADD_DECK = "decks/add";

export const decksSelector = (state) => state.decks;

export const receiveDecksAction = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const addDeckAction = deck => ({
  type: ADD_DECK,
  deck
});

const handleReceiveDecks = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.decks;
  return clonedState;
};

const handleAddDeck = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.deck.title] = action.deck;
  return clonedState;
};

export const decksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return handleReceiveDecks(state, action);
    case ADD_DECK:
      return handleAddDeck(state, action);
    default:
      return state;
  }
};