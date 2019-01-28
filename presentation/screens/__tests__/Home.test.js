import React from "react";
import { shallow } from "enzyme";
import { Home } from "../Home";

const props = {};

const deckMock = {
  "react native": {
    title: "react native",
    questions: []
  }
};

const anotherDeckMock = {
  react: {
    title: "react",
    questions: []
  }
};

describe("<Home />", () => {
  let wrapper = shallow(<Home {...props} />);
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
    instance = wrapper.instance();
  });

  it("exposes add deck", () => {
    instance.addDeck(deckMock);

    expect(instance.state).toEqual({
      decks: { deckMock }
    });
  });

  it("adds two or more decks", () => {
    instance.addDeck(deckMock);
    instance.addDeck(anotherDeckMock);

    expect(instance.state).toEqual({
      decks: { deckMock, anotherDeckMock },
      title: ""
    });
  });
});
