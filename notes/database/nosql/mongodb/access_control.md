---
title: Access Control
---

## Enable Authentication

For authentication, we need an admin account.

Certify that mongod is running without access control.

```shell
mongod
```

Connect to mongo shell.

```shell
mongo
```

Then create an admin account with the following command.

```javascript
use admin
db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
exit
```

Now we can start mongod with access control.

```shell
mongod --auth
```

To apply it permanently,
change the mongod configuration.

For Linux it is on `/etc/mongod.conf`,
for OSX it is on `/usr/local/etc/mongod.conf`.
Add the following lines to the end of the file.

```yaml
security:
 authorization: enabled
```

To apply those changes, restart mongod.

```shell
sudo service mongod restart    # Linux
brew services restart mongodb  # OSX
```

### Usage

Connect to mongo with the admin account.

```shell
mongo -u "admin" -p --authenticationDatabase "admin"
use admin
```

Create some users.

```javascript
use my_db
db.createUser(
  {
    user: "my_user",
    pwd: "xyz123",
    roles: [{ role: "readWrite", db: "my_db" }]
  }
)
exit
```

Login as user.

```shell
mongo -u "my_user" -p --authenticationDatabase "my_db"
use my_db
```

Update user permissions.

```shell
mongo -u "admin" -p --authenticationDatabase "admin"
```

```javascript
use my_db
db.updateUser(
  "my_user"
  {
    roles: [{ role: "read", db: "my_db" }]
  }
)
```

## Roles

[Built in roles](https://docs.mongodb.com/manual/reference/built-in-roles/)

### User

- read
- readWrite

### Admin

- userAdmin
- dbAdmin
- dbOwner

### Users in admin database

- readAnyDatabase
- readWriteAnyDatabase
- userAdminAnyDatabase
- dbAdminAnyDatabase

### Superuser

- root
