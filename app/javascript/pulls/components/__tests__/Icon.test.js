import React from "react";
import renderer from "react-test-renderer";
import Icon from "../Icon";

test("Icon snapshot test", () => {
  const component = renderer.create(<Icon icon="user-circle" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
