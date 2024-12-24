"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["858044"],{122859:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"query/nereids/statistics","title":"Statistics","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/query/nereids/statistics.md","sourceDirName":"query/nereids","slug":"/query/nereids/statistics","permalink":"/docs/2.0/query/nereids/statistics","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Statistics","language":"en"},"sidebar":"docs","previous":{"title":"Nereids-the Brand New Planner","permalink":"/docs/2.0/query/nereids/nereids-new"},"next":{"title":"Pipeline Execution Engine","permalink":"/docs/2.0/query/pipeline-execution-engine"}}'),l=n("785893"),i=n("250065");let a={title:"Statistics",language:"en"},c="Statistics",r={},o=[{value:"1. Collecting Statistics",id:"1-collecting-statistics",level:2},{value:"1.1 Manual Collection Using ANALYZE Statement",id:"11-manual-collection-using-analyze-statement",level:3},{value:"1.2 Automatic Collection",id:"12-automatic-collection",level:3},{value:"2. Job Management",id:"2-job-management",level:2},{value:"2.1 View Analyze Jobs",id:"21-view-analyze-jobs",level:3},{value:"2.2 View Column Statistics Collection Status",id:"22-view-column-statistics-collection-status",level:3},{value:"2.3 View Column Statistics",id:"23-view-column-statistics",level:3},{value:"2.4 Table Collection Overview",id:"24-table-collection-overview",level:3},{value:"2.5 Terminate Statistics Jobs",id:"25-terminate-statistics-jobs",level:3},{value:"3. Session Variables and Configuration Options",id:"3-session-variables-and-configuration-options",level:2},{value:"3.1 Session Variables",id:"31-session-variables",level:3},{value:"3.2 FE Configuration Options",id:"32-fe-configuration-options",level:3},{value:"4. Common Issues",id:"4-common-issues",level:2},{value:"4.1 ANALYZE Submission Error: Stats table not available...",id:"41-analyze-submission-error-stats-table-not-available",level:3},{value:"4.2 Failure of ANALYZE on Large Tables",id:"42-failure-of-analyze-on-large-tables",level:3}];function d(e){let t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"statistics",children:"Statistics"})}),"\n",(0,l.jsx)(t.p,{children:"Collecting statistics helps the optimizer understand data distribution characteristics. When performing Cost-Based Optimization (CBO), the optimizer uses these statistics to calculate the selectivity of predicates and estimate the cost of each execution plan. This allows for the selection of more optimal plans, significantly improving query efficiency."}),"\n",(0,l.jsx)(t.p,{children:"Currently, the following information is collected for each column:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Information"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"row_count"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Total number of rows"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"data_size"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Total data size"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"avg_size_byte"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Average length of values"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"ndv"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of distinct values"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"min"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Minimum value"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"max"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Maximum value"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"null_count"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of null values"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"1-collecting-statistics",children:"1. Collecting Statistics"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"11-manual-collection-using-analyze-statement",children:"1.1 Manual Collection Using ANALYZE Statement"}),"\n",(0,l.jsx)(t.p,{children:"Doris allows users to manually trigger the collection and update of statistics by submitting the ANALYZE statement."}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"ANALYZE < TABLE | DATABASE table_name | db_name > \n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n"})}),"\n",(0,l.jsx)(t.p,{children:"Where:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"table_name"}),": The specified target table. It can be in the format ",(0,l.jsx)(t.code,{children:"db_name.table_name"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"column_name"}),": The specified target column. It must be an existing column in ",(0,l.jsx)(t.code,{children:"table_name"}),". You can specify multiple column names separated by commas."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"sync"}),": Collect statistics synchronously. Returns after collection. If not specified, it executes asynchronously and returns a JOB ID."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"sample percent | rows"}),": Collect statistics with sampling. You can specify a sampling percentage or a number of sampling rows."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"By default (WITH SAMPLE is not specified), a table will be fully analyzed. For relatively large tables (e.g. above 5GiB), from the perspective of system resources, we recommend sampling analyze, and the number of sampled rows is recommended to be no less than 4 million rows. Here are some examples:"}),"\n",(0,l.jsx)(t.p,{children:"Collect statistics for a table with full analyze:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ANALYZE TABLE lineitem;\n"})}),"\n",(0,l.jsx)(t.p,{children:"Collect statistics for a table with a 10% sampling rate:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n"})}),"\n",(0,l.jsx)(t.p,{children:"Collect statistics for a table with a sample of 100,000 rows:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h3,{id:"12-automatic-collection",children:"1.2 Automatic Collection"}),"\n",(0,l.jsxs)(t.p,{children:["This feature has been officially supported since 2.0.3 and is enabled by default. The basic operation logic is described below. After each import transaction commit, Doris records the number of rows updated by the import transaction to estimate the health of the existing table's statistics data (for tables that have not collected statistics, their health is 0). When the health of a table is below 60 (adjustable through the ",(0,l.jsx)(t.code,{children:"table_stats_health_threshold"})," parameter), Doris considers the statistics for that table outdated and triggers statistics collection jobs for that table in subsequent operations. For tables with a health value above 60, no repeated collection is performed."]}),"\n",(0,l.jsxs)(t.p,{children:["The collection jobs for statistics themselves consume a certain amount of system resources. To minimize the overhead, Doris automatically uses sampling to collect statistics. Automatic sampling defaults to sample 4,194,304 (2^22) rows to reduce the system's burden and complete the collection job as quickly as possible. If you want to sample more rows to obtain a more accurate data distribution, you can increase the sampling row count by adjusting the ",(0,l.jsx)(t.code,{children:"huge_table_default_sample_rows"})," parameter. You can also control the full collection of small tables and the collection interval of large tables through session variables. For detailed configuration, please refer to ",(0,l.jsx)(t.a,{href:"/docs/2.0/query/nereids/statistics#31-session-variables",children:"3.1"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["If you are concerned about automatic collection jobs interfering with your business, you can specify a time frame for the automatic collection jobs to run during low business loads by setting the ",(0,l.jsx)(t.code,{children:"auto_analyze_start_time"})," and ",(0,l.jsx)(t.code,{children:"auto_analyze_end_time"})," parameters according to your needs. You can also completely disable this feature by setting the ",(0,l.jsx)(t.code,{children:"enable_auto_analyze"})," parameter to ",(0,l.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"External catalogs do not participate in automatic collection by default. Because external catalogs often contain massive historical data, if they participate in automatic collection, it may occupy too many resources. You can turn on and off the automatic collection of external catalogs by setting the catalog's properties."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='true'); // Turn on\nALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='false'); // Turn off\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h2,{id:"2-job-management",children:"2. Job Management"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"21-view-analyze-jobs",children:"2.1 View Analyze Jobs"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"SHOW ANALYZE"})," to view information about statistics collection jobs."]}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:'SHOW [AUTO] ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n'})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"AUTO: Show historical information for automatic collection jobs only. Note that, by default, the status of only the last 20,000 completed automatic collection jobs is retained."}),"\n",(0,l.jsxs)(t.li,{children:["table_name: Table name, specify to view statistics job information for that table. It can be in the format ",(0,l.jsx)(t.code,{children:"db_name.table_name"}),". When not specified, it returns information for all statistics jobs."]}),"\n",(0,l.jsxs)(t.li,{children:["job_id: Job ID for statistics collection, obtained when executing ",(0,l.jsx)(t.code,{children:"ANALYZE"}),". When not specified, this command returns information for all statistics jobs."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Output:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Column Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"job_id"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"catalog_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Catalog Name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"db_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Database Name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"tbl_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Table Name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"col_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Column Name List"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"job_type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job Type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"analysis_type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Analysis Type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"message"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job Information"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"last_exec_time_in_ms"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Last Execution Time"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"state"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job Status"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"schedule_type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Scheduling Method"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> show analyze 245073\\G;\n*************************** 1. row ***************************\n              job_id: 245073\n        catalog_name: internal\n             db_name: default_cluster:tpch\n            tbl_name: lineitem\n            col_name: [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct]\n            job_type: MANUAL\n       analysis_type: FUNDAMENTALS\n             message: \nlast_exec_time_in_ms: 2023-11-07 11:00:52\n               state: FINISHED\n            progress: 16 Finished  |  0 Failed  |  0 In Progress  |  16 Total\n       schedule_type: ONCE\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h3,{id:"22-view-column-statistics-collection-status",children:"2.2 View Column Statistics Collection Status"}),"\n",(0,l.jsx)(t.p,{children:"Each collection job can contain one or more tasks, with each task corresponding to the collection of a column. Users can use the following command to view the completion status of statistics collection for each column."}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW ANALYZE TASK STATUS [job_id]\n"})}),"\n",(0,l.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"mysql> show analyze task status 20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h3,{id:"23-view-column-statistics",children:"2.3 View Column Statistics"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"SHOW COLUMN STATS"})," to view various statistics data for columns."]}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n"})}),"\n",(0,l.jsx)(t.p,{children:"Where:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"cached: Show statistics information in the current FE memory cache."}),"\n",(0,l.jsxs)(t.li,{children:["table_name: The target table for collecting statistics. It can be in the format ",(0,l.jsx)(t.code,{children:"db_name.table_name"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["column_name: Specifies the target column, which must be an existing column in ",(0,l.jsx)(t.code,{children:"table_name"}),". You can specify multiple column names separated by commas."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h3,{id:"24-table-collection-overview",children:"2.4 Table Collection Overview"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"SHOW TABLE STATS"})," to view an overview of statistics collection for a table."]}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"SHOW TABLE STATS table_name;\n"})}),"\n",(0,l.jsx)(t.p,{children:"Where:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["table_name: The target table name. It can be in the format ",(0,l.jsx)(t.code,{children:"db_name.table_name"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Output:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Column Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"updated_rows"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Updated rows since the last ANALYZE"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"query_times"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reserved column for recording the number of times the table was queried in future versions"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"row_count"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Number of rows (does not reflect the exact number of rows at the time of command execution)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"updated_time"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Last update time"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"columns"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Columns for which statistics information has been collected"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> show table stats lineitem \\G;\n*************************** 1. row ***************************\nupdated_rows: 0\n query_times: 0\n   row_count: 6001215\nupdated_time: 2023-11-07\n     columns: [l_returnflag, l_receiptdate, l_tax, l_shipmode, l_suppkey, l_shipdate, l_commitdate, l_partkey, l_orderkey, l_quantity, l_linestatus, l_comment, l_extendedprice, l_linenumber, l_discount, l_shipinstruct]\n     trigger: MANUAL\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h3,{id:"25-terminate-statistics-jobs",children:"2.5 Terminate Statistics Jobs"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"KILL ANALYZE"})," to terminate running statistics jobs."]}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"KILL ANALYZE job_id;\n"})}),"\n",(0,l.jsx)(t.p,{children:"Where:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["job_id: Job ID for statistics collection. Obtained when performing asynchronous statistics collection using the ",(0,l.jsx)(t.code,{children:"ANALYZE"})," statement, and it can also be obtained through the ",(0,l.jsx)(t.code,{children:"SHOW ANALYZE"})," statement."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Example:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Terminate statistics job with ID 52357."}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"mysql> KILL ANALYZE 52357;\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h2,{id:"3-session-variables-and-configuration-options",children:"3. Session Variables and Configuration Options"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"31-session-variables",children:"3.1 Session Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Session Variable"}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{children:"Default Value"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"auto_analyze_start_time"}),(0,l.jsx)(t.td,{children:"Start time for automatic statistics collection"}),(0,l.jsx)(t.td,{children:"00:00:00"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"auto_analyze_end_time"}),(0,l.jsx)(t.td,{children:"End time for automatic statistics collection"}),(0,l.jsx)(t.td,{children:"23:59:59"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"enable_auto_analyze"}),(0,l.jsx)(t.td,{children:"Enable automatic collection functionality"}),(0,l.jsx)(t.td,{children:"true"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"huge_table_default_sample_rows"}),(0,l.jsx)(t.td,{children:"Sampling rows for large tables"}),(0,l.jsx)(t.td,{children:"4194304"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"huge_table_lower_bound_size_in_bytes"}),(0,l.jsx)(t.td,{children:"Tables with size greater than this value will be automatically sampled during collection of statistics"}),(0,l.jsx)(t.td,{children:"0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"huge_table_auto_analyze_interval_in_millis"}),(0,l.jsxs)(t.td,{children:["Controls the minimum time interval for automatic ANALYZE on large tables. Tables with sizes greater than ",(0,l.jsx)(t.code,{children:"huge_table_lower_bound_size_in_bytes * 5"})," will be ANALYZEed only once within this time interval."]}),(0,l.jsx)(t.td,{children:"0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"table_stats_health_threshold"}),(0,l.jsxs)(t.td,{children:["Ranges from 0 to 100. If data updates since the last statistics collection exceed ",(0,l.jsx)(t.code,{children:"(100 - table_stats_health_threshold)%"}),", the table's statistics are considered outdated."]}),(0,l.jsx)(t.td,{children:"60"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"analyze_timeout"}),(0,l.jsx)(t.td,{children:"Controls the timeout for synchronous ANALYZE in seconds"}),(0,l.jsx)(t.td,{children:"43200"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"auto_analyze_table_width_threshold"}),(0,l.jsx)(t.td,{children:"Controls the maximum width of table that will be auto analyzed. Table with more columns than this value will not be auto analyzed."}),(0,l.jsx)(t.td,{children:"100"})]})]})]}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h3,{id:"32-fe-configuration-options",children:"3.2 FE Configuration Options"}),"\n",(0,l.jsx)(t.p,{children:"The following FE configuration options are typically not a major concern:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"FE Configuration Option"}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{children:"Default Value"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"analyze_record_limit"}),(0,l.jsx)(t.td,{children:"Controls the persistence of statistics job execution records"}),(0,l.jsx)(t.td,{children:"20000"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"stats_cache_size"}),(0,l.jsx)(t.td,{children:"FE-side statistics cache entries"}),(0,l.jsx)(t.td,{children:"500,000"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"statistics_simultaneously_running_task_num"}),(0,l.jsx)(t.td,{children:"Number of asynchronous jobs that can run simultaneously"}),(0,l.jsx)(t.td,{children:"3"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"statistics_sql_mem_limit_in_bytes"}),(0,l.jsx)(t.td,{children:"Controls the amount of BE memory each statistics SQL can use"}),(0,l.jsx)(t.td,{children:"2,147,483,648 bytes (2 GiB)"})]})]})]}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.h2,{id:"4-common-issues",children:"4. Common Issues"}),"\n",(0,l.jsx)(t.h3,{id:"41-analyze-submission-error-stats-table-not-available",children:"4.1 ANALYZE Submission Error: Stats table not available..."}),"\n",(0,l.jsxs)(t.p,{children:["When ANALYZE is executed, statistics data is written to the internal table ",(0,l.jsx)(t.code,{children:"__internal_schema.column_statistics"}),". FE checks the tablet status of this table before executing ANALYZE. If there are unavailable tablets, the task is rejected. Please check the BE cluster status if this error occurs."]}),"\n",(0,l.jsxs)(t.p,{children:["Users can use ",(0,l.jsx)(t.code,{children:"SHOW BACKENDS\\G"})," to verify the BE (Backend) status. If the BE status is normal, you can use the command ",(0,l.jsx)(t.code,{children:"ADMIN SHOW REPLICA STATUS FROM __internal_schema.[tbl_in_this_db]"})," to check the tablet status within this database, ensuring that the tablet status is also normal."]}),"\n",(0,l.jsx)(t.h3,{id:"42-failure-of-analyze-on-large-tables",children:"4.2 Failure of ANALYZE on Large Tables"}),"\n",(0,l.jsxs)(t.p,{children:["Due to resource limitations, ANALYZE on some large tables may timeout or exceed BE memory limits. In such cases, it is recommended to use ",(0,l.jsx)(t.code,{children:"ANALYZE ... WITH SAMPLE..."}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var s=n(667294);let l={},i=s.createContext(l);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);