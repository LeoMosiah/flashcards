import React from "react";
import { shallow } from "enzyme";
import { Home } from "../Home";

const props = {};

describe("<Home />", () => {
  let wrapper = shallow(<Home {...props} />);

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it("render without crash", () => {
    expect(wrapper).not.toBeNull();
  });
});
