/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ReviewRuleDetail_reviewRule$ref: FragmentReference;
export type ReviewRuleDetail_reviewRule = {|
  +id: string,
  +repository: string,
  +name: string,
  +shortCode: string,
  +type: string,
  +reviewer: string,
  +match: string,
  +$refType: ReviewRuleDetail_reviewRule$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ReviewRuleDetail_reviewRule",
  "type": "ReviewRule",
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
};
(node/*: any*/).hash = '24ceab298bcee7cbd293c2c066138044';
module.exports = node;
