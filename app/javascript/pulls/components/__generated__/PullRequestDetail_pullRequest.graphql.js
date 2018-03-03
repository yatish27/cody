/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Reviewer_reviewer$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PullRequestDetail_pullRequest$ref: FragmentReference;
export type PullRequestDetail_pullRequest = {|
  +id: string,
  +repository: string,
  +number: string,
  +status: string,
  +reviewers: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Reviewer_reviewer$ref,
      |},
    |}>,
  |},
  +$refType: PullRequestDetail_pullRequest$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PullRequestDetail_pullRequest",
  "type": "PullRequest",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
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
                v0,
                {
                  "kind": "FragmentSpread",
                  "name": "Reviewer_reviewer",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '486be7075a09cfde0c3fbd0aa9f5aaf2';
module.exports = node;
