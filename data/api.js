import { AsyncStorage } from "react-native";
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

export const addCardToDeck = async (deckId, card) => {
  const decks = JSON.parse(await AsyncStorage.getItem(DECKS_STORAGE_KEY));
  await AsyncStorage.setItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      ...decks,
      [deckId]: {
        ...decks[deckId],
        questions: [card, ...decks[deckId].questions]
      }
    })
  );
};

export const clearLocalNotifcation = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY);
  return await Notifications.cancelAllScheduledNotificationsAsync();
};

const createNotification = () => ({
  title: "I haven't studied yer",
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
});

export const setLocalNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const notification = JSON.parse(data);

  if (!notification) {
    const notificationInfo = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );
    const { status } = notificationInfo;

    if (status === "granted") {
      await Notifications.cancelAllScheduledNotificationsAsync();

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
  }
};
