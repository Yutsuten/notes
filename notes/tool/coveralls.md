---
title: Coveralls
---

If you set `parallel` to true,
a post webhook is needed after all tests run.

```shell
curl -k https://coveralls.io/webhook?repo_token=${COVERALLS_REPO_TOKEN} -d "payload[build_num]=${GITHUB_SHA}$([[ $(echo ${GITHUB_REF} | cut -d / -f 2) == 'pull' ]] && echo -PR-$(echo ${GITHUB_REF} | cut -d / -f 3))&payload[status]=done"
```
