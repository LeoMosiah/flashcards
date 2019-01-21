import { AsyncStorage } from 'react-native'
import { initialData } from './initialData';

export const DECKS_STORAGE_KEY = 'Flashcards:decks';

export const fetchInitialData = async () => {
  try {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
  } catch (error) {
    console.log(error)
  }
};

export const getDecks =  () => {
  return  AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => JSON.parse(results))
};

export const getDeck =  (id) => {
    return  AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => JSON.parse(results)[id])
};

export const addDeck = (title) => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
};

export const addCardToDeck =  (title, card) => {
  return  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    ...title,
    card
  }))
};