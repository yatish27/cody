/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ReviewRuleList_repository$ref: FragmentReference;
export type ReviewRuleList_repository = {|
  +owner: string,
  +name: string,
  +reviewRules: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +shortCode: string,
        +match: string,
        +reviewer: string,
      |},
    |}>,
  |},
  +$refType: ReviewRuleList_repository$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ReviewRuleList_repository",
  "type": "Repository",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "reviewRules"
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
      "kind": "ScalarField",
      "alias": null,
      "name": "owner",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "LinkedField",
      "alias": "reviewRules",
      "name": "__ReviewRuleList_reviewRules_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "ReviewRuleConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ReviewRuleEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ReviewRule",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                v0,
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
                  "name": "match",
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
    }
  ]
};
})();
(node/*: any*/).hash = 'd6c37345689dceccaa70871bbe9aa0f6';
module.exports = node;
