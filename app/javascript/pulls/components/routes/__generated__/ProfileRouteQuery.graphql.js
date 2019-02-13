/**
 * @flow
 * @relayHash 452e4544c8aa4ab7eb995594a95a3abc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Profile_user$ref = any;
export type ProfileRouteQueryVariables = {| |};
export type ProfileRouteQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Profile_user$ref,
  |},
|};
*/


/*
query ProfileRouteQuery {
  viewer {
    ...Profile_user
    id
  }
}

fragment Profile_user on User {
  login
  email
  name
  sendNewReviewsSummary
  timezone
  paused
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProfileRouteQuery",
  "id": null,
  "text": "query ProfileRouteQuery {\n  viewer {\n    ...Profile_user\n    id\n  }\n}\n\nfragment Profile_user on User {\n  login\n  email\n  name\n  sendNewReviewsSummary\n  timezone\n  paused\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileRouteQuery",
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
            "name": "Profile_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileRouteQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "login",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
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
            "name": "sendNewReviewsSummary",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "timezone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "paused",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '33f7dd37035c44a4d6e457484fd1dc99';
module.exports = node;
