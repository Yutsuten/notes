---
title: Query
ref: https://www.elastic.co/guide/en/elasticsearch/reference/6.8/query-dsl-terms-query.html
---

## Reserved characters

```txt
+ - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \ /
```

To query those characters, prepend with a backslash,
or make the expression a single word by surrounding it with double quotes.

## Curl

```shell
curl -X GET "localhost:9200/_search?pretty" -H 'Content-Type: application/json' -d "${JSON}"
```

```json
{
  "query": {
    "terms": {
      "user": ["Yutsuten", "Taro"]
    }
  }
}
```
