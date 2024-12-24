"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["536137"],{705754:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"data-operate/update/update-of-unique-model","title":"Updating Data on Unique Key Model","description":"\x3c!--","source":"@site/docs/data-operate/update/update-of-unique-model.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-of-unique-model","permalink":"/docs/dev/data-operate/update/update-of-unique-model","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Updating Data on Unique Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Updating Data with UPDATE Command","permalink":"/docs/dev/data-operate/update/unique-update"},"next":{"title":"Updating Data on Aggregate Key Model","permalink":"/docs/dev/data-operate/update/update-of-aggregate-model"}}'),a=t("785893"),l=t("250065");let r={title:"Updating Data on Unique Key Model",language:"en"},s=void 0,o={},d=[{value:"Full Row Update",id:"full-row-update",level:2},{value:"Partial Update",id:"partial-update",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Usage",id:"usage",level:3},{value:"Table Creation",id:"table-creation",level:4},{value:"Load",id:"load",level:4},{value:"Example",id:"example",level:3},{value:"Notes",id:"notes",level:3},{value:"Flexible Partial Column Updates",id:"flexible-partial-column-updates",level:2},{value:"Applicable Scenarios",id:"applicable-scenarios",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:3}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document primarily introduces the updates based on the load data on the Doris Unique Key model."}),"\n",(0,a.jsx)(n.h2,{id:"full-row-update",children:"Full Row Update"}),"\n",(0,a.jsx)(n.p,{children:'When loading data into the primary key model (Unique model) in Doris using supported load methods such as Stream Load, Broker Load, Routine Load, Insert Into, etc., if there are no corresponding data rows with the primary key, new data will be inserted. If there are corresponding data rows with the primary key, the data will be updated. In other words, loading data into the Doris primary key model follows an "upsert" mode. Based on the import, updating existing records is by default the same as loading a new record. Therefore, you can refer to the data load documentation section for more details.'}),"\n",(0,a.jsx)(n.h2,{id:"partial-update",children:"Partial Update"}),"\n",(0,a.jsx)(n.p,{children:"Updating partial columns mainly refers to directly updating certain field values in a table instead of updating all field values. This can be done using the Update statement, which typically involves reading the entire row data, updating specific field values, and then writing it back. This read-write transaction is time-consuming and not suitable for writing large amounts of data. In the context of load updates on the primary key model, Doris provides a functionality to directly insert or update partial column data without reading the entire row data, significantly improving the update efficiency."}),"\n",(0,a.jsx)(n.admonition,{title:"Note:",type:"caution",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Partial updates are only supported in the Merge-on-Write implementation of the Unique Key starting from version 2.0."}),"\n",(0,a.jsx)(n.li,{children:"Starting from version 2.0.2, partial updates are supported using INSERT INTO."}),"\n",(0,a.jsx)(n.li,{children:"Partial updates are not supported on tables with materialized views."}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Real-time dynamic column updates that require high-frequency updates on certain fields in the table. For example, in a user tag table, there are fields containing the latest user behavior information that needs real-time updates to enable real-time analysis and decision-making in advertising/recommendation systems."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Combining multiple source tables into a large denormalized table."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Data correction."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h4,{id:"table-creation",children:"Table Creation"}),"\n",(0,a.jsx)(n.p,{children:"When creating the table, the following property needs to be specified to enable the Merge-on-Write implementation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"enable_unique_key_merge_on_write = true\n"})}),"\n",(0,a.jsx)(n.h4,{id:"load",children:"Load"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"StreamLoad/BrokerLoad/RoutineLoad"})}),"\n",(0,a.jsx)(n.p,{children:"If you are using Stream Load/Broker Load/Routine Load, add the following header during the load:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"partial_columns: true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Also, specify the columns to be loaded in the ",(0,a.jsx)(n.code,{children:"columns"})," section (all key columns must be included, otherwise updates won't be possible). Below is an example of Stream Load:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'$ curl --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"INSERT INTO"})}),"\n",(0,a.jsxs)(n.p,{children:["In all data models, when using ",(0,a.jsx)(n.code,{children:"INSERT INTO"})," with a subset of columns, the default behavior is to insert the entire row. To enable partial column updates in the Merge-on-Write implementation, the following session variable needs to be set:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true\nINSERT INTO order_tbl (order_id, order_status) VALUES (1,'To be shipped');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the default value for the session variable ",(0,a.jsx)(n.code,{children:"enable_insert_strict"}),", which controls whether the insert statement operates in strict mode, is true. In strict mode, updating non-existing keys during partial column updates is not allowed. So, if you want to insert non-existing keys during partial column updates using the insert statement, you need to set ",(0,a.jsx)(n.code,{children:"enable_unique_key_partial_update"})," to true and also set ",(0,a.jsx)(n.code,{children:"enable_insert_strict"})," to false."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Flink Connector"})}),"\n",(0,a.jsx)(n.p,{children:"If you are using the Flink Connector, add the following configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"'sink.properties.partial_columns' = 'true',\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Also, specify the columns to be loaded in ",(0,a.jsx)(n.code,{children:"sink.properties.column"})," (all key columns must be included, otherwise updates won't be possible)."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["Suppose there is an order table named ",(0,a.jsx)(n.code,{children:"order_tbl"})," in Doris, where the order ID is a key column, and the order status and order amount are value columns. The data is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Order ID"}),(0,a.jsx)(n.th,{children:"Order Amount"}),(0,a.jsx)(n.th,{children:"Order Status"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"100"}),(0,a.jsx)(n.td,{children:"Pending"})]})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        | 100          | Pending      |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now, when a user clicks on payment, the Doris system needs to update the order status of the order with ID '1' to 'To be shipped'."}),"\n",(0,a.jsxs)(n.p,{children:["We use ",(0,a.jsx)(n.code,{children:"INSERT INTO"})," to update the data."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) VALUES (1,'To be shipped');\n"})}),"\n",(0,a.jsx)(n.p,{children:"After the update, the result is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | To be shipped |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.p,{children:"Due to the Merge-on-Write implementation requiring data completion during data writing to ensure optimal query performance, performing partial column updates using the Merge-on-Write implementation may result in a decrease in load performance."}),"\n",(0,a.jsx)(n.p,{children:"Suggestions for improving load performance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use SSDs equipped with NVMe or high-speed SSD cloud disks. Reading historical data in large quantities during data completion will generate high read IOPS and read throughput."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Enabling row storage can significantly reduce the IOPS generated during data completion, resulting in noticeable improvements in load performance. Users can enable row storage by using the following property when creating the table:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:'"store_row_column" = "true"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now, all rows in a batch write task (whether it is a load task or ",(0,a.jsx)(n.code,{children:"INSERT INTO"}),") can only update the same columns. If you need to update different columns, you will need to perform separate batch writes."]}),"\n",(0,a.jsx)(n.h2,{id:"flexible-partial-column-updates",children:"Flexible Partial Column Updates"}),"\n",(0,a.jsx)(n.p,{children:"Before version x.x.x, Doris's partial update feature required that every row in an import update the same columns. Starting from version x.x.x, Doris supports a more flexible partial update method that allows each row in a single import to update different columns."}),"\n",(0,a.jsx)(n.admonition,{title:"Note:",type:"caution",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The flexible partial update feature is supported since version x.x.x."}),"\n",(0,a.jsx)(n.li,{children:"Currently, only the Stream Load import method and tools using Stream Load (e.g. Doris-Flink-Connector) support this feature."}),"\n",(0,a.jsx)(n.li,{children:"The import file must be in JSON format when using flexible column updates."}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,a.jsx)(n.p,{children:"When using CDC to synchronize data from a database system to Doris in real-time, the records output by the source system may not contain complete row data, but only the values of the primary keys and the updated columns. In such cases, the columns updated in a batch of data within a time window may differ. Flexible column updates can be used to import data into Doris."}),"\n",(0,a.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Enabling Flexible Column Updates for Existing Tables"})}),"\n",(0,a.jsxs)(n.p,{children:["For existing Merge-On-Write tables created in old versions of Doris, after upgrading, you can enable flexible partial updates using the command: ",(0,a.jsx)(n.code,{children:'ALTER TABLE db1.tbl1 ENABLE FEATURE "UPDATE_FLEXIBLE_COLUMNS";'}),". After executing this command, if the result of ",(0,a.jsx)(n.code,{children:"show create table db1.tbl1"})," includes ",(0,a.jsx)(n.code,{children:'"enable_unique_key_skip_bitmap_column" = "true"'}),", the feature has been successfully enabled. Ensure that the target table has the light-schema-change feature enabled beforehand."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Using Flexible Column Updates for New Tables"})}),"\n",(0,a.jsx)(n.p,{children:"For new tables, to use the flexible column update feature, specify the following table properties when creating the table to enable Merge-on-Write, light-schema-change, and include the required hidden bitmap column for flexible column updates:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:'"enable_light_schema_change" = "true"\n"enable_unique_key_merge_on_write" = "true"\n"enable_unique_key_skip_bitmap_column" = "true"\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"StreamLoad"})}),"\n",(0,a.jsx)(n.p,{children:"When using Stream Load, add the following header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"unique_key_update_mode:UPDATE_FLEXIBLE_COLUMNS\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Flink Doris Connector"})}),"\n",(0,a.jsx)(n.p,{children:"If using the Flink Doris Connector, add the following configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"'sink.properties.unique_key_update_mode' = 'UPDATE_FLEXIBLE_COLUMNS'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Assuming the following table:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE t1 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true");\n'})}),"\n",(0,a.jsx)(n.p,{children:"The original data in the table is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MySQL root@127.1:d1> select * from t1;\n+---+----+----+----+----+----+\n| k | v1 | v2 | v3 | v4 | v5 |\n+---+----+----+----+----+----+\n| 0 | 0  | 0  | 0  | 0  | 0  |\n| 1 | 1  | 1  | 1  | 1  | 1  |\n| 2 | 2  | 2  | 2  | 2  | 2  |\n| 3 | 3  | 3  | 3  | 3  | 3  |\n| 4 | 4  | 4  | 4  | 4  | 4  |\n| 5 | 5  | 5  | 5  | 5  | 5  |\n+---+----+----+----+----+----+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now, updating some fields using flexible column updates:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat test1.json\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"k": 0, "__DORIS_DELETE_SIGN__": 1}\n{"k": 1, "v1": 10}\n{"k": 2, "v2": 20, "v5": 25}\n{"k": 3, "v3": 30}\n{"k": 4, "v4": 20, "v1": 43, "v3": 99}\n{"k": 5, "v5": null}\n{"k": 6, "v1": 999, "v3": 777}\n{"k": 2, "v4": 222}\n{"k": 1, "v2": 111, "v3": 111}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u root: \\\n-H "strict_mode:false" \\\n-H "format:json" \\\n-H "read_json_by_line:true" \\\n-H "unique_key_update_mode:UPDATE_FLEXIBLE_COLUMNS" \\\n-T test1.json \\\n-XPUT http://<host>:<http_port>/api/d1/t1/_stream_load\n'})}),"\n",(0,a.jsx)(n.p,{children:"After the update, the data in the table is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MySQL root@127.1:d1> select * from t1;\n+---+-----+------+-----+------+--------+\n| k | v1  | v2   | v3  | v4   | v5     |\n+---+-----+------+-----+------+--------+\n| 1 | 10  | 111  | 111 | 1    | 1      |\n| 2 | 2   | 20   | 2   | 222  | 25     |\n| 3 | 3   | 3    | 30  | 3    | 3      |\n| 4 | 43  | 4    | 99  | 20   | 4      |\n| 5 | 5   | 5    | 5   | 5    | <null> |\n| 6 | 999 | 9876 | 777 | 1234 | <null> |\n+---+-----+------+-----+------+--------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"limitations-and-considerations",children:"Limitations and Considerations"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Similar to previous partial updates, flexible column updates require that each row of imported data include all key columns. Rows not meeting this requirement will be filtered out and counted in filter rows. If the number of filtered rows exceeds the ",(0,a.jsx)(n.code,{children:"max_filter_ratio"})," threshold for this import, the entire import will fail, and filtered data will generate an error log."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In flexible partial update loads, key-value pairs in each JSON object are only valid if the key matches a column name in the target table. Key-value pairs that do not meet this requirement will be ignored. Pairs with keys ",(0,a.jsx)(n.code,{children:"__DORIS_VERSION_COL__"}),", ",(0,a.jsx)(n.code,{children:"__DORIS_ROW_STORE_COL__"}),", or ",(0,a.jsx)(n.code,{children:"__DORIS_SKIP_BITMAP_COL__"})," will also be ignored."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If the table properties of the target table include ",(0,a.jsx)(n.code,{children:"function_column.sequence_type"}),", the import can specify the value for the ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"})," column by including a key-value pair in the JSON object with key ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"}),". For rows that do not specify a value for the ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"}),", if the key exists in the original table, the value will be filled from the old row; otherwise, it will be set to null."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For example, for the following table:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE t2 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true",\n"function_column.sequence_type" = "int");\n'})}),"\n",(0,a.jsx)(n.p,{children:"The original data in the table is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+---+----+----+----+----+----+----------------------+\n| k | v1 | v2 | v3 | v4 | v5 |__DORIS_SEQUENCE_COL__|\n+---+----+----+----+----+----+----------------------+\n| 0 | 0  | 0  | 0  | 0  | 0  | 0                    |\n| 1 | 1  | 1  | 1  | 1  | 10 | 10                   |\n| 2 | 2  | 2  | 2  | 2  | 20 | 20                   |\n| 3 | 3  | 3  | 3  | 3  | 30 | 30                   |\n| 4 | 4  | 4  | 4  | 4  | 40 | 40                   |\n| 5 | 5  | 5  | 5  | 5  | 50 | 50                   |\n+---+----+----+----+----+----+----------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Importing data using flexible partial column updates:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"k": 1, "v1": 111, "v5": 9, "__DORIS_SEQUENCE_COL__": 9}\n{"k": 2, "v2": 222, "v5": 25, "__DORIS_SEQUENCE_COL__": 25}\n{"k": 3, "v3": 333}\n{"k": 4, "v4": 444, "v5": 50, "v1": 411, "v3": 433, "v2": null, "__DORIS_SEQUENCE_COL__": 50}\n{"k": 5, "v5": null, "__DORIS_SEQUENCE_COL__": null}\n{"k": 6, "v1": 611, "v3": 633}\n{"k": 7, "v3": 733, "v5": 300, "__DORIS_SEQUENCE_COL__": 300}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The final data in the table is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+---+--------+--------+-----+------+--------+\n| k | v1     | v2     | v3  | v4   | v5     |\n+---+--------+--------+-----+------+--------+\n| 0 | 0      | 0      | 0   | 0    | 0      |\n| 1 | 1      | 1      | 1   | 1    | 1      |\n| 5 | 5      | 5      | 5   | 5    | 5      |\n| 2 | 2      | 222    | 2   | 2    | 25     |\n| 3 | 3      | 3      | 333 | 3    | 3      |\n| 4 | 411    | <null> | 433 | 444  | 50     |\n| 6 | 611    | 9876   | 633 | 1234 | <null> |\n| 7 | <null> | 9876   | 733 | 1234 | 300    |\n+---+--------+--------+-----+------+--------+\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["When the table property ",(0,a.jsx)(n.code,{children:"function_column.sequence_col"})," is set in the target table, the key-value pair in the JSON object for flexible column updates with the key ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"})," will be ignored. The value of the ",(0,a.jsx)(n.code,{children:"__DORIS_SEQUENCE_COL__"})," column in a specific row during import will be the same of the final value of the column specified by the table property ",(0,a.jsx)(n.code,{children:"function_column.sequence_col"})," for that row."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For example, for the following table:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE t3 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL DEFAULT "31"\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true",\n"function_column.sequence_col" = "v5");\n'})}),"\n",(0,a.jsx)(n.p,{children:"The original data in the table is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+---+----+----+----+----+----+----------------------+\n| k | v1 | v2 | v3 | v4 | v5 |__DORIS_SEQUENCE_COL__|\n+---+----+----+----+----+----+----------------------+\n| 0 | 0  | 0  | 0  | 0  | 0  | 0                    |\n| 1 | 1  | 1  | 1  | 1  | 10 | 10                   |\n| 2 | 2  | 2  | 2  | 2  | 20 | 20                   |\n| 3 | 3  | 3  | 3  | 3  | 30 | 30                   |\n| 4 | 4  | 4  | 4  | 4  | 40 | 40                   |\n| 5 | 5  | 5  | 5  | 5  | 50 | 50                   |\n+---+----+----+----+----+----+----------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"Using flexible partial updates, the following data is imported:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"k": 1, "v1": 111, "v5": 9}\n{"k": 2, "v2": 222, "v5": 25}\n{"k": 3, "v3": 333}\n{"k": 4, "v4": 444, "v5": 50, "v1": 411, "v3": 433, "v2": null}\n{"k": 5, "v5": null}\n{"k": 6, "v1": 611, "v3": 633}\n{"k": 7, "v3": 733, "v5": 300}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The final data in the table is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+---+--------+--------+-----+------+-----+\n| k | v1     | v2     | v3  | v4   | v5  |\n+---+--------+--------+-----+------+-----+\n| 0 | 0      | 0      | 0   | 0    | 0   |\n| 1 | 1      | 1      | 1   | 1    | 10  |\n| 5 | 5      | 5      | 5   | 5    | 50  |\n| 2 | 2      | 222    | 2   | 2    | 25  |\n| 3 | 3      | 3      | 333 | 3    | 30  |\n| 4 | 411    | <null> | 433 | 444  | 50  |\n| 6 | 611    | 9876   | 633 | 1234 | 31  |\n| 7 | <null> | 9876   | 733 | 1234 | 300 |\n+---+--------+--------+-----+------+-----+\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When using flexible partial updates, the following import parameters cannot be specified or enabled:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"merge_type"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"delete"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"fuzzy_parse"})," parameter cannot be enabled."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"columns"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"jsonpaths"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"hidden_columns"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"function_column.sequence_col"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"sql"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"memtable_on_sink_node"})," option cannot be enabled."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"group_commit"})," parameter cannot be specified."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"where"})," parameter cannot be specified."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Flexible partial updates are not supported on tables with Variant columns."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Flexible partial updates are not supported on tables with synchronous materialized views."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(667294);let a={},l=i.createContext(a);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);