---
id: config
title: Config YAML
---

You configure Cody through a YAML configuration file stored in your repository.
The configuration file must be named `.cody.yml` and must be located in the root
of the repository.

## Config loading

Cody will only load config from your repository's default branch, usually your
master branch. The configuration is refreshed whenever a new push is detected
on your repository.

## Config validation

If your configuration file is invalid, Cody will ignore it and use any cached
configuration for your repository that is stored. To validate your configuration
file, you can POST it to the following URL:

```text
$ curl --data-binary @cody.yml https://www.codybot.xyz/config/validate
```

If there are validation errors, the errors will be returned as a JSON array in
the response. Otherwise, the response will be 200 OK.

## Repository options

Repository configuration options set various options for the repository as a
whole. These options are specified at the top level of the YAML file.

### `minimum_reviewers_required`

| Type    | Default |
| ------- | ------- |
| Integer | 0       |

Sets the minimum number of peer reviewers required on every PR in the
repository. This number is counted before any reviewers are added by review
rules. Defaults to 0.

## Review Rule options

Review rule options are nested under the `rules` key in the YAML file. See
[Rule Config](rule_config.md) for more details.
