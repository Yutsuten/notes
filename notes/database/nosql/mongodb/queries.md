---
title: Queries
---

## Database

| Command | Description |
| --- | --- |
| `db` | Show current database. |
| `show dbs` | Show available databases. |
| `use my_db` | Switch/create database. |
| `db.dropDatabase()` | Drop current database. |

## Collection

| Command | Description |
| --- | --- |
| `show collections` | Show collections (tables). |
| `db.groups` `db.getCollection('groups')` | Access a collection (ex: `groups`). |
| `db.groups.renameCollection('party')` | Rename collection. |
| `db.groups.drop()` | Drop collection. |

## Select

```javascript
db.groups.find({})                                           // All
db.groups.find({name: 'party1'})                             // Query
db.groups.find({name: 'party1'}, {type: 'party'})            // Query with AND
db.groups.find({$or: [{name: 'party1'}, {name: 'party2'}]})  // Query with OR
db.groups.count()                                            // Number of matches
db.groups.find(query).pretty()                               // Prettify
```

## Insert

Automatically creates the collection if it does not exist.

```javascript
db.groups.insertOne({'name': 'party1', 'type': 'party'})
db.groups.insertMany([
  {'name': 'party1', 'type': 'party'},
  {'name': 'party2', 'type': 'party'}
])
```

## Update

```javascript
db.groups.update({_id: 'f43nm39f'}, {$set: {'name': 'cool_party'}})
db.groups.update({_id: 'f43nm39f'}, {$set: {'member_count': NumberInt(2)}})
db.groups.update({_id: 'f43nm39f'}, {$set: {'settings.type': 'party'}})    // Embedded object
db.groups.update({_id: 'f43nm39f'}, {$set: {'members.0.name': 'leader'}})  // Array
db.groups.find({}).forEach(function(obj) {
  obj.id = NumberInt(obj.id);
  db.groups.save(obj);
})
```

Rename a field:

```javascript
db.groups.updateMany({}, {$rename: {'type': 'category'}})
```

Remove a field from one or multiple matches:

```javascript
db.groups.update({_id: 'f43nm39f'}, {$unset: {'member_count': ''}})               // One
db.groups.update({'name': 'wat'}, {$unset: {'member_count': ''}}, {multi: true})  // Multiple
```

## Remove

```javascript
db.groups.remove({_id: 'f43nm39f'})
```
