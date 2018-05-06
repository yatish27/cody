import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import Repository from "../Repository";

test("Repository snapshot test", () => {
  const props = {
    owner: "aergonaut",
    name: "testrepo"
  };
  const component = renderer.create(
    <MemoryRouter>
      <Repository repository={props} />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
