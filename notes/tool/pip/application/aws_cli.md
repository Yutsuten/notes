---
title: Aws cli
---

## Install

```shell
sudo pip install awscli
```

## Configure

```shell
aws configure
aws configure --profile name

## See profiles
cat ~/.aws/config
cat ~/.aws/credentials
```

### Change current profile

```shell
export AWS_PROFILE=name
```
