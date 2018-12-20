/**
 * @flow
 * @relayHash 069df092c1421f42255abf733e41f9d3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Profile_user$ref = any;
export type ProfileUpdateUserMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    email: string,
    paused: boolean,
    sendNewReviewsSummary: boolean,
  },
|};
export type ProfileUpdateUserMutationResponse = {|
  +updateUser: ?{|
    +user: ?{|
      +$fragmentRefs: Profile_user$ref,
    |},
  |},
|};
*/


/*
mutation ProfileUpdateUserMutation(
  $input: UpdateUserInput!
) {
  updateUser(input: $input) {
    user {
      ...Profile_user
      id
    }
  }
}

fragment Profile_user on User {
  login
  email
  name
  sendNewReviewsSummary
  paused
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UpdateUserInput!"
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ProfileUpdateUserMutation",
  "id": null,
  "text": "mutation ProfileUpdateUserMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    user {\n      ...Profile_user\n      id\n    }\n  }\n}\n\nfragment Profile_user on User {\n  login\n  email\n  name\n  sendNewReviewsSummary\n  paused\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileUpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileUpdateUserMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
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
    ]
  }
};
})();
(node/*: any*/).hash = 'd2c15d85fccefb3d07eb89f423f2284b';
module.exports = node;
