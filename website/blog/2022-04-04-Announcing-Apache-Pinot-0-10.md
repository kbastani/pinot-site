---
title: Announcing Apache Pinot 0.10
author: Apache Pinot Engineering Team
author_title: Apache Pinot Engineering Team
author_url: https://twitter.com/ApachePinot
author_image_url: https://pinot.apache.org/authors/pinot_team.jpg
description:
  Learn more about the release of Apache Pinot 0.10 and all of new features that have been included in this version of the product.
keywords:
    - Apache Pinot
    - Apache Pinot Releases
    - Apache Pinot 0.10.0
tags: [Pinot, Data, Analytics, User-Facing Analytics, Releases]
---

We are excited to announce the release this week of Apache Pinot 0.10.
Apache Pinot is a real-time distributed datastore designed to answer OLAP queries with high throughput and low latency.

This release is cut from commit [fd9c58a11ed16d27109baefcee138eea30132ad3](https://github.com/apache/pinot/commit/fd9c58a11ed16d27109baefcee138eea30132ad3).
You can find a full list of everything included in the [release notes](https://docs.pinot.apache.org/basics/releases/0.10.0).

Let’s have a look at some of the changes, with the help of the batch [QuickStart configuration](https://docs.pinot.apache.org/basics/getting-started/running-pinot-in-docker).

## Query Plans

Amrish Lal implemented the `EXPLAIN PLAN` clause, which returns the execution plan that will be chosen by the Pinot Query Engine.
This lets us see what the query is likely to do without actually having to run it.

```sql
EXPLAIN PLAN FOR
SELECT *
FROM baseballStats
WHERE league = 'NL'
```

If we run this query, we'll see the following results:

| Operator	| Operator_Id	| Parent_Id|
|----------|-------------|-------------|
|BROKER_REDUCE(limit:10)	|0|	-1|
|COMBINE_SELECT	|1|	0|
|SELECT(selectList:AtBatting, G_old, baseOnBalls, caughtStealing, doules, groundedIntoDoublePlays, hits, hitsByPitch, homeRuns, intentionalWalks, league, numberOfGames, numberOfGamesAsBatter, playerID, playerName, playerStint, runs, runsBattedIn, sacrificeFlies, sacrificeHits, stolenBases, strikeouts, teamID, tripples, yearID)|	2	|1|
|TRANSFORM_PASSTHROUGH(AtBatting, G_old, baseOnBalls, caughtStealing, doules, groundedIntoDoublePlays, hits, hitsByPitch, homeRuns, intentionalWalks, league, numberOfGames, numberOfGamesAsBatter, playerID, playerName, playerStint, runs, runsBattedIn, sacrificeFlies, sacrificeHits, stolenBases, strikeouts, teamID, tripples, yearID)	|3|	2|
|PROJECT(homeRuns, playerStint, groundedIntoDoublePlays, numberOfGames, AtBatting, stolenBases, tripples, hitsByPitch, teamID, numberOfGamesAsBatter, strikeouts, sacrificeFlies, caughtStealing, baseOnBalls, playerName, doules, league, yearID, hits, runsBattedIn, G_old, sacrificeHits, intentionalWalks, runs, playerID)	|4|	3|
|FILTER_FULL_SCAN(operator:EQ,predicate:league = 'NL') |5|	4|

## FILTER Clauses for Aggregates

Atri Sharma added the filter clause for aggregates.
This feature makes it possible to write queries like this:

```sql
SELECT SUM(homeRuns) FILTER(WHERE league = 'NL') AS nlHomeRuns,
       SUM(homeRuns) FILTER(WHERE league = 'AL') AS alHomeRuns
FROM baseballStats
```

If we run this query, we'll see the following output:

| nlHomeRuns	| alHomeRuns	|
|----------|-------------|
|135486|	135990|

## greatest and least

Richard Startin added the `greatest` and `least` functions:

```sql
SELECT playerID,
       least(5.0, max(homeRuns)) AS homeRuns,
	   greatest(5.0, max(hits)) AS hits
FROM baseballStats
WHERE league = 'NL' AND teamID = 'SFN'
GROUP BY playerID
LIMIT 5
```

If we run this query, we'll see the following output:

|playerID	|homeRuns|	hits	|
|----------|-------------|-------------|
|ramirju01|	0|	5|
|milneed01|	4	|54|
|testani01|	0	|5|
|shawbo01	|0	|8|
|vogelry01	|0|	12|

## DistinctCountSmartHLL

 Xiaotian (Jackie) Jiang added the `DistinctCountSmartHLL` aggregation function, which automatically converts the Set to HyperLogLog if the set size grows too big to protect the servers from running out of memory:

```sql
SELECT DISTINCTCOUNTSMARTHLL(homeRuns, 'hllLog2m=8;hllConversionThreshold=10')
FROM baseballStats
```

If we run this query, we'll see the following output:

|distinctcountsmarthll(homeRuns)|
|----------|
|66|

## UI updates

There were also a bunch of updates to the Pinot Data Explorer, by Sanket Shah and Johan Adami.

The display of reported size and estimated size is now in a human readable format:

![Human readable sizes](/blogs/announcing-apache-pinot-0-10/human-readable-sizes.png)

Fixes for the following issues:

* Error messages weren't showing on the UI when an invalid operation is attempted:

![A backwards incompatible attempted schema change](/blogs/announcing-apache-pinot-0-10/backwards-incompatible.png)

* Query console goes blank on syntax error.
* Query console cannot show query result when multiple columns have the same name.
* Adding extra fields after `SELECT *` would throw a NullPointerException.
* Some queries were returning `--` instead of `0`.
* Query console couldn't show the query result if multiple columns had the same name.
* Pinot Dashboard tenant view showing the incorrect amount of servers and brokers.

## RealTimeToOffline Task

Xiaotian (Jackie) Jiang made some fixes to the [RealTimeToOffline job](https://dev.startree.ai/docs/pinot/recipes/real-time-offline-job) to handle time gaps and proceed to the next time window when no segment matches the current one.

## Empty QuickStart


Kenny Bastani added an empty QuickStart command, which lets you quickly spin up an empty Pinot cluster:

```bash
docker run \
  -p 8000:8000 \
  -p 9000:9000 \
  apachepinot/pinot:0.10.0 QuickStart \
  -type empty
```

You can then ingest your own dataset without needing to worry about spinning up each of the Pinot components individually.

## Data Ingestion

* Richard Startin fixed some issues with real-time ingestion where consumption of messages would stop if a bad batch of messages was consumed from Kafka.

* Mohemmad Zaid Khan added the BoundedColumnValue partition function, which partitions segments based on column values.

* Xiaobing Li added the fixed name segment generator, which can be used when you want to replace a specific existing segment.


## Other changes

* Richard Startin set LZ4 compression as the default for all metrics fields.
* I added the `ST_Within` geospatial function.
* Rong Rong fixed a bug where query stats wouldn't show if there was an error processing the query (e.g. if the query timed out).
* Prashant Pandey fixed the query engine to handle extra columns added to a `SELECT *` statement.
* Richard Startin added support for forward indexes on JSON columns.
* Rong Rong added the GRPC broker request handler so that data can be streamed back from the server to the broker when processing queries.
* deemoliu made it possible to add a default strategy when using the [partial upsert feature](https://dev.startree.ai/docs/pinot/recipes/upserts-partial).
* Jeff Moszuti added support for the `TIMESTAMP` data type in the [configuration recommendation engine](https://docs.pinot.apache.org/operators/configuration-recommendation-engine).

## Dependency updates

The following dependencies were updated:

* async-http-client because the library moved to a different organization.
* RoaringBitmap to 0.9.25
* JsonPath to 2.7.0
* Kafka to 2.8.1
* Prometheus to 0.16.1

## Resources

If you want to try out Apache Pinot, the following resources will help you get started:

-   Download page: https://pinot.apache.org/download/
-   Getting started: https://docs.pinot.apache.org/getting-started
-   Apache Pinot Recipes: https://dev.startree.ai/docs/pinot/recipes/
-   Join our Slack channel: https://communityinviter.com/apps/apache-pinot/apache-pinot
-   See our upcoming events: https://www.meetup.com/apache-pinot
-   Follow us on Twitter: https://twitter.com/startreedata
-   Subscribe to our YouTube channel: https://www.youtube.com/c/StarTree