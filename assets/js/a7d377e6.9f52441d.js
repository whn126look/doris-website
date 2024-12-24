"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["611332"],{305031:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-data-types/semi-structured/VARIANT","title":"VARIANT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-data-types/semi-structured/VARIANT.md","sourceDirName":"sql-manual/sql-data-types/semi-structured","slug":"/sql-manual/sql-data-types/semi-structured/VARIANT","permalink":"/docs/2.0/sql-manual/sql-data-types/semi-structured/VARIANT","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"VARIANT","language":"en"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/2.0/sql-manual/sql-data-types/semi-structured/JSON"},"next":{"title":"HLL (HyperLogLog)","permalink":"/docs/2.0/sql-manual/sql-data-types/aggregate/HLL"}}'),i=t("785893"),r=t("250065");let a={title:"VARIANT",language:"en"},o=void 0,l={},c=[{value:"VARIANT",id:"variant",level:2},{value:"Description",id:"description",level:3},{value:"Note",id:"note",level:3},{value:"Example",id:"example",level:3},{value:"Usage Restrictions and Best Practices",id:"usage-restrictions-and-best-practices",level:3},{value:"FAQ",id:"faq",level:3},{value:"Keywords",id:"keywords",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"variant",children:"VARIANT"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Introduced a new data type VARIANT in Doris 2.1, which can store semi-structured JSON data. It allows storing complex data structures containing different data types (such as integers, strings, boolean values, etc.) without the need to define specific columns in the table structure beforehand. The VARIANT type is particularly useful for handling complex nested structures that may change at any time. During the writing process, this type can automatically infer column information based on the structure and types of the columns, dynamicly merge written schemas. It stores JSON keys and their corresponding values as columns and dynamic sub-columns."}),"\n",(0,i.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,i.jsx)(n.p,{children:"Advantages over JSON Type:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Different storage methods: The JSON type is stored in binary JSONB format, and the entire JSON is stored row by row in segment files. In contrast, the VARIANT type infers types during writing and stores the written JSON columns. It has a higher compression ratio compared to the JSON type, providing better storage efficiency."}),"\n",(0,i.jsx)(n.li,{children:"Query: Querying does not require parsing. VARIANT fully utilizes columnar storage, vectorized engines, optimizers, and other components in Doris, providing users with extremely high query performance.\nBelow are test results based on clickbench data:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Storage Space"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Predefined Static Columns"}),(0,i.jsx)(n.td,{children:"12.618 GB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VARIANT Type"}),(0,i.jsx)(n.td,{children:"12.718 GB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JSON Type"}),(0,i.jsx)(n.td,{children:"35.711 GB"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Saves approximately 65% storage capacity"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Query Counts"}),(0,i.jsx)(n.th,{children:"Predefined Static Columns"}),(0,i.jsx)(n.th,{children:"VARIANT Type"}),(0,i.jsx)(n.th,{children:"JSON Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"First Query (cold)"}),(0,i.jsx)(n.td,{children:"233.79s"}),(0,i.jsx)(n.td,{children:"248.66s"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Most queries timeout"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Second Query (hot)"}),(0,i.jsx)(n.td,{children:"86.02s"}),(0,i.jsx)(n.td,{children:"94.82s"}),(0,i.jsx)(n.td,{children:"789.24s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Third Query (hot)"}),(0,i.jsx)(n.td,{children:"83.03s"}),(0,i.jsx)(n.td,{children:"92.29s"}),(0,i.jsx)(n.td,{children:"743.69s"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ClickHouse/ClickBench/blob/main/doris/queries.sql",children:"test case"})," contains 43 queries"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"8x faster query, query performance comparable to static columns"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Demonstrate the functionality and usage of VARIANT with an example covering table creation, data import, and query cycle."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table Creation Syntax"}),"\nCreate a table, using the ",(0,i.jsx)(n.code,{children:"VARIANT"})," keyword in the syntax."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'-- Without index\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\ntable_properties;\n\n-- Create an index on the v column, optionally specify the tokenize method, default is untokenized \nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT,\n    INDEX idx_var(v) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n)\ntable_properties;\n\n-- Create an bloom filter on v column, to enhance query seed on sub columns\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\n...\nproperties("replication_num" = "1", "bloom_filter_columns" = "v");\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- use v['a']['b'] format for example, v['properties']['title'] type is VARIANT\nSELECT v['properties']['title'] from ${table_name}\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example based on the GitHub events dataset"})}),"\n",(0,i.jsx)(n.p,{children:"Here, github events data is used to demonstrate the table creation, data import, and query using VARIANT.\nThe below is a formatted line of data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "14186154924",\n  "type": "PushEvent",\n  "actor": {\n    "id": 282080,\n    "login": "brianchandotcom",\n    "display_login": "brianchandotcom",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/brianchandotcom",\n    "avatar_url": "https://avatars.githubusercontent.com/u/282080?"\n  },\n  "repo": {\n    "id": 1920851,\n    "name": "brianchandotcom/liferay-portal",\n    "url": "https://api.github.com/repos/brianchandotcom/liferay-portal"\n  },\n  "payload": {\n    "push_id": 6027092734,\n    "size": 4,\n    "distinct_size": 4,\n    "ref": "refs/heads/master",\n    "head": "91edd3c8c98c214155191feb852831ec535580ba",\n    "before": "abb58cc0db673a0bd5190000d2ff9c53bb51d04d",\n    "commits": [""]\n  },\n  "public": true,\n  "created_at": "2020-11-13T18:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Table Creation"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Created three columns of VARIANT type: ",(0,i.jsx)(n.code,{children:"actor"}),", ",(0,i.jsx)(n.code,{children:"repo"}),", and ",(0,i.jsx)(n.code,{children:"payload"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Simultaneously created an inverted index, ",(0,i.jsx)(n.code,{children:"idx_payload"}),", for the ",(0,i.jsx)(n.code,{children:"payload"})," column while creating the table."]}),"\n",(0,i.jsxs)(n.li,{children:["Specified the index type as inverted using ",(0,i.jsx)(n.code,{children:"USING INVERTED"}),", aimed at accelerating conditional filtering of sub-columns."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'PROPERTIES("parser" = "english")'})," specified the adoption of English tokenization."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE test_variant;\nUSE test_variant;\nCREATE TABLE IF NOT EXISTS github_events (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nproperties("replication_num" = "1");\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creating an index on VARIANT columns, such as when there are numerous sub-columns in payload, might lead to an excessive number of index columns, impacting write performance."}),"\n",(0,i.jsx)(n.li,{children:"The tokenization properties for the same VARIANT column are uniform. If you have varied tokenization requirements, consider creating multiple VARIANT columns and specifying index properties separately for each."}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Using Streamload for Import"})}),"\n",(0,i.jsx)(n.p,{children:"Importing gh_2022-11-07-3.json, which contains one hour's worth of GitHub events data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'wget https://qa-build.oss-cn-beijing.aliyuncs.com/regression/variant/gh_2022-11-07-3.json\n\ncurl --location-trusted -u root:  -T gh_2022-11-07-3.json -H "read_json_by_line:true" -H "format:json"  http://127.0.0.1:18148/api/test_variant/github_events/_strea\nm_load\n\n{\n    "TxnId": 2,\n    "Label": "086fd46a-20e6-4487-becc-9b6ca80281bf",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 139325,\n    "NumberLoadedRows": 139325,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 633782875,\n    "LoadTimeMs": 7870,\n    "BeginTxnTimeMs": 19,\n    "StreamLoadPutTimeMs": 162,\n    "ReadDataTimeMs": 2416,\n    "WriteDataTimeMs": 7634,\n    "CommitAndPublishTimeMs": 55\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Confirm the successful import."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'-- View the number of rows.\nmysql> select count() from github_events;\n+----------+\n| count(*) |\n+----------+\n|   139325 |\n+----------+\n1 row in set (0.25 sec)\n\n-- Random select one row\nmysql> select * from github_events limit 1;\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| id          | type      | actor                                                                                                                                                                                                                       | repo                                                                                                                                                     | payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | public | created_at          |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| 25061821748 | PushEvent | {"gravatar_id":"","display_login":"jfrog-pipelie-intg","url":"https://api.github.com/users/jfrog-pipelie-intg","id":98024358,"login":"jfrog-pipelie-intg","avatar_url":"https://avatars.githubusercontent.com/u/98024358?"} | {"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16","id":562683829,"name":"jfrog-pipelie-intg/jfinte2e_1667789956723_16"} | {"commits":[{"sha":"334433de436baa198024ef9f55f0647721bcd750","author":{"email":"98024358+jfrog-pipelie-intg@users.noreply.github.com","name":"jfrog-pipelie-intg"},"message":"commit message 10238493157623136117","distinct":true,"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16/commits/334433de436baa198024ef9f55f0647721bcd750"}],"before":"f84a26792f44d54305ddd41b7e3a79d25b1a9568","head":"334433de436baa198024ef9f55f0647721bcd750","size":1,"push_id":11572649828,"ref":"refs/heads/test-notification-sent-branch-10238493157623136113","distinct_size":1} |      1 | 2022-11-07 11:00:00 |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n1 row in set (0.23 sec)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Running desc command to view schema information, sub-columns will automatically expand at the storage layer and undergo type inference."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| public                                                     | BOOLEAN    | Yes  | false | NULL    | NONE  |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n6 rows in set (0.07 sec)\n\nmysql> set describe_extend_variant_column = true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| actor.avatar_url                                           | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.display_login                                        | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.id                                                   | INT        | Yes  | false | NULL    | NONE  |\n| actor.login                                                | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.url                                                  | TEXT       | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| payload.action                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.before                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.author_association                         | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.body                                       | TEXT       | Yes  | false | NULL    | NONE  |\n....\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n406 rows in set (0.07 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"DESC can be used to specify partition and view the schema of a particular partition. The syntax is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DESCRIBE ${table_name} PARTITION ($partition_name);\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Querying"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["When utilizing filtering and aggregation functionalities to query sub-columns, additional casting operations need to be performed on sub-columns (because the storage types are not necessarily fixed and require a unified SQL type).\nFor instance, ",(0,i.jsx)(n.code,{children:"SELECT * FROM tbl where CAST(var['titile'] as text) MATCH \"hello world\""}),"\nThe simplified examples below illustrate how to use VARIANT for querying:\nThe following are three typical query scenarios"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Retrieve the top 5 repositories based on star count from the ",(0,i.jsx)(n.code,{children:"github_events"})," table."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT\n    ->     cast(repo['name'] as text) as repo_name, count() AS stars\n    -> FROM github_events\n    -> WHERE type = 'WatchEvent'\n    -> GROUP BY repo_name\n    -> ORDER BY stars DESC LIMIT 5;\n+--------------------------+-------+\n| repo_name                | stars |\n+--------------------------+-------+\n| aplus-framework/app      |    78 |\n| lensterxyz/lenster       |    77 |\n| aplus-framework/database |    46 |\n| stashapp/stash           |    42 |\n| aplus-framework/image    |    34 |\n+--------------------------+-------+\n5 rows in set (0.03 sec)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:'Retrieve the count of comments containing "doris".'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- implicit cast `payload['comment']['body']` to string type\nmysql> SELECT\n    ->     count() FROM github_events\n    ->     WHERE payload['comment']['body'] MATCH 'doris';\n+---------+\n| count() |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Query the issue number with the highest number of comments along with its corresponding repository."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT \n    ->   cast(repo['name'] as string) as repo_name, \n    ->   cast(payload['issue']['number'] as int) as issue_number, \n    ->   count() AS comments, \n    ->   count(\n    ->     distinct cast(actor['login'] as string)\n    ->   ) AS authors \n    -> FROM  github_events \n    -> WHERE type = 'IssueCommentEvent' AND (cast(payload[\"action\"] as string) = 'created') AND (cast(payload[\"issue\"][\"number\"] as int) > 10) \n    -> GROUP BY repo_name, issue_number \n    -> HAVING authors >= 4\n    -> ORDER BY comments DESC, repo_name \n    -> LIMIT 50;\n+--------------------------------------+--------------+----------+---------+\n| repo_name                            | issue_number | comments | authors |\n+--------------------------------------+--------------+----------+---------+\n| facebook/react-native                |        35228 |        5 |       4 |\n| swsnu/swppfall2022-team4             |           27 |        5 |       4 |\n| belgattitude/nextjs-monorepo-example |         2865 |        4 |       4 |\n+--------------------------------------+--------------+----------+---------+\n3 rows in set (0.03 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage-restrictions-and-best-practices",children:"Usage Restrictions and Best Practices"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"There are several limitations when using the VARIANT type:"}),"\nDynamic columns of VARIANT are nearly as efficient as predefined static columns. When dealing with data like logs, where fields are often added dynamically (such as container labels in Kubernetes), parsing JSON and inferring types can generate additional costs during write operations. Therefore, it's recommended to keep the number of columns for a single import below 1000."]}),"\n",(0,i.jsx)(n.p,{children:"Ensure consistency in types whenever possible. Doris automatically performs compatible type conversions. When a field cannot undergo compatible type conversion, it is uniformly converted to JSONB type. The performance of JSONB columns may degrade compared to columns like int or text."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"tinyint -> smallint -> int -> bigint, integer types can be promoted following the direction of the arrows."}),"\n",(0,i.jsx)(n.li,{children:"float -> double, floating-point numbers can be promoted following the direction of the arrow."}),"\n",(0,i.jsx)(n.li,{children:"text, string type."}),"\n",(0,i.jsx)(n.li,{children:"JSON, binary JSON type."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When the above types cannot be compatible, they will be transformed into JSON type to prevent loss of type information. If you need to set a strict schema in VARIANT, the VARIANT MAPPING mechanism will be introduced soon."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Other limitations include:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VARIANT columns can only create inverted indexes or bloom filter to speed up query."}),"\n",(0,i.jsxs)(n.li,{children:["Using the ",(0,i.jsx)(n.strong,{children:"RANDOM"})," mode or ",(0,i.jsx)(n.a,{href:"/docs/data-operate/import/group-commit-manual.md",children:"group commit"})," mode is recommended for higher write performance."]}),"\n",(0,i.jsx)(n.li,{children:"Non-standard JSON types such as date and decimal should ideally use static types for better performance, since these types are infered to text type."}),"\n",(0,i.jsx)(n.li,{children:"Arrays with dimensions of 2 or higher will be stored as JSONB encoding, which might perform less efficiently than native arrays."}),"\n",(0,i.jsx)(n.li,{children:"Not supported as primary or sort keys."}),"\n",(0,i.jsx)(n.li,{children:"Queries with filters or aggregations require casting. The storage layer eliminates cast operations based on storage type and the target type of the cast, speeding up queries."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.p,{children:["1.Streamload Error: [CANCELLED][INTERNAL_ERROR] tablet error: [DATA_QUALITY_ERROR] Reached max column size limit 2048.\nDue to compaction and metadata storage limitations, the VARIANT type imposes a limit on the number of columns, with the default being 2048 columns. You can adjust the BE configuration ",(0,i.jsx)(n.code,{children:"variant_max_merged_tablet_schema_size"})," accordingly, but it is not recommended to exceed 4096 columns."]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"VARIANT\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);