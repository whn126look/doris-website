"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["651970"],{559466:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"table-design/data-partitioning/manual-partitioning","title":"Manual partitioning","description":"\x3c!--","source":"@site/docs/table-design/data-partitioning/manual-partitioning.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/manual-partitioning","permalink":"/docs/dev/table-design/data-partitioning/manual-partitioning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Manual partitioning","language":"en"},"sidebar":"docs","previous":{"title":"Data Distribution Concept","permalink":"/docs/dev/table-design/data-partitioning/data-distribution"},"next":{"title":"Dynamic partitioning","permalink":"/docs/dev/table-design/data-partitioning/dynamic-partitioning"}}'),a=i("785893"),l=i("250065");let s={title:"Manual partitioning",language:"en"},r=void 0,o={},c=[{value:"Partition columns",id:"partition-columns",level:2},{value:"RANGE partitioning",id:"range-partitioning",level:2},{value:"LIST partitioning",id:"list-partitioning",level:2},{value:"NULL partitioning",id:"null-partitioning",level:2}];function d(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"partition-columns",children:"Partition columns"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Partition columns can be specified as one or multiple columns, and the partition columns must be KEY columns. The usage of multi-column partitioning will be introduced later in the summary section of multi-column partitioning."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["When ",(0,a.jsx)(e.code,{children:"allow_partition_column_nullable"})," is set to true, Range partition supports the use of NULL partition columns. List Partition does not support NULL partition columns at all times."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Regardless of the type of partition column, double quotes are required when writing partition values."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["There is theoretically no upper limit on the number of partitions. However, each table is limited to 4096 partitions by default. If you want to exceed this limit, you can modify the FE configuration parameters ",(0,a.jsx)(e.code,{children:"max_multi_partition_num"})," and ",(0,a.jsx)(e.code,{children:"max_dynamic_partition_num"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"When creating a table without partitioning, the system will automatically generate a full-range partition with the same name as the table name. This partition is not visible to users and cannot be deleted or modified."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Overlapping ranges are not allowed when creating partitions."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"range-partitioning",children:"RANGE partitioning"}),"\n",(0,a.jsxs)(e.p,{children:["Partition columns are usually time columns for convenient management of old and new data. RANGE partitioning supports column types such as ",(0,a.jsx)(e.code,{children:"DATE"}),", ",(0,a.jsx)(e.code,{children:"DATETIME"}),", ",(0,a.jsx)(e.code,{children:"TINYINT"}),", ",(0,a.jsx)(e.code,{children:"SMALLINT"}),", ",(0,a.jsx)(e.code,{children:"INT"}),", ",(0,a.jsx)(e.code,{children:"BIGINT"}),", and ",(0,a.jsx)(e.code,{children:"LARGEINT"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Partition information supports the following four writing methods:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"FIXED RANGE"}),": This method defines the partition as a left-closed, right-open interval."]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(col1[, col2, ...])                                                                                                                                                                                                  \n(                                                                                                                                                                                                                                      \n    PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)),                                                                                                      \n    PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, ))                                                                                                                                \n)                                                                                                                                                                                                                                      \n'})}),"\n",(0,a.jsx)(e.p,{children:"For example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES [("2017-01-01"),  ("2017-02-01")),\n    PARTITION `p201702` VALUES [("2017-02-01"), ("2017-03-01")),\n    PARTITION `p201703` VALUES [("2017-03-01"), ("2017-04-01"))\n)\n'})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"LESS THAN"}),": This method only defines the upper bound of the partition. The lower bound is determined by the upper bound of the previous partition."]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(col1[, col2, ...])                                                                                                                                                                                                  \n(                                                                                                                                                                                                                                      \n    PARTITION partition_name1 VALUES LESS THAN MAXVALUE | ("value1", "value2", ...),                                                                                                                                                     \n    PARTITION partition_name2 VALUES LESS THAN MAXVALUE | ("value1", "value2", ...)                                                                                                                                                      \n)                                                                                                                                                                                                                                      \n'})}),"\n",(0,a.jsx)(e.p,{children:"For example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01")\n)\n\nPARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01")\n    PARTITION `other` VALUES LESS THAN (MAXVALUE)\n)\n'})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"BATCH RANGE"}),": This method batch creates partitions based on ranges of number or time, defining the partitions as left-closed, right-open intervals and setting the step size."]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(int_col)                                                                                                                                                                                                            \n(                                                                                                                                                                                                                                      \n    FROM (start_num) TO (end_num) INTERVAL interval_value                                                                                                                                                                                                   \n)\n\nPARTITION BY RANGE(date_col)                                                                                                                                                                                                            \n(                                                                                                                                                                                                                                      \n    FROM ("start_date") TO ("end_date") INTERVAL num YEAR | num MONTH | num WEEK | num DAY \uFF5C 1 HOUR                                                                                                                                                                                                   \n)                                                                                                                                                                                                                                    \n'})}),"\n",(0,a.jsx)(e.p,{children:"For example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(age)\n(\n    FROM (1) TO (100) INTERVAL 10\n)\n\nPARTITION BY RANGE(`date`)\n(\n    FROM ("2000-11-14") TO ("2021-11-14") INTERVAL 2 YEAR\n)\n'})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"MULTI RANGE"}),": This method batch creates partitions based on range partitioning, defining the partitions as left-closed, right-open intervals. For example:"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY RANGE(col)                                                                                                                                                                                                                \n(                                                                                                                                                                                                                                      \n   FROM ("2000-11-14") TO ("2021-11-14") INTERVAL 1 YEAR,                                                                                                                                                                              \n   FROM ("2021-11-14") TO ("2022-11-14") INTERVAL 1 MONTH,                                                                                                                                                                             \n   FROM ("2022-11-14") TO ("2023-01-03") INTERVAL 1 WEEK,                                                                                                                                                                              \n   FROM ("2023-01-03") TO ("2023-01-14") INTERVAL 1 DAY,\n   PARTITION p_20230114 VALUES [(\'2023-01-14\'), (\'2023-01-15\'))                                                                                                                                                                                \n)                                                                                                                                                                                                                                      \n'})}),"\n",(0,a.jsx)(e.h2,{id:"list-partitioning",children:"LIST partitioning"}),"\n",(0,a.jsxs)(e.p,{children:["Partition columns based on LIST partitioning support data types such as ",(0,a.jsx)(e.code,{children:"BOOLEAN"}),", ",(0,a.jsx)(e.code,{children:"TINYINT"}),", ",(0,a.jsx)(e.code,{children:"SMALLINT"}),", ",(0,a.jsx)(e.code,{children:"INT"}),", ",(0,a.jsx)(e.code,{children:"BIGINT"}),", ",(0,a.jsx)(e.code,{children:"LARGEINT"}),", ",(0,a.jsx)(e.code,{children:"DATE"}),", ",(0,a.jsx)(e.code,{children:"DATETIME"}),", ",(0,a.jsx)(e.code,{children:"CHAR"}),", and ",(0,a.jsx)(e.code,{children:"VARCHAR"}),". Partition values are enumerated values. Only when the data is one of the enumerated values of the target partition, the partition can be hit."]}),"\n",(0,a.jsxs)(e.p,{children:["Partitions support specifying the enumerated values contained in each partition through ",(0,a.jsx)(e.code,{children:"VALUES IN (...)"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"For example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY LIST(city)\n(\n    PARTITION `p_cn` VALUES IN ("Beijing", "Shanghai", "Hong Kong"),\n    PARTITION `p_usa` VALUES IN ("New York", "San Francisco"),\n    PARTITION `p_jp` VALUES IN ("Tokyo")\n)\n'})}),"\n",(0,a.jsx)(e.p,{children:"LIST partitioning also supports multi-column partitioning, for example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'PARTITION BY LIST(id, city)\n(\n    PARTITION p1_city VALUES IN (("1", "Beijing"), ("1", "Shanghai")),\n    PARTITION p2_city VALUES IN (("2", "Beijing"), ("2", "Shanghai")),\n    PARTITION p3_city VALUES IN (("3", "Beijing"), ("3", "Shanghai"))\n)\n'})}),"\n",(0,a.jsx)(e.h2,{id:"null-partitioning",children:"NULL partitioning"}),"\n",(0,a.jsxs)(e.p,{children:["Partition columns based on NULL partitioning must be not null columns by default. If you need to use null columns, set the session variable ",(0,a.jsx)(e.code,{children:"allow_partition_column_nullable"})," to ",(0,a.jsx)(e.code,{children:"true"}),". For LIST partitioning, the NULL partitioning is supported, while for RANGE partitioning, null values will be assigned to the ",(0,a.jsx)(e.code,{children:"less than"})," partition. The columns are as follows:"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"LIST partitioning"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'mysql> create table null_list(\n    -> k0 varchar null\n    -> )\n    -> partition by list (k0)\n    -> (\n    -> PARTITION pX values in ((NULL))\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> insert into null_list values (null);\nQuery OK, 1 row affected (0.19 sec)\n\nmysql> select * from null_list;\n+------+\n| k0   |\n+------+\n| NULL |\n+------+\n1 row in set (0.18 sec)\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.strong,{children:["RANGE partitioning with the ",(0,a.jsx)(e.code,{children:"less than"})," partition"]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'mysql> create table null_range(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p10 values less than (10),\n    -> PARTITION p100 values less than (100),\n    -> PARTITION pMAX values less than (maxvalue)\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> insert into null_range values (null);\nQuery OK, 1 row affected (0.19 sec)\n\nmysql> select * from null_range partition(p10);\n+------+\n| k0   |\n+------+\n| NULL |\n+------+\n1 row in set (0.18 sec)\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.strong,{children:["RANGE partitioning without the ",(0,a.jsx)(e.code,{children:"less than"})," partition"]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'mysql> create table null_range2(\n    -> k0 int null\n    -> )\n    -> partition by range (k0)\n    -> (\n    -> PARTITION p200 values [("100"), ("200"))\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.13 sec)\n\nmysql> insert into null_range2 values (null);\nERROR 5025 (HY000): Insert has filtered data in strict mode, tracking_url=......\n'})})]})}function p(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return s}});var t=i(667294);let a={},l=t.createContext(a);function s(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);