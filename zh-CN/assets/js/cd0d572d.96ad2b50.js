"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["840226"],{976794:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"data-operate/import/import-way/insert-into-manual","title":"Insert Into","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-operate/import/import-way/insert-into-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/insert-into-manual","permalink":"/zh-CN/docs/1.2/data-operate/import/import-way/insert-into-manual","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Insert Into","language":"zh-CN"},"sidebar":"docs","previous":{"title":"S3 Load","permalink":"/zh-CN/docs/1.2/data-operate/import/import-way/s3-load-manual"},"next":{"title":"JSON \u683C\u5F0F\u6570\u636E\u5BFC\u5165","permalink":"/zh-CN/docs/1.2/data-operate/import/import-way/load-json-format"}}'),r=s("785893"),t=s("250065");let i={title:"Insert Into",language:"zh-CN"},c="Insert Into",d={},a=[{value:"\u5BFC\u5165\u64CD\u4F5C\u53CA\u8FD4\u56DE\u7ED3\u679C",id:"\u5BFC\u5165\u64CD\u4F5C\u53CA\u8FD4\u56DE\u7ED3\u679C",level:2},{value:"SHOW LAST INSERT",id:"show-last-insert",level:3},{value:"\u76F8\u5173\u7CFB\u7EDF\u914D\u7F6E",id:"\u76F8\u5173\u7CFB\u7EDF\u914D\u7F6E",level:2},{value:"FE \u914D\u7F6E",id:"fe-\u914D\u7F6E",level:3},{value:"Session \u53D8\u91CF",id:"session-\u53D8\u91CF",level:3},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u5E94\u7528\u573A\u666F",id:"\u5E94\u7528\u573A\u666F",level:3},{value:"\u6570\u636E\u91CF",id:"\u6570\u636E\u91CF",level:3},{value:"\u5B8C\u6574\u4F8B\u5B50",id:"\u5B8C\u6574\u4F8B\u5B50",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2},{value:"\u66F4\u591A\u5E2E\u52A9",id:"\u66F4\u591A\u5E2E\u52A9",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"insert-into",children:"Insert Into"})}),"\n",(0,r.jsx)(n.p,{children:"Insert Into \u8BED\u53E5\u7684\u4F7F\u7528\u65B9\u5F0F\u548C MySQL \u7B49\u6570\u636E\u5E93\u4E2D Insert Into \u8BED\u53E5\u7684\u4F7F\u7528\u65B9\u5F0F\u7C7B\u4F3C\u3002\u4F46\u5728 Doris \u4E2D\uFF0C\u6240\u6709\u7684\u6570\u636E\u5199\u5165\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BFC\u5165\u4F5C\u4E1A\u3002\u6240\u4EE5\u8FD9\u91CC\u5C06 Insert Into \u4E5F\u4F5C\u4E3A\u4E00\u79CD\u5BFC\u5165\u65B9\u5F0F\u4ECB\u7ECD\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4E3B\u8981\u7684 Insert Into \u547D\u4EE4\u5305\u542B\u4EE5\u4E0B\u4E24\u79CD\uFF1B"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"INSERT INTO tbl SELECT ..."}),"\n",(0,r.jsx)(n.li,{children:"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4E2D\u7B2C\u4E8C\u79CD\u547D\u4EE4\u4EC5\u7528\u4E8E Demo\uFF0C\u4E0D\u8981\u4F7F\u7528\u5728\u6D4B\u8BD5\u6216\u751F\u4EA7\u73AF\u5883\u4E2D\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5BFC\u5165\u64CD\u4F5C\u53CA\u8FD4\u56DE\u7ED3\u679C",children:"\u5BFC\u5165\u64CD\u4F5C\u53CA\u8FD4\u56DE\u7ED3\u679C"}),"\n",(0,r.jsx)(n.p,{children:"Insert Into \u547D\u4EE4\u9700\u8981\u901A\u8FC7 MySQL \u534F\u8BAE\u63D0\u4EA4\uFF0C\u521B\u5EFA\u5BFC\u5165\u8BF7\u6C42\u4F1A\u540C\u6B65\u8FD4\u56DE\u5BFC\u5165\u7ED3\u679C\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u4E24\u4E2A Insert Into \u7684\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A\u5F53\u9700\u8981\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"CTE(Common Table Expressions)"})," \u4F5C\u4E3A insert \u64CD\u4F5C\u4E2D\u7684\u67E5\u8BE2\u90E8\u5206\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A ",(0,r.jsx)(n.code,{children:"WITH LABEL"})," \u548C column list \u90E8\u5206\u6216\u8005\u5BF9",(0,r.jsx)(n.code,{children:"CTE"}),"\u8FDB\u884C\u5305\u88C5\u3002\u793A\u4F8B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\nINSERT INTO tbl1 (k1)\nselect * from (\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1) as ret\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4F53\u7684\u53C2\u6570\u8BF4\u660E\uFF0C\u4F60\u53EF\u4EE5\u53C2\u7167 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",children:"INSERT INTO"})," \u547D\u4EE4\u6216\u8005\u6267\u884C",(0,r.jsx)(n.code,{children:"HELP INSERT"})," \u6765\u67E5\u770B\u5176\u5E2E\u52A9\u6587\u6863\u4EE5\u4FBF\u66F4\u597D\u7684\u4F7F\u7528\u8FD9\u79CD\u5BFC\u5165\u65B9\u5F0F\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Insert Into \u672C\u8EAB\u5C31\u662F\u4E00\u4E2A SQL \u547D\u4EE4\uFF0C\u5176",(0,r.jsx)(n.strong,{children:"\u8FD4\u56DE\u7ED3\u679C"}),"\u4F1A\u6839\u636E\u6267\u884C\u7ED3\u679C\u7684\u4E0D\u540C\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7ED3\u679C\u96C6\u4E3A\u7A7A"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C insert \u5BF9\u5E94 select \u8BED\u53E5\u7684\u7ED3\u679C\u96C6\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Query OK"})," \u8868\u793A\u6267\u884C\u6210\u529F\u3002",(0,r.jsx)(n.code,{children:"0 rows affected"})," \u8868\u793A\u6CA1\u6709\u6570\u636E\u88AB\u5BFC\u5165\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7ED3\u679C\u96C6\u4E0D\u4E3A\u7A7A"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7ED3\u679C\u96C6\u4E0D\u4E3A\u7A7A\u7684\u60C5\u51B5\u4E0B\u3002\u8FD4\u56DE\u7ED3\u679C\u5206\u4E3A\u5982\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Insert \u6267\u884C\u6210\u529F\u5E76\u53EF\u89C1\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Query OK"})," \u8868\u793A\u6267\u884C\u6210\u529F\u3002",(0,r.jsx)(n.code,{children:"4 rows affected"})," \u8868\u793A\u603B\u5171\u6709 4 \u884C\u6570\u636E\u88AB\u5BFC\u5165\u3002",(0,r.jsx)(n.code,{children:"2 warnings"})," \u8868\u793A\u88AB\u8FC7\u6EE4\u7684\u884C\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u540C\u65F6\u4F1A\u8FD4\u56DE\u4E00\u4E2A json \u4E32\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"label"})," \u4E3A\u7528\u6237\u6307\u5B9A\u7684 label \u6216\u81EA\u52A8\u751F\u6210\u7684 label\u3002Label \u662F\u8BE5 Insert Into \u5BFC\u5165\u4F5C\u4E1A\u7684\u6807\u8BC6\u3002\u6BCF\u4E2A\u5BFC\u5165\u4F5C\u4E1A\uFF0C\u90FD\u6709\u4E00\u4E2A\u5728\u5355 database \u5185\u90E8\u552F\u4E00\u7684 Label\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"status"})," \u8868\u793A\u5BFC\u5165\u6570\u636E\u662F\u5426\u53EF\u89C1\u3002\u5982\u679C\u53EF\u89C1\uFF0C\u663E\u793A ",(0,r.jsx)(n.code,{children:"visible"}),"\uFF0C\u5982\u679C\u4E0D\u53EF\u89C1\uFF0C\u663E\u793A ",(0,r.jsx)(n.code,{children:"committed"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"txnId"})," \u4E3A\u8FD9\u4E2A insert \u5BF9\u5E94\u7684\u5BFC\u5165\u4E8B\u52A1\u7684 id\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"err"})," \u5B57\u6BB5\u4F1A\u663E\u793A\u4E00\u4E9B\u5176\u4ED6\u975E\u9884\u671F\u9519\u8BEF\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u9700\u8981\u67E5\u770B\u88AB\u8FC7\u6EE4\u7684\u884C\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",children:"SHOW LOAD"}),"\u8BED\u53E5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'show load where label="xxx";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684 URL \u53EF\u4EE5\u7528\u4E8E\u67E5\u8BE2\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u5177\u4F53\u89C1\u540E\u9762 ",(0,r.jsx)(n.strong,{children:"\u67E5\u770B\u9519\u8BEF\u884C"})," \u5C0F\u7ED3\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6570\u636E\u4E0D\u53EF\u89C1\u662F\u4E00\u4E2A\u4E34\u65F6\u72B6\u6001\uFF0C\u8FD9\u6279\u6570\u636E\u6700\u7EC8\u662F\u4E00\u5B9A\u53EF\u89C1\u7684"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",children:"SHOW TRANSACTION"}),"\u8BED\u53E5\u67E5\u770B\u8FD9\u6279\u6570\u636E\u7684\u53EF\u89C1\u72B6\u6001\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"show transaction where id=4005;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"TransactionStatus"})," \u5217\u5982\u679C\u4E3A ",(0,r.jsx)(n.code,{children:"visible"}),"\uFF0C\u5219\u8868\u8FF0\u6570\u636E\u53EF\u89C1\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Insert \u6267\u884C\u5931\u8D25"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u5931\u8D25\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u88AB\u6210\u529F\u5BFC\u5165\uFF0C\u5E76\u8FD4\u56DE\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"ERROR 1064 (HY000): all partitions have no load data"})," \u663E\u793A\u5931\u8D25\u539F\u56E0\u3002\u540E\u9762\u7684 url \u53EF\u4EE5\u7528\u4E8E\u67E5\u8BE2\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u5177\u4F53\u89C1\u540E\u9762 ",(0,r.jsx)(n.strong,{children:"\u67E5\u770B\u9519\u8BEF\u884C"})," \u5C0F\u7ED3\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7EFC\u4E0A\uFF0C\u5BF9\u4E8E insert \u64CD\u4F5C\u8FD4\u56DE\u7ED3\u679C\u7684\u6B63\u786E\u5904\u7406\u903B\u8F91\u5E94\u4E3A\uFF1A"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8FD4\u56DE\u7ED3\u679C\u4E3A ",(0,r.jsx)(n.code,{children:"ERROR 1064 (HY000)"}),"\uFF0C\u5219\u8868\u793A\u5BFC\u5165\u5931\u8D25\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8FD4\u56DE\u7ED3\u679C\u4E3A ",(0,r.jsx)(n.code,{children:"Query OK"}),"\uFF0C\u5219\u8868\u793A\u6267\u884C\u6210\u529F\u3002\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C ",(0,r.jsx)(n.code,{children:"rows affected"})," \u4E3A 0\uFF0C\u8868\u793A\u7ED3\u679C\u96C6\u4E3A\u7A7A\uFF0C\u6CA1\u6709\u6570\u636E\u88AB\u5BFC\u5165\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C ",(0,r.jsx)(n.code,{children:"rows affected"})," \u5927\u4E8E 0\uFF1A\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C ",(0,r.jsx)(n.code,{children:"status"})," \u4E3A ",(0,r.jsx)(n.code,{children:"committed"}),"\uFF0C\u8868\u793A\u6570\u636E\u8FD8\u4E0D\u53EF\u89C1\u3002\u9700\u8981\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"show transaction"})," \u8BED\u53E5\u67E5\u770B\u72B6\u6001\u76F4\u5230 ",(0,r.jsx)(n.code,{children:"visible"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C ",(0,r.jsx)(n.code,{children:"status"})," \u4E3A ",(0,r.jsx)(n.code,{children:"visible"}),"\uFF0C\u8868\u793A\u6570\u636E\u5BFC\u5165\u6210\u529F\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C ",(0,r.jsx)(n.code,{children:"warnings"})," \u5927\u4E8E 0\uFF0C\u8868\u793A\u6709\u6570\u636E\u88AB\u8FC7\u6EE4\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"show load"})," \u8BED\u53E5\u83B7\u53D6 url \u67E5\u770B\u88AB\u8FC7\u6EE4\u7684\u884C\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"show-last-insert",children:"SHOW LAST INSERT"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4E0A\u4E00\u5C0F\u8282\u4E2D\u6211\u4EEC\u4ECB\u7ECD\u4E86\u5982\u4F55\u6839\u636E insert \u64CD\u4F5C\u7684\u8FD4\u56DE\u7ED3\u679C\u8FDB\u884C\u540E\u7EED\u5904\u7406\u3002\u4F46\u4E00\u4E9B\u8BED\u8A00\u7684 mysql \u7C7B\u5E93\u4E2D\u5F88\u96BE\u83B7\u53D6\u8FD4\u56DE\u7ED3\u679C\u7684\u4E2D\u7684 json \u5B57\u7B26\u4E32\u3002\u56E0\u6B64\uFF0CDoris \u8FD8\u63D0\u4F9B\u4E86 ",(0,r.jsx)(n.code,{children:"SHOW LAST INSERT"})," \u547D\u4EE4\u6765\u663E\u5F0F\u7684\u83B7\u53D6\u6700\u8FD1\u4E00\u6B21 insert \u64CD\u4F5C\u7684\u7ED3\u679C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u6267\u884C\u5B8C\u4E00\u4E2A insert \u64CD\u4F5C\u540E\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00 session \u8FDE\u63A5\u4E2D\u6267\u884C ",(0,r.jsx)(n.code,{children:"SHOW LAST INSERT"}),"\u3002\u8BE5\u547D\u4EE4\u4F1A\u8FD4\u56DE\u6700\u8FD1\u4E00\u6B21 insert \u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> show last insert\\G\n*************************** 1. row ***************************\n    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u4F1A\u8FD4\u56DE insert \u4EE5\u53CA\u5BF9\u5E94\u4E8B\u52A1\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u56E0\u6B64\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u6BCF\u6B21\u6267\u884C\u5B8C insert \u64CD\u4F5C\u540E\uFF0C\u7EE7\u7EED\u6267\u884C ",(0,r.jsx)(n.code,{children:"show last insert"})," \u547D\u4EE4\u6765\u83B7\u53D6 insert \u7684\u7ED3\u679C\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u8BE5\u547D\u4EE4\u53EA\u4F1A\u8FD4\u56DE\u5728\u540C\u4E00 session \u8FDE\u63A5\u4E2D\uFF0C\u6700\u8FD1\u4E00\u6B21 insert \u64CD\u4F5C\u7684\u7ED3\u679C\u3002\u5982\u679C\u8FDE\u63A5\u65AD\u5F00\u6216\u66F4\u6362\u4E86\u65B0\u7684\u8FDE\u63A5\uFF0C\u5219\u5C06\u8FD4\u56DE\u7A7A\u96C6\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u7CFB\u7EDF\u914D\u7F6E",children:"\u76F8\u5173\u7CFB\u7EDF\u914D\u7F6E"}),"\n",(0,r.jsx)(n.h3,{id:"fe-\u914D\u7F6E",children:"FE \u914D\u7F6E"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"timeout"}),"\n",(0,r.jsx)(n.p,{children:"\u5BFC\u5165\u4EFB\u52A1\u7684\u8D85\u65F6\u65F6\u95F4 (\u4EE5\u79D2\u4E3A\u5355\u4F4D)\uFF0C\u5BFC\u5165\u4EFB\u52A1\u5728\u8BBE\u5B9A\u7684 timeout \u65F6\u95F4\u5185\u672A\u5B8C\u6210\u5219\u4F1A\u88AB\u7CFB\u7EDF\u53D6\u6D88\uFF0C\u53D8\u6210 CANCELLED\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u76EE\u524D Insert Into \u5E76\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u5BFC\u5165\u7684 timeout \u65F6\u95F4\uFF0C\u6240\u6709 Insert Into \u5BFC\u5165\u7684\u8D85\u65F6\u65F6\u95F4\u662F\u7EDF\u4E00\u7684\uFF0C\u9ED8\u8BA4\u7684 timeout \u65F6\u95F4\u4E3A 1 \u5C0F\u65F6\u3002\u5982\u679C\u5BFC\u5165\u7684\u6E90\u6587\u4EF6\u65E0\u6CD5\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u5B8C\u6210\u5BFC\u5165\uFF0C\u5219\u9700\u8981\u8C03\u6574 FE \u7684\u53C2\u6570",(0,r.jsx)(n.code,{children:"insert_load_default_timeout_second"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540C\u65F6 Insert Into \u8BED\u53E5\u53D7\u5230 Session \u53D8\u91CF ",(0,r.jsx)(n.code,{children:"insert_timeout"}),"\u7684\u9650\u5236\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"SET insert_timeout = xxx;"})," \u6765\u589E\u52A0\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"session-\u53D8\u91CF",children:"Session \u53D8\u91CF"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"enable_insert_strict"}),"\n",(0,r.jsxs)(n.p,{children:["Insert Into \u5BFC\u5165\u672C\u8EAB\u4E0D\u80FD\u63A7\u5236\u5BFC\u5165\u53EF\u5BB9\u5FCD\u7684\u9519\u8BEF\u7387\u3002\u7528\u6237\u53EA\u80FD\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"enable_insert_strict"})," \u8FD9\u4E2A Session \u53C2\u6570\u7528\u6765\u63A7\u5236\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E3A false \u65F6\uFF0C\u8868\u793A\u81F3\u5C11\u6709\u4E00\u6761\u6570\u636E\u88AB\u6B63\u786E\u5BFC\u5165\uFF0C\u5219\u8FD4\u56DE\u6210\u529F\u3002\u5982\u679C\u6709\u5931\u8D25\u6570\u636E\uFF0C\u5219\u8FD8\u4F1A\u8FD4\u56DE\u4E00\u4E2A Label\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u8868\u793A\u5982\u679C\u6709\u4E00\u6761\u6570\u636E\u9519\u8BEF\uFF0C\u5219\u5BFC\u5165\u5931\u8D25\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u4E3A false\u3002\u53EF\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"SET enable_insert_strict = true;"})," \u6765\u8BBE\u7F6E\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"query_timeout"}),"\n",(0,r.jsxs)(n.p,{children:["Insert Into \u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A SQL \u547D\u4EE4\uFF0CInsert Into \u8BED\u53E5\u53D7\u5230 Session \u53D8\u91CF ",(0,r.jsx)(n.code,{children:"insert_timeout"})," \u7684\u9650\u5236\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"SET insert_timeout = xxx;"})," \u6765\u589E\u52A0\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,r.jsx)(n.h3,{id:"\u5E94\u7528\u573A\u666F",children:"\u5E94\u7528\u573A\u666F"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7528\u6237\u5E0C\u671B\u4EC5\u5BFC\u5165\u51E0\u6761\u5047\u6570\u636E\uFF0C\u9A8C\u8BC1\u4E00\u4E0B Doris \u7CFB\u7EDF\u7684\u529F\u80FD\u3002\u6B64\u65F6\u9002\u5408\u4F7F\u7528 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",children:"INSERT INTO VALUES"})," \u7684\u8BED\u6CD5\uFF0C\u8FD9\u91CC\u8BED\u6CD5\u548C MySql \u8BED\u6CD5\u4E00\u6837\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u5E0C\u671B\u5C06\u5DF2\u7ECF\u5728 Doris \u8868\u4E2D\u7684\u6570\u636E\u8FDB\u884C ETL \u8F6C\u6362\u5E76\u5BFC\u5165\u5230\u4E00\u4E2A\u65B0\u7684 Doris \u8868\u4E2D\uFF0C\u6B64\u65F6\u9002\u5408\u4F7F\u7528 INSERT INTO SELECT \u8BED\u6CD5\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u7528\u6237\u53EF\u4EE5\u521B\u5EFA\u4E00\u79CD\u5916\u90E8\u8868\uFF0C\u5982 MySQL \u5916\u90E8\u8868\u6620\u5C04\u4E00\u5F20 MySQL \u7CFB\u7EDF\u4E2D\u7684\u8868\u3002\u6216\u8005\u521B\u5EFA ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",children:"Broker"})," \u5916\u90E8\u8868\u6765\u6620\u5C04 HDFS \u4E0A\u7684\u6570\u636E\u6587\u4EF6\u3002\u7136\u540E\u901A\u8FC7 INSERT INTO SELECT \u8BED\u6CD5\u5C06\u5916\u90E8\u8868\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 Doris \u8868\u4E2D\u5B58\u50A8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636E\u91CF",children:"\u6570\u636E\u91CF"}),"\n",(0,r.jsx)(n.p,{children:"Insert Into \u5BF9\u6570\u636E\u91CF\u6CA1\u6709\u9650\u5236\uFF0C\u5927\u6570\u636E\u91CF\u5BFC\u5165\u4E5F\u53EF\u4EE5\u652F\u6301\u3002\u4F46 Insert Into \u6709\u9ED8\u8BA4\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u7528\u6237\u9884\u4F30\u7684\u5BFC\u5165\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u5C31\u9700\u8981\u4FEE\u6539\u7CFB\u7EDF\u7684 Insert Into \u5BFC\u5165\u8D85\u65F6\u65F6\u95F4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u5BFC\u5165\u6570\u636E\u91CF = 36G \u7EA6\u2264 3600s * 10M/s \n\u5176\u4E2D 10M/s \u662F\u6700\u5927\u5BFC\u5165\u9650\u901F\uFF0C\u7528\u6237\u9700\u8981\u6839\u636E\u5F53\u524D\u96C6\u7FA4\u60C5\u51B5\u8BA1\u7B97\u51FA\u5E73\u5747\u7684\u5BFC\u5165\u901F\u5EA6\u6765\u66FF\u6362\u516C\u5F0F\u4E2D\u7684 10M/s\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5B8C\u6574\u4F8B\u5B50",children:"\u5B8C\u6574\u4F8B\u5B50"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u6709\u4E00\u5F20\u8868 store_sales \u5728\u6570\u636E\u5E93 sales \u4E2D\uFF0C\u7528\u6237\u53C8\u521B\u5EFA\u4E86\u4E00\u5F20\u8868\u53EB bj_store_sales \u4E5F\u5728\u6570\u636E\u5E93 sales \u4E2D\uFF0C\u7528\u6237\u5E0C\u671B\u5C06 store_sales \u4E2D\u9500\u552E\u8BB0\u5F55\u5728 bj \u7684\u6570\u636E\u5BFC\u5165\u5230\u8FD9\u5F20\u65B0\u5EFA\u7684\u8868 bj_store_sales \u4E2D\u3002\u5BFC\u5165\u7684\u6570\u636E\u91CF\u7EA6\u4E3A\uFF1A10G\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"store_sales schema\uFF1A\n(id, total, user_id, sale_timestamp, region)\n\nbj_store_sales schema:\n(id, total, user_id, sale_timestamp)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u96C6\u7FA4\u60C5\u51B5\uFF1A\u7528\u6237\u5F53\u524D\u96C6\u7FA4\u7684\u5E73\u5747\u5BFC\u5165\u901F\u5EA6\u7EA6\u4E3A 5M/s"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Step1: \u5224\u65AD\u662F\u5426\u8981\u4FEE\u6539 Insert Into \u7684\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u8BA1\u7B97\u5BFC\u5165\u7684\u5927\u6982\u65F6\u95F4\n10G / 5M/s = 2000s\n\n\u4FEE\u6539 FE \u914D\u7F6E\ninsert_load_default_timeout_second = 2000\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Step2\uFF1A\u521B\u5EFA\u5BFC\u5165\u4EFB\u52A1"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4E8E\u7528\u6237\u662F\u5E0C\u671B\u5C06\u4E00\u5F20\u8868\u4E2D\u7684\u6570\u636E\u505A ETL \u5E76\u5BFC\u5165\u5230\u76EE\u6807\u8868\u4E2D\uFF0C\u6240\u4EE5\u5E94\u8BE5\u4F7F\u7528 Insert into query_stmt \u65B9\u5F0F\u5BFC\u5165\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'INSERT INTO bj_store_sales WITH LABEL `label` SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B\u9519\u8BEF\u884C"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4E8E Insert Into \u65E0\u6CD5\u63A7\u5236\u9519\u8BEF\u7387\uFF0C\u53EA\u80FD\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"enable_insert_strict"})," \u8BBE\u7F6E\u4E3A\u5B8C\u5168\u5BB9\u5FCD\u9519\u8BEF\u6570\u636E\u6216\u5B8C\u5168\u5FFD\u7565\u9519\u8BEF\u6570\u636E\u3002\u56E0\u6B64\u5982\u679C ",(0,r.jsx)(n.code,{children:"enable_insert_strict"})," \u8BBE\u4E3A true\uFF0C\u5219 Insert Into \u53EF\u80FD\u4F1A\u5931\u8D25\u3002\u800C\u5982\u679C ",(0,r.jsx)(n.code,{children:"enable_insert_strict"})," \u8BBE\u4E3A false\uFF0C\u5219\u53EF\u80FD\u51FA\u73B0\u4EC5\u5BFC\u5165\u4E86\u90E8\u5206\u5408\u683C\u6570\u636E\u7684\u60C5\u51B5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u8FD4\u56DE\u7ED3\u679C\u4E2D\u63D0\u4F9B\u4E86 url \u5B57\u6BB5\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u9519\u8BEF\u884C\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'SHOW LOAD WARNINGS ON "url";'})}),"\n",(0,r.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=__shard_13/error_log_insert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";'})}),"\n",(0,r.jsx)(n.p,{children:"\u9519\u8BEF\u7684\u539F\u56E0\u901A\u5E38\u5982\uFF1A\u6E90\u6570\u636E\u5217\u957F\u5EA6\u8D85\u8FC7\u76EE\u7684\u6570\u636E\u5217\u957F\u5EA6\u3001\u5217\u7C7B\u578B\u4E0D\u5339\u914D\u3001\u5206\u533A\u4E0D\u5339\u914D\u3001\u5217\u987A\u5E8F\u4E0D\u5339\u914D\u7B49\u7B49\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u66F4\u591A\u5E2E\u52A9",children:"\u66F4\u591A\u5E2E\u52A9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E ",(0,r.jsx)(n.strong,{children:"Insert Into"})," \u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\uFF0C\u8BF7\u53C2\u9605 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",children:"INSERT INTO"})," \u547D\u4EE4\u624B\u518C\uFF0C\u4E5F\u53EF\u4EE5\u5728 Mysql \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E0B\u8F93\u5165 ",(0,r.jsx)(n.code,{children:"HELP INSERT"})," \u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var l=s(667294);let r={},t=l.createContext(r);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);