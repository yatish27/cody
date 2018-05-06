import React from "react";
import renderer from "react-test-renderer";
import PullRequestDetail from "../PullRequestDetail";

test("PullRequestDetail snapshot test", () => {
  const props = {
    repository: "aergonaut/testrepo",
    number: "1234",
    status: "pending_review"
  };
  const component = renderer.create(<PullRequestDetail pullRequest={props} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
