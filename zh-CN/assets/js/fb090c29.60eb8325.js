"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["925249"],{726764:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=a(447622),n=a(785893),s=a(250065);let r={title:"Empowering cyber security by enabling 7 times faster log analysis",description:"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management.",date:"2023-12-07",author:"Apache Doris",tags:["Best Practice"],image:"/images/cyber-security.png"},o=void 0,d={authorsImageUrls:[void 0]},l=[{value:"Log storage &amp; analysis platform",id:"log-storage--analysis-platform",level:2},{value:"Slow data writing",id:"slow-data-writing",level:3},{value:"Slow query execution",id:"slow-query-execution",level:3},{value:"Architectural upgrade",id:"architectural-upgrade",level:2},{value:"300% data writing speed",id:"300-data-writing-speed",level:3},{value:"60% storage cost",id:"60-storage-cost",level:3},{value:"690% query speed",id:"690-query-speed",level:3},{value:"Visualized operation &amp; maintenance",id:"visualized-operation--maintenance",level:3}];function c(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management."}),"\n",(0,n.jsx)(t.h2,{id:"log-storage--analysis-platform",children:"Log storage & analysis platform"}),"\n",(0,n.jsx)(t.p,{children:"In this use case, the LSAS collects system logs from its enterprise users, scans them, and detects viruses. It also provides data management and file tracking services."}),"\n",(0,n.jsxs)(t.p,{children:["Within the LSAS, it scans local files and uploads the file information as MD5 values to its cloud engine and identifies suspicious viruses. The cloud engine returns a log entry to tell the risk level of the files. The log entry includes messages like ",(0,n.jsx)(t.code,{children:"file_name"}),", ",(0,n.jsx)(t.code,{children:"file_size"}),", ",(0,n.jsx)(t.code,{children:"file_level"}),", and ",(0,n.jsx)(t.code,{children:"event_time"}),". Such information goes into a Topic in Apache Kafka, and then the real-time data warehouse normalizes the log messages. After that, all log data will be backed up to the offline data warehouse. Some log data requires further security analysis, so it will be pulled into the analytic engine and the self-developed Extended Detection and Response system (XDR) for more comprehensive detection."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cyber-security-log-storage-and-analysis-platform",src:a(325312).Z+"",width:"1280",height:"536"})}),"\n",(0,n.jsx)(t.p,{children:"The above process comes down to log writing and analysis, and the company faced some issues in both processes with their old system, which used StarRocks as the analytic engine."}),"\n",(0,n.jsx)(t.h3,{id:"slow-data-writing",children:"Slow data writing"}),"\n",(0,n.jsx)(t.p,{children:"The cloud engine interacts with tens of millions of terminal software and digests over 100 billion logs every day. The enormous data size poses a big challenge. The LSAS used to rely on StarRocks for log storage. With the ever-increasing daily log influx, data writing gradually slows down. The severe backlogs during peak times undermines system stability. They tried scaling the cluster from 3 nodes to 13 nodes, but the writing speed wasn't substantially improved."}),"\n",(0,n.jsx)(t.h3,{id:"slow-query-execution",children:"Slow query execution"}),"\n",(0,n.jsx)(t.p,{children:"From an execution standpoint, extracting security information from logs involves a lot of keyword matching in the text fields (URL, payload, etc.). The StarRocks-based system does that by the SQL LIKE operator, which implements full scanning and brutal-force matching. In that way, queries on a 100-billion-row table often take one or several minutes. After screening out irrelevant data based on time range, the query response time still ranges from seconds to dozens of seconds, and it gets worse with concurrent queries."}),"\n",(0,n.jsx)(t.h2,{id:"architectural-upgrade",children:"Architectural upgrade"}),"\n",(0,n.jsxs)(t.p,{children:["In the search for a new database tool, the cyber security company set their eye on ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/zh-CN/",children:"Apache Doris"}),", which happened to have sharpened itself up in ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/zh-CN/blog/release-note-2.0.0",children:"version 2.0"})," for log analysis. It supports ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/",children:"inverted index"})," to empower text search, and ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/index/ngram-bloomfilter-index?_highlight=ngram",children:"NGram BloomFilter"})," to speed up the LIKE operator."]}),"\n",(0,n.jsx)(t.p,{children:"Although StarRocks was a fork of Apache Doris, it has rewritten part of the code and is now very different from Apache Doris in terms of features. The foregoing inverted index and NGram BloomFilter are a fragment of the current advancements that Apache Doris has made."}),"\n",(0,n.jsx)(t.p,{children:"They tried Apache Doris out to evaluate its writing speed, query performance, and the associated storage and maintenance costs."}),"\n",(0,n.jsx)(t.h3,{id:"300-data-writing-speed",children:"300% data writing speed"}),"\n",(0,n.jsx)(t.p,{children:"To test the peak performance of Apache Doris, they only used 3 servers and connected it to Apache Kafka to receive their daily data input, and this is the test result compared to the old StarRocks-based LSAS."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"apache-doris-vs-starrocks-writing-throughput",src:a(531516).Z+"",width:"1280",height:"403"})}),"\n",(0,n.jsx)(t.p,{children:"Based on the peak performance of Apache Doris, it's estimated that a 3-server cluster with 30% of CPU usage will be able to handle the writing workload. That can save them over 70% of hardware resources. Notably, in this test, they enabled inverted index for half of the fields. If it were disabled, the writing speed could be increased by another 50%."}),"\n",(0,n.jsx)(t.h3,{id:"60-storage-cost",children:"60% storage cost"}),"\n",(0,n.jsx)(t.p,{children:"With inverted index enabled, Apache Doris used even smaller storage space than the old system without inverted indexes. The data compression ratio was 1: 5.7 compared to the previous 1: 4.3."}),"\n",(0,n.jsx)(t.p,{children:"In most databases and similar tools, the index file is often 2~4 times the size of the data file it belongs to, but in Apache Doris, the index-data size is basically one to one. That means Apache Doris can save a lot of storage space for users. This is because it has adopted columnar storage and the ZStandard compression. With data and indexes being stored column by column, it is easier to compress them, and the ZStandard algorithm is faster with higher compression ratio so it is perfect for log processing."}),"\n",(0,n.jsx)(t.h3,{id:"690-query-speed",children:"690% query speed"}),"\n",(0,n.jsx)(t.p,{children:"To compare the query performance before and after upgrading, they tested the old and the new systems with 79 of their frequently executed SQL statements on the same 100 billion rows of log data with the same cluster size of 10 backend nodes."}),"\n",(0,n.jsx)(t.p,{children:"They jotted down the query response time as follows:"}),"\n",(0,n.jsx)(t.p,{children:"The new Apache Doris-based system is faster in all 79 queries. On average, it reduces the query execution time by a factor of 7."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"apache-doris-vs-starrocks-query-performance",src:a(103243).Z+"",width:"1280",height:"1017"})}),"\n",(0,n.jsx)(t.p,{children:"Among these queries, the greatest increases in speed were enabled by a few features and optimizations of Apache Doris for log analysis."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"1. Inverted index accelerating keyword searches: Q23, Q24, Q30, Q31, Q42, Q43, Q50"})}),"\n",(0,n.jsx)(t.p,{children:"Example: Q43 was sped up 88.2 times."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SELECT count() from table2 \nWHERE ( event_time >= 1693065600000 and event_time < 1693152000000) \n  AND (rule_hit_big MATCH 'xxxx');\n"})}),"\n",(0,n.jsxs)(t.p,{children:["How is ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/",children:"inverted index"}),' implemented? Upon data writing, Apache Doris tokenizes the texts into words, and takes notes of which word exists in which rows. For example, the word "machine" is in Row 127 and Row 201. In keyword searches, the system can quickly locate the relevant data by tracking the row numbers in the indexes.']}),"\n",(0,n.jsx)(t.p,{children:"Inverted index is much more efficient than brutal-force scanning in text searches. For one thing, it doesn't have to read that much data. For another, it doesn't require text matching. So it is able to increase execution speed by orders of magnitudes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cyber-security-inverted-index",src:a(134915).Z+"",width:"961",height:"720"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"2. NGram BloomFilter accelerating the LIKE operator: Q75, Q76, Q77, Q78"})}),"\n",(0,n.jsx)(t.p,{children:"Example: Q75 was sped up 44.4 times."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SELECT * FROM table1\nWHERE  ent_id = 'xxxxx'   \n   AND event_date = '2023-08-27'   \n   AND file_level = 70     \n   AND rule_group_id LIKE 'adid:%'     \nORDER BY event_time LIMIT 100\uFF1B\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For non-verbatim searches, the LIKE operator is an important implementation method, so Apache Doris 2.0 introduces the ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/index/ngram-bloomfilter-index",children:"NGram BloomFilter"})," to empower that."]}),"\n",(0,n.jsxs)(t.p,{children:["Different from regular BloomFilter, the NGram BloomFilter does not put the entire text into the filter, but splits it into continuous sub-strings of length N, and then puts the sub-strings into the filter. For a query like ",(0,n.jsx)(t.code,{children:"cola LIKE '%pattern%'"}),", it splits ",(0,n.jsx)(t.code,{children:"'pattern'"})," into several strings of length N, and sees if each of these sub-strings exists in the dataset. The absence of any sub-string in the dataset will indicate that the dataset does not contain the word ",(0,n.jsx)(t.code,{children:"'pattern'"}),", so it will be skipped in data scanning, and that's how the NGram BloomFilter accelerates queries."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"3. Optimizations for Top-N queries: Q19~Q29"})}),"\n",(0,n.jsx)(t.p,{children:"Example: Q22 was sped up 50.3 times."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SELECT * FROM table1\nwhere event_date = '2023-08-27' and file_level = 70 \n  and ent_id = 'nnnnnnn' and file_name = 'xxx.exe'\norder by event_time limit 100;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Top-N queries are to find the N logs that fit into the specified conditions. It is a common type of query in log analysis, with the SQl being like ",(0,n.jsx)(t.code,{children:"SELECT * FROM t WHERE xxx ORDER BY xx LIMIT n"}),". Apache Doris has optimized itself for that. Based on the intermediate status of queries, it figures out the dynamic range of the ranking field and implements automatic predicate pushdown to reduce data scanning. In some cases, this can decrease the scanned data volume by an order of magnitude."]}),"\n",(0,n.jsx)(t.h3,{id:"visualized-operation--maintenance",children:"Visualized operation & maintenance"}),"\n",(0,n.jsxs)(t.p,{children:["For more efficient cluster maintenance, VeloDB, the commercial supporter of Apache Doris , has contributed a visualized cluster management tool called ",(0,n.jsx)(t.a,{href:"https://github.com/apache/doris-manager",children:"Doris Manager"})," to the Apache Doris project. Everyday management and maintenance operations can be done via the Doris Manager, including cluster monitoring, inspection, configuration modification, scaling, and upgrading. The visualized tool can save a lot of manual efforts and avoid the risks of maloperations on Doris."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"doris-manager-for-visualized-operation-and-maintenance",src:a(791402).Z+"",width:"1280",height:"642"})}),"\n",(0,n.jsx)(t.p,{children:"Apart from cluster management, Doris Manager provides a visualized WebUI for log analysis (think of Kibana), so it's very friendly to users who are familiar with the ELK Stack. It supports keyword searches, trend charts, field filtering, and detailed data listing and collapsed display, so it enables interactive analysis and easy drilling down of logs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"doris-manager-webui-showcase",src:a(600459).Z+"",width:"1280",height:"687"})}),"\n",(0,n.jsxs)(t.p,{children:["After a month-long trial run, they officially replaced their old LSAS with the Apache Doris-based system for production, and achieved great results as they expected. Now, they ingest their 100s of billions of new logs every day via the ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/routine-load-manual/",children:"Routine Load"})," method at a speed 3 times as fast as before. Among the 7-time overall query performance increase, they benefit from a speedup of over 20 times in full-text searches. And they enjoy easier maintenance and interactive analysis. Their next step is to expand the coverage of JSON data type and delve into semi-structured data analysis. Luckily, the upcoming Apache Doris 2.1 will provide more schema-free support. It will have a new Variant data type, support JSON data of any structures, and allow for flexible changes in field numbers and field types. Relevant updates will be released on the ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/",children:"Apache Doris website"})," and the ",(0,n.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Apache Doris community"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},103243:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/apache-doris-vs-starrocks-query-performance-d4377592d59672165b17a6bc5158d8fe.png"},531516:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/apache-doris-vs-starrocks-writing-throughput-e462779d45f4ba298ecbdc75b2f90b68.png"},134915:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/cyber-security-inverted-index-20f3d1267475f3074304b15f8a901db3.png"},325312:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/cyber-security-log-storage-and-analysis-platform-83b6323a2b975c59ddcf59de91f96847.png"},791402:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/doris-manager-for-visualized-operation-and-maintenance-b1f63cbae23f025b6ac4d49bf6b9ca36.png"},600459:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/doris-manager-webui-showcase-cba1b2b240ff03357c833aae15e614da.png"},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var i=a(667294);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},447622:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis","source":"@site/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis.md","title":"Empowering cyber security by enabling 7 times faster log analysis","description":"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management.","date":"2023-12-07T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Empowering cyber security by enabling 7 times faster log analysis","description":"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management.","date":"2023-12-07","author":"Apache Doris","tags":["Best Practice"],"image":"/images/cyber-security.png"},"unlisted":false,"prevItem":{"title":"Apache Doris 2.0.3 just released","permalink":"/zh-CN/blog/release-note-2.0.3"},"nextItem":{"title":"How big data is saving lives in real time: IoV data analytics helps prevent accidents","permalink":"/zh-CN/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents"}}')}}]);