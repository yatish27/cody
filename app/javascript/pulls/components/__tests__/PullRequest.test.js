import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import PullRequest from "../PullRequest";

test("PullRequest snapshot test", () => {
  const props = {
    number: "1234",
    repository: "aergonaut/testrepo",
    status: "pending_review"
  };
  const component = renderer.create(
    <MemoryRouter>
      <PullRequest pullRequest={props} />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
