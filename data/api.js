import { AsyncStorage } from "react-native";
import { initialData } from "./initialData";
import { Notifications, Permissions } from "expo";

export const DECKS_STORAGE_KEY = "Flashcards:decks";
export const NOTIFICATION_KEY = "Flashcards:notifications";

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results =>
    JSON.parse(results)
  );
};

export const addDeck = deck => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: {
        id: deck.id,
        title: deck.title,
        questions: deck.questions
      }
    })
  );
};

export const addCardToDeck = (deckId, card) => {
  const deck = AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => result)
    .deckId;

  deck.questions.push(card);

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
};

export const fetchInitialData = () => {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData));
};

export function clearLocalNotiifcation() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function createNotification() {
  return {
    title: "Study status",
    body: "don't forget to study today",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
