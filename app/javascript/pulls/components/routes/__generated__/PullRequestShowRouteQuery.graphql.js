/**
 * @flow
 * @relayHash 5504446364cc3f830d0ed87d3e6ec51e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PullRequestDetail_pullRequest$ref = any;
export type PullRequestShowRouteQueryVariables = {|
  owner: string,
  name: string,
  number: string,
|};
export type PullRequestShowRouteQueryResponse = {|
  +viewer: ?{|
    +repository: ?{|
      +pullRequest: ?{|
        +$fragmentRefs: PullRequestDetail_pullRequest$ref,
      |},
    |},
  |},
|};
*/


/*
query PullRequestShowRouteQuery(
  $owner: String!
  $name: String!
  $number: String!
) {
  viewer {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        ...PullRequestDetail_pullRequest
        id
      }
      id
    }
    id
  }
}

fragment PullRequestDetail_pullRequest on PullRequest {
  id
  repository
  number
  status
  reviewers {
    edges {
      node {
        id
        ...Reviewer_reviewer
      }
    }
  }
}

fragment Reviewer_reviewer on Reviewer {
  id
  login
  status
  reviewRule {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "owner",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "number",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner",
    "type": "String!"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "number",
    "variableName": "number",
    "type": "String!"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PullRequestShowRouteQuery",
  "id": null,
  "text": "query PullRequestShowRouteQuery(\n  $owner: String!\n  $name: String!\n  $number: String!\n) {\n  viewer {\n    repository(owner: $owner, name: $name) {\n      pullRequest(number: $number) {\n        ...PullRequestDetail_pullRequest\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment PullRequestDetail_pullRequest on PullRequest {\n  id\n  repository\n  number\n  status\n  reviewers {\n    edges {\n      node {\n        id\n        ...Reviewer_reviewer\n      }\n    }\n  }\n}\n\nfragment Reviewer_reviewer on Reviewer {\n  id\n  login\n  status\n  reviewRule {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PullRequestShowRouteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repository",
            "storageKey": null,
            "args": v1,
            "concreteType": "Repository",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pullRequest",
                "storageKey": null,
                "args": v2,
                "concreteType": "PullRequest",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "PullRequestDetail_pullRequest",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PullRequestShowRouteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repository",
            "storageKey": null,
            "args": v1,
            "concreteType": "Repository",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pullRequest",
                "storageKey": null,
                "args": v2,
                "concreteType": "PullRequest",
                "plural": false,
                "selections": [
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "repository",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "number",
                    "args": null,
                    "storageKey": null
                  },
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "reviewers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ReviewerConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ReviewerEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Reviewer",
                            "plural": false,
                            "selections": [
                              v3,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "login",
                                "args": null,
                                "storageKey": null
                              },
                              v4,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "reviewRule",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ReviewRule",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "name",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v3
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v3
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1900aaec102c954e4acc2c84dab6a9ec';
module.exports = node;
