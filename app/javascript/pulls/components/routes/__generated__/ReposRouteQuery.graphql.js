/**
 * @flow
 * @relayHash e262c41587a878d055f1d32646caffb1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepositoryList_viewer$ref = any;
export type ReposRouteQueryVariables = {| |};
export type ReposRouteQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: RepositoryList_viewer$ref,
  |},
|};
*/


/*
query ReposRouteQuery {
  viewer {
    ...RepositoryList_viewer
    id
  }
}

fragment RepositoryList_viewer on User {
  repositories(first: 10) {
    edges {
      node {
        id
        ...Repository_repository
      }
    }
  }
}

fragment Repository_repository on Repository {
  id
  owner
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ReposRouteQuery",
  "id": null,
  "text": "query ReposRouteQuery {\n  viewer {\n    ...RepositoryList_viewer\n    id\n  }\n}\n\nfragment RepositoryList_viewer on User {\n  repositories(first: 10) {\n    edges {\n      node {\n        id\n        ...Repository_repository\n      }\n    }\n  }\n}\n\nfragment Repository_repository on Repository {\n  id\n  owner\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReposRouteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "kind": "FragmentSpread",
            "name": "RepositoryList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReposRouteQuery",
    "argumentDefinitions": [],
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
            "name": "repositories",
            "storageKey": "repositories(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Repository",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "owner",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '7f2d6f5e29b8d124c929d91fcb568752';
module.exports = node;
