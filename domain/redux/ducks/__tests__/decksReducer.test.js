import {
  addCardAction,
  addDeckAction,
  decksReducer,
  receiveDecksAction
} from "../decksReducer";

describe("Decks reducer", () => {
  it("should set initial decks", () => {
    const initialState = {};

    const initialDecks = {
      "20e23793bcda4ecfab92affcb25bbae8": {
        id: "20e23793bcda4ecfab92affcb25bbae8",
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      "7794b64fd03d4df587d1e592f7945b6f": {
        id: "7794b64fd03d4df587d1e592f7945b6f",
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    };

    const expectedState = {
      "20e23793bcda4ecfab92affcb25bbae8": {
        id: "20e23793bcda4ecfab92affcb25bbae8",
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      "7794b64fd03d4df587d1e592f7945b6f": {
        id: "7794b64fd03d4df587d1e592f7945b6f",
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    };

    expect(
      decksReducer(initialState, receiveDecksAction(initialDecks))
    ).toEqual(expectedState);
  });

  it("should add deck", () => {
    const initialState = {
      "20e23793bcda4ecfab92affcb25bbae8": {
        id: "20e23793bcda4ecfab92affcb25bbae8",
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      "7794b64fd03d4df587d1e592f7945b6f": {
        id: "7794b64fd03d4df587d1e592f7945b6f",
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    };

    const deckToAdd = {
      title: "NewDeck",
      questions: [],
      id: "8ec4c9ca62754db4b396d1c8f01b6947"
    };

    const expectedState = {
      "20e23793bcda4ecfab92affcb25bbae8": {
        id: "20e23793bcda4ecfab92affcb25bbae8",
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      "7794b64fd03d4df587d1e592f7945b6f": {
        id: "7794b64fd03d4df587d1e592f7945b6f",
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      },
      "8ec4c9ca62754db4b396d1c8f01b6947": {
        id: "8ec4c9ca62754db4b396d1c8f01b6947",
        title: "NewDeck",
        questions: []
      }
    };

    expect(decksReducer(initialState, addDeckAction(deckToAdd))).toEqual(
      expectedState
    );
  });

  it("should add deck when dont have add deck yet", () => {
    const initialState = {};

    const deckToAdd = {
      title: "NewDeck",
      questions: [],
      id: "8ec4c9ca62754db4b396d1c8f01b6947"
    };

    const expectedState = {
      "8ec4c9ca62754db4b396d1c8f01b6947": {
        id: "8ec4c9ca62754db4b396d1c8f01b6947",
        title: "NewDeck",
        questions: []
      }
    };

    expect(decksReducer(initialState, addDeckAction(deckToAdd))).toEqual(
      expectedState
    );
  });

  it("should add card to a specific deck", () => {
    const initialState = {
      "20e23793bcda4ecfab92affcb25bbae8": {
        id: "20e23793bcda4ecfab92affcb25bbae8",
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      "7794b64fd03d4df587d1e592f7945b6f": {
        id: "7794b64fd03d4df587d1e592f7945b6f",
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      },
      "8ec4c9ca62754db4b396d1c8f01b6947": {
        id: "8ec4c9ca62754db4b396d1c8f01b6947",
        title: "NewDeck",
        questions: []
      }
    };

    const cardToAdd = {
      question: "Is that a new question?",
      answer: "It is"
    };

    const deckToAddCard = "8ec4c9ca62754db4b396d1c8f01b6947";

    const expectedState = {
      "20e23793bcda4ecfab92affcb25bbae8": {
        id: "20e23793bcda4ecfab92affcb25bbae8",
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      "7794b64fd03d4df587d1e592f7945b6f": {
        id: "7794b64fd03d4df587d1e592f7945b6f",
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      },
      "8ec4c9ca62754db4b396d1c8f01b6947": {
        id: "8ec4c9ca62754db4b396d1c8f01b6947",
        title: "NewDeck",
        questions: [
          {
            question: "Is that a new question?",
            answer: "It is"
          }
        ]
      }
    };

    expect(
      decksReducer(initialState, addCardAction(deckToAddCard, cardToAdd))
    ).toEqual(expectedState);
  });
});
