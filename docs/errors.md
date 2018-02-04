---
id: errors
title: Errors
---

Occasionally, Cody will encounter a problem with a Pull Request and need to
report an error. Cody reports errors as failed commit statuses on the Pull
Request with an error code and short message.

### Error Code: APRICOT

> APRICOT: Too few reviewers are listed

This error appears when the Pull Request did not list enough peer reviewers to
satisfy the repository's minimum reviewers requirement. Note that this number is
counted **before** generating reviewers.

### Error Code: PLUM

> PLUM: Reviewers are not collaborators on this repository

This error appears when you attempt to assign a user who is not a collaborator
on the repository as a reviewer. Users must have the ability to view Pull
Requests on a repository in order to be assigned as a reviewer.
