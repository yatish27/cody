/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PullRequest_pullRequest$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PullRequestList_repository$ref: FragmentReference;
export type PullRequestList_repository = {|
  +pullRequests: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: PullRequest_pullRequest$ref,
      |},
    |}>,
  |},
  +id: string,
  +$refType: PullRequestList_repository$ref,
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
  "name": "PullRequestList_repository",
  "type": "Repository",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "pullRequests"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "pullRequests",
      "name": "__PullRequestList_pullRequests_connection",
      "storageKey": null,
      "args": null,
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
                v0,
                {
                  "kind": "FragmentSpread",
                  "name": "PullRequest_pullRequest",
                  "args": null
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
    v0
  ]
};
})();
(node/*: any*/).hash = '0d6319e9de0f8e4643369cc034d92148';
module.exports = node;
