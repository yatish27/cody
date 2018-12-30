/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type ReviewerStatus = ('APPROVED' | 'PENDING_APPROVAL' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Reviewer_reviewer$ref: FragmentReference;
export type Reviewer_reviewer = {|
  +id: string,
  +login: string,
  +status: ReviewerStatus,
  +reviewRule: ?{|
    +name: string,
  |},
  +$refType: Reviewer_reviewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Reviewer_reviewer",
  "type": "Reviewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "name": "status",
      "args": null,
      "storageKey": null
    },
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
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '060f4ec9b61f4dabdbb5aaa7bdcdd942';
module.exports = node;
