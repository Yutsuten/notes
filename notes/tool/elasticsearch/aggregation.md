---
title: Aggregation
ref: https://www.elastic.co/guide/en/elasticsearch/reference/6.8/search-aggregations-bucket-terms-aggregation.html
---

```shell
curl -X GET "http://localhost:9200/my-index-000001/_search?pretty" -H 'Content-Type: application/json' -d "${JSON}"
```

```json
{
  "aggs": {
    "mycount": {
      "terms": {
        "size": 50,
        "field": "account.type",
        "include": ["common", "admin"]
      }
    }
  }
}
```

Even when you have array of objects, the syntax is the same as if there were no arrays.

Sometimes you may need to check the **Field mapping** to see some hidden fields.
For example, `user.name` may be a text and therefore cannot be aggregated,
but `user.name.keyword` may be of type keyword and can be aggregated.
