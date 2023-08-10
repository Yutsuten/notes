---
title: Replication
ref: https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/
---

## Replica Set

Create 3 separate folders for each instance,
then start 3 instances of mongod.
Hostname is the local IP address.

```shell
mkdir -p mongodb/rs0-0  mongodb/rs0-1 mongodb/rs0-2

mongod --replSet rs0 --port 27018 --bind_ip localhost,<private IP> --dbpath mongodb/rs0-0 --fork --logpath mongodb-0.log
mongod --replSet rs0 --port 27019 --bind_ip localhost,<private IP> --dbpath mongodb/rs0-1 --fork --logpath mongodb-1.log
mongod --replSet rs0 --port 27020 --bind_ip localhost,<private IP> --dbpath mongodb/rs0-2 --fork --logpath mongodb-2.log

--fork --logpath ~/mongod-rs0.log  # For running in background
```

Use `--smallfiles --oplogSize 128` for debug purposes.

Connect to one instance.

```shell
mongo --port 27018
```

Configure the replica set.

```js
rsconf = {
  _id: "rs0",
  members: [
    {
     _id: 0,
     host: "<hostname>:27018"
    },
    {
     _id: 1,
     host: "<hostname>:27019"
    },
    {
     _id: 2,
     host: "<hostname>:27020"
    }
   ]
}

rs.initiate(rsconf)
```

Check the current configuration with the following command.

```js
rs.conf()
```

### Adjust priority

```js
cfg = rs.conf()
cfg.members[0].priority = 2    // Primary
cfg.members[1].priority = 0.5  // Secondary
cfg.members[2].priority = 0.5  // Secondary

rs.reconfig(cfg)
```

### Read from Secondary

Set this on every mongo instance

```js
db.getMongo().setReadPref('secondaryPreferred')
db.getMongo().setSlaveOk()
```
