import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Reviewer from "../Reviewer";

test("Reviewer snapshot test", () => {
  const props = {
    login: "aergonaut",
    reviewRule: {
      name: "Foo Review"
    }
  };
  const component = renderer.create(<Reviewer reviewer={props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Reviewer renders the reviewer's login", () => {
  const component = shallow(<Reviewer reviewer={{ login: "aergonaut" }} />);
  expect(component.text()).toMatch("aergonaut");
});

test("Reviewer renders the review rule name if it is given", () => {
  const props = {
    login: "aergonaut",
    reviewRule: {
      name: "Foo Review"
    }
  };
  const component = shallow(<Reviewer reviewer={props} />);
  expect(component.text()).toMatch(props.reviewRule.name);
});
