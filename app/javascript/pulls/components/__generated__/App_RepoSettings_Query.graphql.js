/**
 * @flow
 * @relayHash 4356d738506d2674bdc9fc7a2a3063af
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ReviewRuleDetail_reviewRule$ref = any;
export type App_RepoSettings_QueryVariables = {|
  owner: string,
  name: string,
  shortCode: string,
|};
export type App_RepoSettings_QueryResponse = {|
  +viewer: ?{|
    +repository: ?{|
      +reviewRule: ?{|
        +$fragmentRefs: ReviewRuleDetail_reviewRule$ref,
      |},
    |},
  |},
|};
*/


/*
query App_RepoSettings_Query(
  $owner: String!
  $name: String!
  $shortCode: String!
) {
  viewer {
    repository(owner: $owner, name: $name) {
      reviewRule(shortCode: $shortCode) {
        ...ReviewRuleDetail_reviewRule
        id
      }
      id
    }
    id
  }
}

fragment ReviewRuleDetail_reviewRule on ReviewRule {
  id
  repository
  name
  shortCode
  type
  reviewer
  match
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
    "name": "shortCode",
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
    "name": "shortCode",
    "variableName": "shortCode",
    "type": "String!"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "App_RepoSettings_Query",
  "id": null,
  "text": "query App_RepoSettings_Query(\n  $owner: String!\n  $name: String!\n  $shortCode: String!\n) {\n  viewer {\n    repository(owner: $owner, name: $name) {\n      reviewRule(shortCode: $shortCode) {\n        ...ReviewRuleDetail_reviewRule\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment ReviewRuleDetail_reviewRule on ReviewRule {\n  id\n  repository\n  name\n  shortCode\n  type\n  reviewer\n  match\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "App_RepoSettings_Query",
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
                "name": "reviewRule",
                "storageKey": null,
                "args": v2,
                "concreteType": "ReviewRule",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ReviewRuleDetail_reviewRule",
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
    "name": "App_RepoSettings_Query",
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
                "name": "reviewRule",
                "storageKey": null,
                "args": v2,
                "concreteType": "ReviewRule",
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
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "shortCode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "reviewer",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "match",
                    "args": null,
                    "storageKey": null
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
(node/*: any*/).hash = '336fd1b9891fd3b03458f60b45d0b99d';
module.exports = node;
