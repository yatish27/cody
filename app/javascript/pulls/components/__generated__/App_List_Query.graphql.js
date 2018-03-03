/**
 * @flow
 * @relayHash 65e6c2b2406899e89838bc0db2515e4d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PullRequestList_repository$ref = any;
export type App_List_QueryVariables = {|
  owner: string,
  name: string,
  cursor?: ?string,
|};
export type App_List_QueryResponse = {|
  +viewer: ?{|
    +repository: ?{|
      +$fragmentRefs: PullRequestList_repository$ref,
    |},
    +login: string,
    +name: string,
  |},
|};
*/


/*
query App_List_Query(
  $owner: String!
  $name: String!
  $cursor: String
) {
  viewer {
    repository(owner: $owner, name: $name) {
      ...PullRequestList_repository
      id
    }
    login
    name
    id
  }
}

fragment PullRequestList_repository on Repository {
  pullRequests(first: 10, after: $cursor) {
    edges {
      node {
        id
        ...PullRequest_pullRequest
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment PullRequest_pullRequest on PullRequest {
  id
  repository
  number
  status
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
    "name": "cursor",
    "type": "String",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "App_List_Query",
  "id": null,
  "text": "query App_List_Query(\n  $owner: String!\n  $name: String!\n  $cursor: String\n) {\n  viewer {\n    repository(owner: $owner, name: $name) {\n      ...PullRequestList_repository\n      id\n    }\n    login\n    name\n    id\n  }\n}\n\nfragment PullRequestList_repository on Repository {\n  pullRequests(first: 10, after: $cursor) {\n    edges {\n      node {\n        id\n        ...PullRequest_pullRequest\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment PullRequest_pullRequest on PullRequest {\n  id\n  repository\n  number\n  status\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "App_List_Query",
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
                "kind": "FragmentSpread",
                "name": "PullRequestList_repository",
                "args": null
              }
            ]
          },
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_List_Query",
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
                "name": "pullRequests",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "concreteType": "PullRequestConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PullRequestEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PullRequest",
                        "plural": false,
                        "selections": [
                          v4,
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "status",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "pullRequests",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "PullRequestList_pullRequests",
                "filters": null
              },
              v4
            ]
          },
          v2,
          v3,
          v4
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1daf4287f47476718262ddbc47d59ba2';
module.exports = node;
