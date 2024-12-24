"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["393069"],{810669:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"data-operate/import/import-way/insert-into-values-manual","title":"Insert Into Values","description":"\x3c!--","source":"@site/docs/data-operate/import/import-way/insert-into-values-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/insert-into-values-manual","permalink":"/docs/dev/data-operate/import/import-way/insert-into-values-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Insert Into Values","language":"en"},"sidebar":"docs","previous":{"title":"Insert Into","permalink":"/docs/dev/data-operate/import/import-way/insert-into-manual"},"next":{"title":"MySQL Load","permalink":"/docs/dev/data-operate/import/import-way/mysql-load-manual"}}'),i=t("785893"),a=t("250065");let r={title:"Insert Into Values",language:"en"},l=void 0,o={},d=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Get started",id:"get-started",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Create an INSERT INTO VALUES job",id:"create-an-insert-into-values-job",level:3},{value:"View INSERT INTO VALUES jobs",id:"view-insert-into-values-jobs",level:3},{value:"Cancel INSERT INTO VALUES jobs",id:"cancel-insert-into-values-jobs",level:3},{value:"Manual",id:"manual",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameter configuration",id:"parameter-configuration",level:3},{value:"Return values",id:"return-values",level:3},{value:"Best practice",id:"best-practice",level:2},{value:"Data size",id:"data-size",level:3},{value:"View error rows",id:"view-error-rows",level:3},{value:"More help",id:"more-help",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The INSERT INTO VALUES statement supports importing the results of a Doris query into another table. INSERT INTO VALUES is a synchronous import method, where the import result is returned after the import is executed. Whether the import is successful can be determined based on the returned result. INSERT INTO VALUES ensures the atomicity of the import task, meaning that either all the data is imported successfully or none of it is imported."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"If a user wants to import only a few test data records to verify the functionality of the Doris system, the INSERT INTO VALUES syntax is applicable. It is similar to the MySQL syntax. However, it is not recommended to use INSERT INTO VALUES in a production environment."}),"\n",(0,i.jsxs)(n.li,{children:["The performance of concurrent INSERT INTO VALUES jobs will be bottlenecked by commit stage. When loading large quantity of data, you can enable ",(0,i.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/group-commit-manual",children:"group commit"})," to achieve high performance."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.p,{children:"When using INSERT INTO VALUES, the import job needs to be initiated and submitted to the FE node using the MySQL protocol. The FE generates an execution plan, which includes query-related operators, with the last operator being the OlapTableSink. The OlapTableSink operator is responsible for writing the query result to the target table. The execution plan is then sent to the BE nodes for execution. Doris designates one BE node as the Coordinator, which receives and distributes the data to other BE nodes."}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,i.jsx)(n.p,{children:"An INSERT INTO VALUES job is submitted and transmitted using the MySQL protocol. The following example demonstrates submitting an import job using INSERT INTO VALUES through the MySQL command-line interface."}),"\n",(0,i.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO VALUES requires INSERT permissions on the target table. You can grant permissions to user accounts using the GRANT command."}),"\n",(0,i.jsx)(n.h3,{id:"create-an-insert-into-values-job",children:"Create an INSERT INTO VALUES job"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"INSERT INTO VALUES"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a source table"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_table(\n    user_id            BIGINT       NOT NULL COMMENT "User ID",\n    name               VARCHAR(20)           COMMENT "User name",\n    age                INT                   COMMENT "User age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Import data into the source table using ",(0,i.jsx)(n.code,{children:"INSERT INTO VALUES"})," (not recommended for production environments)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO testdb.test_table (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n'})}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO VALUES is a synchronous import method, where the import result is directly returned to the user."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:"Query OK, 5 rows affected (0.308 sec)\n{'label':'label_26eebc33411f441c_b2b286730d495e2c', 'status':'VISIBLE', 'txnId':'61071'}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"View imported data."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"MySQL> SELECT COUNT(*) FROM testdb.test_table;\n+----------+\n| count(*) |\n+----------+\n|        5 |\n+----------+\n1 row in set (0.179 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-insert-into-values-jobs",children:"View INSERT INTO VALUES jobs"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"SHOW LOAD"})," command to view the completed INSERT INTO VALUES tasks."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'mysql> SHOW LOAD FROM testdb\\G\n*************************** 1. row ***************************\n         JobId: 77172\n         Label: label_26eebc33411f441c_b2b286730d495e2c\n         State: FINISHED\n      Progress: Unknown id: 77172\n          Type: INSERT\n       EtlInfo: NULL\n      TaskInfo: cluster:N/A; timeout(s):14400; max_filter_ratio:0.0\n      ErrorMsg: NULL\n    CreateTime: 2024-11-20 16:44:08\n  EtlStartTime: 2024-11-20 16:44:08\n EtlFinishTime: 2024-11-20 16:44:08\n LoadStartTime: 2024-11-20 16:44:08\nLoadFinishTime: 2024-11-20 16:44:08\n           URL: \n    JobDetails: {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0}\n TransactionId: 61071\n  ErrorTablets: {}\n          User: root\n       Comment: \n1 row in set (0.00 sec)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"cancel-insert-into-values-jobs",children:"Cancel INSERT INTO VALUES jobs"}),"\n",(0,i.jsx)(n.p,{children:"You can cancel the currently executing INSERT INTO VALUES job via Ctrl-C."}),"\n",(0,i.jsx)(n.h2,{id:"manual",children:"Manual"}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO VALUES is typically used for testing purposes. It is not recommended for production environments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO target_table (col1, col2, ...)\nVALUES (val1, val2, ...), (val3, val4, ...), ...;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameter-configuration",children:"Parameter configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FE"})," ",(0,i.jsx)(n.strong,{children:"configuration"})]}),"\n",(0,i.jsx)(n.p,{children:"insert_load_default_timeout_second"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Default value: 14400s (4 hours)"}),"\n",(0,i.jsx)(n.li,{children:"Description: Timeout for import tasks, measured in seconds. If the import task does not complete within this timeout period, it will be canceled by the system and marked as CANCELLED."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Environment parameters"})}),"\n",(0,i.jsx)(n.p,{children:"insert_timeout"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Default value: 14400s (4 hours)"}),"\n",(0,i.jsx)(n.li,{children:"Description: Timeout for INSERT INTO VALUES as an SQL statement, measured in seconds."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"enable_insert_strict"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Default value: true"}),"\n",(0,i.jsx)(n.li,{children:"Description: If this is set to true, INSERT INTO VALUES will fail when the task involves invalid data. If set to false, INSERT INTO VALUES will ignore invalid rows, and the import will be considered successful as long as at least one row is imported successfully."}),"\n",(0,i.jsx)(n.li,{children:"Explanation: Until version 2.1.4, INSERT INTO VALUES cannot control the error rate, so this parameter is used to either strictly check data quality or completely ignore invalid data. Common reasons for data invalidity include: source data column length exceeding destination column length, column type mismatch, partition mismatch, and column order mismatch."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"insert_max_filter_ratio"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Default value: 1.0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Description: Since version 2.1.5. Only effective when ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," is false. Used to control the error tolerance when using ",(0,i.jsx)(n.code,{children:"INSERT INTO VALUES"}),". The default value is 1.0, which means all errors are tolerated. It can be a decimal between 0 and 1. It means that when the number of error rows exceeds this ratio, the INSERT task will fail."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"return-values",children:"Return values"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO VALUES is a SQL statement, and it returns a JSON string in its results."}),"\n",(0,i.jsx)(n.p,{children:"Parameters in the JSON string:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Label"}),(0,i.jsx)(n.td,{children:'Label of the import job: can be specified using "INSERT INTO tbl WITH LABEL label..."'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Status"}),(0,i.jsxs)(n.td,{children:['Visibility of the imported data: If it is visible, it will be displayed as "visible." If not, it will be displayed as "committed." In the "committed" state, the import is completed, but the data may be delayed in becoming visible. There is no need to retry in this case.',(0,i.jsx)(n.code,{children:"visible"}),": The import is successful and the data is visible.",(0,i.jsx)(n.code,{children:"committed"}),": The import is completed, but the data may be delayed in becoming visible. There is no need to retry in this case.Label Already Exists: The specified label already exists and needs to be changed to a different one.Fail: The import fails."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Err"}),(0,i.jsx)(n.td,{children:"Error message"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TxnId"}),(0,i.jsx)(n.td,{children:"ID of the import transaction"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Successful INSERT"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (NULL, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.05 sec)\n{'label':'label_26eebc33411f441c_b2b286730d495e2c', 'status':'VISIBLE', 'txnId':'61071'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Query OK"})," indicates successful execution. ",(0,i.jsx)(n.code,{children:"5 rows affected"})," indicates that a total of 5 rows of data have been imported."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Successful INSERT with warnings"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (NULL, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 4 rows affected, 1 warning (0.04 sec)\n{'label':'label_a8d99ae931194d2b_93357aac59981a18', 'status':'VISIBLE', 'txnId':'61068'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Query OK"})," indicates successful execution. ",(0,i.jsx)(n.code,{children:"4 rows affected"})," indicates that a total of 4 rows of data have been imported. ",(0,i.jsx)(n.code,{children:"1 warnings"})," indicates the number of rows that were filtered out."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"../../../sql-statements/data-modification/load-and-export/SHOW-LOAD.md",children:"SHOW LOAD"})," statement to view the filtered rows."]}),"\n",(0,i.jsx)(n.p,{children:'The result of this statement will include a URL that can be used to query the error data. For more details, refer to the "View error rows" section below.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW LOAD WHERE label="label_a8d99ae931194d2b_93357aac59981a18"\\G\n*************************** 1. row ***************************\n         JobId: 77158\n         Label: label_a8d99ae931194d2b_93357aac59981a18\n         State: FINISHED\n      Progress: Unknown id: 77158\n          Type: INSERT\n       EtlInfo: NULL\n      TaskInfo: cluster:N/A; timeout(s):14400; max_filter_ratio:0.0\n      ErrorMsg: NULL\n    CreateTime: 2024-11-20 16:35:40\n  EtlStartTime: 2024-11-20 16:35:40\n EtlFinishTime: 2024-11-20 16:35:40\n LoadStartTime: 2024-11-20 16:35:40\nLoadFinishTime: 2024-11-20 16:35:40\n           URL: http://10.16.10.7:8743/api/_load_error_log?file=__shard_18/error_log_insert_stmt_a8d99ae931194d2b-93357aac59981a19_a8d99ae931194d2b_93357aac59981a19\n    JobDetails: {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0}\n TransactionId: 61068\n  ErrorTablets: {}\n          User: root\n       Comment: \n1 row in set (0.00 sec)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Successful INSERT with committed status"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (4, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.04 sec)\n{'label':'label_78bf5396d9594d4d_a8d9a914af40f73d', 'status':'COMMITTED', 'txnId':'61074'}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The invisible state of data is temporary, and the data will eventually become visible."}),"\n",(0,i.jsxs)(n.p,{children:["You can check the visibility status of a batch of data using the ",(0,i.jsx)(n.a,{href:"../../../sql-manual/sql-statements/transaction/SHOW-TRANSACTION.md",children:"SHOW TRANSACTION"})," statement."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"TransactionStatus"})," column in the result is ",(0,i.jsx)(n.code,{children:"visible"}),", it indicates that the data is visible."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW TRANSACTION WHERE id=61074\\G\n*************************** 1. row ***************************\n     TransactionId: 61074\n             Label: label_78bf5396d9594d4d_a8d9a914af40f73d\n       Coordinator: FE: 10.16.10.7\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2024-11-20 16:51:54\n     PreCommitTime: NULL\n        CommitTime: 2024-11-20 16:51:54\n       PublishTime: 2024-11-20 16:51:54\n        FinishTime: 2024-11-20 16:51:54\n            Reason: \nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 14400000\n            ErrMsg: \n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Non-empty result set but failed INSERT"})}),"\n",(0,i.jsx)(n.p,{children:"Failed execution means that no data was successfully imported. An error message will be returned:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, "Emily", 25), (2, "Benjamin", 35), (3, "Olivia", 28), (NULL, "Alexander", 60), (5, "Ava", 17);\nERROR 1105 (HY000): errCode = 2, detailMessage = Insert has too many filtered data 1/5 insert_max_filter_ratio is 0.100000. url: http://10.16.10.7:8747/api/_load_error_log?file=__shard_22/error_log_insert_stmt_5fafe6663e1a45e0-a666c1722ffc8c55_5fafe6663e1a45e0_a666c1722ffc8c55\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = Insert has too many filtered data 1/5 insert_max_filter_ratio is 0.100000."}),' indicates the root cause for the failure. The URL provided in the error message can be used to locate the error data. For more details, refer to the "View error rows" section below.']}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"Best practice"}),"\n",(0,i.jsx)(n.h3,{id:"data-size",children:"Data size"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO VALUES is usually used for test and demo, it is not recommended to load large quantity data with INSERT INTO VALUES."}),"\n",(0,i.jsx)(n.h3,{id:"view-error-rows",children:"View error rows"}),"\n",(0,i.jsx)(n.p,{children:"When the INSERT INTO result includes a URL field, you can use the following command to view the error rows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'SHOW LOAD WARNINGS ON "url";\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW LOAD WARNINGS ON "http://10.16.10.7:8743/api/_load_error_log?file=__shard_18/error_log_insert_stmt_a8d99ae931194d2b-93357aac59981a19_a8d99ae931194d2b_93357aac59981a19"\\G\n*************************** 1. row ***************************\n         JobId: -1\n         Label: NULL\nErrorMsgDetail: Reason: column_name[user_id], null value for not null column, type=BIGINT. src line []; \n1 row in set (0.00 sec)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Common reasons for errors include: source data column length exceeding destination column length, column type mismatch, partition mismatch, and column order mismatch."}),"\n",(0,i.jsxs)(n.p,{children:["You can control whether INSERT INTO ignores error rows by configuring the environment variable ",(0,i.jsx)(n.code,{children:"enable_insert_strict"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"more-help",children:"More help"}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed syntax on INSERT INTO, refer to the ",(0,i.jsx)(n.a,{href:"../../../sql-statements/data-modification/DML/INSERT.md",children:"INSERT INTO"})," command manual. You can also type ",(0,i.jsx)(n.code,{children:"HELP INSERT"})," at the MySQL client command line for further information."]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);