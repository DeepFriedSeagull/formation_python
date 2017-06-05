GET /

PUT /indonesia/city/1 
{
  "island":"Java",
  "name":"Jakarta",
  "population":9588198
}

GET /indonesia/city/1

GET /indonesia

GET /indonesia/city

POST /indonesia/city
{
  "island":"Java",
  "name":"Surabaya",
  "population":2765487
}

# SEARCH
GET /indonesia/city/_search

# Check if Exist
HEAD /indonesia/city/AVx3xhifRoLP9DeRopXj

DELETE /indonesia/city/AVx4EJZsRoLP9DeRopXr

POST /_bulk
{"index": {"_index":"indonesia","_type":"city" } }
{"island":"Java","name":"Bandung", "population":2575478 } 

POST /indonesia/city2/_bulk
{"index":{}}
{"island":"Java","name":"Jakarta","population":9588198}
{"index":{}}
{"island":"Java","name":"Surabaya","population":2765487}
{"index":{}}
{"island":"Java","name":"Bandung","population":2575478}
{"index":{}}
{"island":"Java","name":"Bekasi","population":2510951}

# 

PUT indonesia/city/AVx4EJEaRoLP9DeRopXq
{
  "jemetce que je veux":"et j'ai tout écrasé"
}

POST indonesia/city/AVx4EJEaRoLP9DeRopXq/_update
{
  "doc":  {
    "island":"Java",
    "name":"Bandung",
    "population":2575478
  }
}

POST indonesia/city/AVx4EJEaRoLP9DeRopXq/_update
{
  "script": "ctx._source.population+=2300"
}

# Simple SEARCH

GET /_search?q=name:Jakarta

GET /_all/city/_search?q=name:Jakarta

GET /_search?q=%2Bname%3AJakarta+%2Bisland%3AJava

POST /indonesia/city
{
  "emptyfield":"Jakarta"
}

GET /_search?q="Jakarta"

#Query DSL( Query Domain Specific Language)
GET /indonesia/city/_search
{
    "query" : {
        "match" : {
            "island" : "Java"
        }
    }
}



GET /indonesia/city/_search
{
  "query": {
    "bool": {
      "must": {
        "match": {
          "island": "Java"
        }
      },
      "filter": {
        "range": {
          "population": {
            "gte": 2600000,
            "lte": 5000000
          }
        }
      }
    } 
  }
}

GET /indonesia/city/_search
{
  "aggs": {
    "toutes_les_villes": {
      "terms": {
        "field": "island.keyword"
      }
    }
  }
}