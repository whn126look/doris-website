"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["147437"],{213451:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var n=JSON.parse('{"id":"data-operate/import/import-way/insert-into-manual","title":"Insert Into","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/data-operate/import/import-way/insert-into-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/insert-into-manual","permalink":"/docs/1.2/data-operate/import/import-way/insert-into-manual","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Insert Into","language":"en"},"sidebar":"docs","previous":{"title":"S3 Load","permalink":"/docs/1.2/data-operate/import/import-way/s3-load-manual"},"next":{"title":"Load JSON Format Data","permalink":"/docs/1.2/data-operate/import/import-way/load-json-format"}}'),i=s("785893"),r=s("250065");let o={title:"Insert Into",language:"en"},a="Insert Into",l={},c=[{value:"Import operations and load results",id:"import-operations-and-load-results",level:2},{value:"Relevant System Configuration",id:"relevant-system-configuration",level:2},{value:"FE configuration",id:"fe-configuration",level:3},{value:"Session Variables",id:"session-variables",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Application scenarios",id:"application-scenarios",level:3},{value:"Data volume",id:"data-volume",level:3},{value:"Complete examples",id:"complete-examples",level:3},{value:"Common Questions",id:"common-questions",level:2},{value:"more help",id:"more-help",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"insert-into",children:"Insert Into"})}),"\n",(0,i.jsx)(t.p,{children:"The use of Insert Into statements is similar to that of Insert Into statements in databases such as MySQL. But in Doris, all data writing is a separate import job. So Insert Into is also introduced here as an import method."}),"\n",(0,i.jsx)(t.p,{children:"The main Insert Into command contains the following two kinds;"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"INSERT INTO tbl SELECT ..."}),"\n",(0,i.jsx)(t.li,{children:"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The second command is for Demo only, not in a test or production environment."}),"\n",(0,i.jsx)(t.h2,{id:"import-operations-and-load-results",children:"Import operations and load results"}),"\n",(0,i.jsx)(t.p,{children:"The Insert Into command needs to be submitted through MySQL protocol. Creating an import request returns the import result synchronously."}),"\n",(0,i.jsx)(t.p,{children:"The following are examples of the use of two Insert Intos:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: When you need to use ",(0,i.jsx)(t.code,{children:"CTE(Common Table Expressions)"})," as the query part in an insert operation, you must specify the ",(0,i.jsx)(t.code,{children:"WITH LABEL"})," and column list parts or wrap ",(0,i.jsx)(t.code,{children:"CTE"}),". Example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\nINSERT INTO tbl1 (k1)\nselect * from (\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1) as ret\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For specific parameter description, you can refer to ",(0,i.jsx)(t.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",children:"INSERT INTO"})," command or execute ",(0,i.jsx)(t.code,{children:"HELP INSERT "})," to see its help documentation for better use of this import method."]}),"\n",(0,i.jsx)(t.p,{children:"Insert Into itself is a SQL command, and the return result is divided into the following types according to the different execution results:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Result set is empty"}),"\n",(0,i.jsx)(t.p,{children:"If the result set of the insert corresponding SELECT statement is empty, it is returned as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Query OK"})," indicates successful execution. ",(0,i.jsx)(t.code,{children:"0 rows affected"})," means that no data was loaded."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The result set is not empty"}),"\n",(0,i.jsx)(t.p,{children:"In the case where the result set is not empty. The returned results are divided into the following situations:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Insert is successful and data is visible:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Query OK"})," indicates successful execution. ",(0,i.jsx)(t.code,{children:"4 rows affected"})," means that a total of 4 rows of data were imported. ",(0,i.jsx)(t.code,{children:"2 warnings"})," indicates the number of lines to be filtered."]}),"\n",(0,i.jsx)(t.p,{children:"Also returns a json string:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005', 'err': 'some other error'}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"label"})," is a user-specified label or an automatically generated label. Label is the ID of this Insert Into load job. Each load job has a label that is unique within a single database."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"status"})," indicates whether the loaded data is visible. If visible, show ",(0,i.jsx)(t.code,{children:"visible"}),", if not, show",(0,i.jsx)(t.code,{children:"committed"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"txnId"})," is the id of the load transaction corresponding to this insert."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"err"})," field displays some other unexpected errors."]}),"\n",(0,i.jsx)(t.p,{children:"When user need to view the filtered rows, the user can use the following statement"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'show load where label = "xxx";\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The URL in the returned result can be used to query the wrong data. For details, see the following ",(0,i.jsx)(t.strong,{children:"View Error Lines"})," Summary.    ",(0,i.jsx)(t.strong,{children:'"Data is not visible" is a temporary status, this batch of data must be visible eventually'})]}),"\n",(0,i.jsx)(t.p,{children:"You can view the visible status of this batch of data with the following statement:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"show transaction where id = 4005;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.code,{children:"TransactionStatus"})," column in the returned result is ",(0,i.jsx)(t.code,{children:"visible"}),", the data is visible."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Insert fails"}),"\n",(0,i.jsx)(t.p,{children:"Execution failure indicates that no data was successfully loaded, and returns as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. Url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de850e8de850\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"ERROR 1064 (HY000): all partitions have no load data"})," shows the reason for the failure. The latter url can be used to query the wrong data. For details, see the following ",(0,i.jsx)(t.strong,{children:"View Error Lines"})," Summary."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"In summary, the correct processing logic for the results returned by the insert operation should be:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If the returned result is ",(0,i.jsx)(t.code,{children:"ERROR 1064 (HY000)"}),", it means that the import failed."]}),"\n",(0,i.jsxs)(t.li,{children:["If the returned result is ",(0,i.jsx)(t.code,{children:"Query OK"}),", it means the execution was successful.\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If ",(0,i.jsx)(t.code,{children:"rows affected"})," is 0, the result set is empty and no data is loaded."]}),"\n",(0,i.jsxs)(t.li,{children:["If",(0,i.jsx)(t.code,{children:"rows affected"})," is greater than 0:\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If ",(0,i.jsx)(t.code,{children:"status"})," is",(0,i.jsx)(t.code,{children:"committed"}),", the data is not yet visible. You need to check the status through the ",(0,i.jsx)(t.code,{children:"show transaction"})," statement until ",(0,i.jsx)(t.code,{children:"visible"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["If ",(0,i.jsx)(t.code,{children:"status"})," is",(0,i.jsx)(t.code,{children:"visible"}),", the data is loaded successfully."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["If ",(0,i.jsx)(t.code,{children:"warnings"})," is greater than 0, it means that some data is filtered. You can get the url through the ",(0,i.jsx)(t.code,{children:"show load"})," statement to see the filtered rows."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In the previous section, we described how to follow up on the results of insert operations. However, it is difficult to get the json string of the returned result in some mysql libraries. Therefore, Doris also provides the ",(0,i.jsx)(t.code,{children:"SHOW LAST INSERT"})," command to explicitly retrieve the results of the last insert operation."]}),"\n",(0,i.jsxs)(t.p,{children:["After executing an insert operation, you can execute ",(0,i.jsx)(t.code,{children:"SHOW LAST INSERT"})," on the same session connection. This command returns the result of the most recent insert operation, e.g."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"mysql> show last insert\\G\n*************************** 1. row ***************************\n    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command returns the insert results and the details of the corresponding transaction. Therefore, you can continue to execute the ",(0,i.jsx)(t.code,{children:"show last insert"})," command after each insert operation to get the insert results."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note: This command will only return the results of the last insert operation within the same session connection. If the connection is broken or replaced with a new one, the empty set will be returned."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"relevant-system-configuration",children:"Relevant System Configuration"}),"\n",(0,i.jsx)(t.h3,{id:"fe-configuration",children:"FE configuration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"time out"}),"\n",(0,i.jsx)(t.p,{children:"The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED."}),"\n",(0,i.jsxs)(t.p,{children:["At present, Insert Into does not support custom import timeout time. All Insert Into imports have a uniform timeout time. The default timeout time is 1 hour. If the imported source file cannot complete the import within the specified time, the parameter ",(0,i.jsx)(t.code,{children:"insert_load_default_timeout_second"})," of FE needs to be adjusted."]}),"\n",(0,i.jsxs)(t.p,{children:["At the same time, the Insert Into statement receives the restriction of the Session variable ",(0,i.jsx)(t.code,{children:"insert_timeout"}),". You can increase the timeout time by ",(0,i.jsx)(t.code,{children:"SET insert_timeout = xxx;"})," in seconds."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"session-variables",children:"Session Variables"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"enable_insert_strict"}),"\n",(0,i.jsxs)(t.p,{children:["The Insert Into import itself cannot control the tolerable error rate of the import. Users can only use the Session parameter ",(0,i.jsx)(t.code,{children:"enable_insert_strict"}),". When this parameter is set to false, it indicates that at least one data has been imported correctly, and then it returns successfully. When this parameter is set to true, the import fails if there is a data error. The default is false. It can be set by ",(0,i.jsx)(t.code,{children:"SET enable_insert_strict = true;"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"query_timeout"}),"\n",(0,i.jsxs)(t.p,{children:["Insert Into itself is also an SQL command, and the Insert Into statement is restricted by the Session variable  ",(0,i.jsx)(t.code,{children:"insert_timeout"}),". You can increase the timeout time by ",(0,i.jsx)(t.code,{children:"SET insert_timeout = xxx;"})," in seconds."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(t.h3,{id:"application-scenarios",children:"Application scenarios"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Users want to import only a few false data to verify the functionality of Doris system. The grammar of INSERT INTO VALUES is suitable at this time."}),"\n",(0,i.jsx)(t.li,{children:"Users want to convert the data already in the Doris table into ETL and import it into a new Doris table, which is suitable for using INSERT INTO SELECT grammar."}),"\n",(0,i.jsx)(t.li,{children:"Users can create an external table, such as MySQL external table mapping a table in MySQL system. Or create Broker external tables to map data files on HDFS. Then the data from the external table is imported into the Doris table for storage through the INSERT INTO SELECT grammar."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"data-volume",children:"Data volume"}),"\n",(0,i.jsx)(t.p,{children:"Insert Into has no limitation on the amount of data, and large data imports can also be supported. However, Insert Into has a default timeout time, and the amount of imported data estimated by users is too large, so it is necessary to modify the system's Insert Into import timeout time."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"Import data volume = 36G or less than 3600s*10M/s\nAmong them, 10M/s is the maximum import speed limit. Users need to calculate the average import speed according to the current cluster situation to replace 10M/s in the formula.\n"})}),"\n",(0,i.jsx)(t.h3,{id:"complete-examples",children:"Complete examples"}),"\n",(0,i.jsx)(t.p,{children:"Users have a table store sales in the database sales. Users create a table called bj store sales in the database sales. Users want to import the data recorded in the store sales into the new table bj store sales. The amount of data imported is about 10G."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"large sales scheme\n(id, total, user_id, sale_timestamp, region)\n\nOrder large sales schedule:\n(id, total, user_id, sale_timestamp)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Cluster situation: The average import speed of current user cluster is about 5M/s"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Step1: Determine whether you want to modify the default timeout of Insert Into"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"Calculate the approximate time of import\n10G / 5M /s = 2000s\n\nModify FE configuration\ninsert_load_default_timeout_second = 2000\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Step2: Create Import Tasks"}),"\n",(0,i.jsx)(t.p,{children:"Since users want to ETL data from a table and import it into the target table, they should use the Insert in query\\stmt mode to import it."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'INSERT INTO bj_store_sales SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"common-questions",children:"Common Questions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"View the wrong line"}),"\n",(0,i.jsxs)(t.p,{children:["Because Insert Into can't control the error rate, it can only tolerate or ignore the error data completely by ",(0,i.jsx)(t.code,{children:"enable_insert_strict"}),". So if ",(0,i.jsx)(t.code,{children:"enable_insert_strict"})," is set to true, Insert Into may fail. If ",(0,i.jsx)(t.code,{children:"enable_insert_strict"})," is set to false, then only some qualified data may be imported. However, in either case, Doris is currently unable to provide the ability to view substandard data rows. Therefore, the user cannot view the specific import error through the Insert Into statement."]}),"\n",(0,i.jsx)(t.p,{children:"The causes of errors are usually: source data column length exceeds destination data column length, column type mismatch, partition mismatch, column order mismatch, etc. When it's still impossible to check for problems. At present, it is only recommended that the SELECT command in the Insert Into statement be run to export the data to a file, and then import the file through Stream load to see the specific errors."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"more-help",children:"more help"}),"\n",(0,i.jsxs)(t.p,{children:["For more detailed syntax and best practices used by insert into, see ",(0,i.jsx)(t.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",children:"insert"})," command manual, you can also enter ",(0,i.jsx)(t.code,{children:"HELP INSERT"})," in the MySql client command line for more help information."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return o}});var n=s(667294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);