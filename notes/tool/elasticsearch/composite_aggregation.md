---
title: Composite aggregation
ref: https://www.elastic.co/guide/en/elasticsearch/reference/6.8/search-aggregations-bucket-composite-aggregation.html
---

```shell
curl -X GET "http://localhost:9200/my-index-000001/_search?pretty" -H 'Content-Type: application/json' -d "${JSON}"
```

```json
{
  "aggs": {
    "item_count": {
      "composite": {
        "size": 100,
        "sources": [
          {
            "nameIdentifier": {
              "terms": {
                "field": "tag.keyword"
              }
            }
          }
        ]
      }
    }
  }
}
```
