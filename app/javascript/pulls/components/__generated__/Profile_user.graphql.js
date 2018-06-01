/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Profile_user$ref: FragmentReference;
export type Profile_user = {|
  +login: string,
  +email: ?string,
  +name: string,
  +sendNewReviewsSummary: boolean,
  +sendReviewRequestedNotifications: boolean,
  +$refType: Profile_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Profile_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "sendReviewRequestedNotifications",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'b0ef3fb3de5a86f1da21c25efa9868dd';
module.exports = node;
