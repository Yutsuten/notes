---
title: Firewall
ref: https://wiki.archlinux.org/title/Firewalld
---

## Usage

Firewall daemon developed by Red Hat.

```shell
firewall-cmd OPTIONS
```

### Zone options

| Option | Description |
| --- | --- |
| `--get-default-zone` | Print default zone for connections and interfaces. |
| `--set-default-zone` | Set default zone for connections and interfaces where no zone has been selected. |
| `--list-all-zones` | List everything added for or enabled in all zones. |

### Options to Adapt and Query Zones and Policies

These affect only one particular zone or policy.

| Option | Description |
| --- | --- |
| `--zone` | Affect only one particular zone. |
| `--policy` | Affect only one particular policy. |
| `--add-rich-rule` | Add rich language rule. |
| `--remove-rich-rule` | Remove rich language rule. |
| `--list-rich-rules` | List rich language rules. |

### Direct options

:::warning
The direct interface has been deprecated.
:::

| Option | Description |
| --- | --- |
| `--direct` `--get-all-chains` | Get all chains added to all tables. |
| `--add-rule` | Add a rule with the given arguments. |
| `--remove-rule` | Remove a rule. |
| `--get-all-rules` | Get all rules added to all chains in all tables. |

## Example

Reject requests to port 80 from a defined address.

```shell
firewall-cmd --zone=internal --add-rich-rule 'rule family="ipv4" source address="192.168.0.0/24" port port="80" protocol="tcp" reject'
```
