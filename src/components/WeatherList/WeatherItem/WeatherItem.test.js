import React from "react";
import { shallow } from "enzyme";
import WeatherItem from "./WeatherItem";

describe("WeatherItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
