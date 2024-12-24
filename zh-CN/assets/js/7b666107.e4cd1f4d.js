"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["683422"],{343672:function(n,e,l){l.r(e),l.d(e,{metadata:()=>d,contentTitle:()=>t,default:()=>j,assets:()=>c,toc:()=>h,frontMatter:()=>r});var d=JSON.parse('{"id":"admin-manual/workload-management/job-scheduler","title":"\u4F5C\u4E1A\u8C03\u5EA6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/workload-management/job-scheduler.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/job-scheduler","permalink":"/zh-CN/docs/3.0/admin-manual/workload-management/job-scheduler","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4F5C\u4E1A\u8C03\u5EA6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Kill Query","permalink":"/zh-CN/docs/3.0/admin-manual/workload-management/kill-query"},"next":{"title":"Workload Group \u5206\u7EC4\u529F\u80FD","permalink":"/zh-CN/docs/3.0/admin-manual/workload-management/best-practice/group-workload-groups"}}'),s=l("785893"),i=l("250065");let r={title:"\u4F5C\u4E1A\u8C03\u5EA6",language:"zh-CN"},t=void 0,c={},h=[{value:"\u80CC\u666F",id:"\u80CC\u666F",level:2},{value:"Job Scheduler",id:"job-scheduler",level:2},{value:"\u8BED\u6CD5\u8BF4\u660E",id:"\u8BED\u6CD5\u8BF4\u660E",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u57FA\u4E8E Catalog \u4E0E Job Scheduler \u7684\u6570\u636E\u81EA\u52A8\u540C\u6B65",id:"\u57FA\u4E8E-catalog-\u4E0E-job-scheduler-\u7684\u6570\u636E\u81EA\u52A8\u540C\u6B65",level:2},{value:"\u8BBE\u8BA1\u4E0E\u5B9E\u73B0",id:"\u8BBE\u8BA1\u4E0E\u5B9E\u73B0",level:2},{value:"\u672A\u6765\u89C4\u5212",id:"\u672A\u6765\u89C4\u5212",level:2}];function a(n){let e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u80CC\u666F",children:"\u80CC\u666F"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6570\u636E\u7BA1\u7406\u6108\u52A0\u7CBE\u7EC6\u5316\u7684\u9700\u6C42\u80CC\u666F\u4E0B\uFF0C\u5B9A\u65F6\u8C03\u5EA6\u5728\u5176\u4E2D\u626E\u6F14\u7740\u91CD\u8981\u7684\u89D2\u8272\u3002\u5B83\u901A\u5E38\u88AB\u5E94\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5B9A\u671F\u6570\u636E\u66F4\u65B0\uFF0C\u5982\u5468\u671F\u6027\u6570\u636E\u5BFC\u5165\u548C ETL \u64CD\u4F5C\uFF0C\u51CF\u5C11\u4EBA\u5DE5\u5E72\u9884\uFF0C\u63D0\u9AD8\u6570\u636E\u5904\u7406\u7684\u6548\u7387\u548C\u51C6\u786E\u6027\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7ED3\u5408 Catalog \u5B9E\u73B0\u5916\u90E8\u6570\u636E\u6E90\u6570\u636E\u5B9A\u671F\u540C\u6B65\uFF0C\u786E\u4FDD\u591A\u6E90\u6570\u636E\u9AD8\u6548\u3001\u51C6\u786E\u7684\u6574\u5408\u5230\u76EE\u6807\u7CFB\u7EDF\u4E2D\uFF0C\u6EE1\u8DB3\u590D\u6742\u7684\u4E1A\u52A1\u5206\u6790\u9700\u6C42\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5B9A\u671F\u6E05\u7406\u8FC7\u671F/\u65E0\u6548\u6570\u636E\uFF0C\u91CA\u653E\u5B58\u50A8\u7A7A\u95F4\uFF0C\u907F\u514D\u8FC7\u591A\u8FC7\u671F/\u65E0\u6548\u6570\u636E\u5BF9\u7CFB\u7EDF\u6027\u80FD\u4EA7\u751F\u5F71\u54CD\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Apache Doris \u4E4B\u524D\u7248\u672C\u4E2D\uFF0C\u901A\u5E38\u9700\u8981\u4F9D\u8D56\u4E8E\u5916\u90E8\u8C03\u5EA6\u7CFB\u7EDF\uFF0C\u5982\u901A\u8FC7\u4E1A\u52A1\u4EE3\u7801\u5B9A\u65F6\u8C03\u5EA6\u6216\u8005\u5F15\u5165\u7B2C\u4E09\u65B9\u8C03\u5EA6\u5DE5\u5177\u3001\u5206\u5E03\u5F0F\u8C03\u5EA6\u5E73\u53F0\u6765\u6EE1\u8DB3\u4E0A\u8FF0\u9700\u6C42\u3002\u7136\u800C\uFF0C\u56E0\u53D7\u9650\u4E8E\u5916\u90E8\u7CFB\u7EDF\u81EA\u8EAB\u80FD\u529B\uFF0C\u53EF\u80FD\u65E0\u6CD5\u6EE1\u8DB3 Doris \u5BF9\u8C03\u5EA6\u7B56\u7565\u53CA\u8D44\u6E90\u7BA1\u7406\u7075\u6D3B\u6027\u7684\u8981\u6C42\u3002\u6B64\u5916\uFF0C\u5982\u679C\u5916\u90E8\u8C03\u5EA6\u7CFB\u7EDF\u51FA\u73B0\u6545\u969C\uFF0C\u8FD9\u4E0D\u4EC5\u4F1A\u589E\u52A0\u4E1A\u52A1\u98CE\u9669\uFF0C\u8FD8\u9700\u6295\u5165\u989D\u5916\u7684\u8FD0\u7EF4\u65F6\u95F4\u548C\u4EBA\u529B\u6765\u5E94\u5BF9\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"job-scheduler",children:"Job Scheduler"}),"\n",(0,s.jsx)(e.p,{children:"\u4E3A\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF0CApache Doris \u5728 2.1 \u7248\u672C\u4E2D\u5F15\u5165\u4E86 Job Scheduler \u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u81EA\u4E3B\u4EFB\u52A1\u8C03\u5EA6\u80FD\u529B\uFF0C\u8C03\u5EA6\u7684\u7CBE\u51C6\u5EA6\u53EF\u8FBE\u5230\u79D2\u7EA7\u3002\u8BE5\u529F\u80FD\u7684\u63A8\u51FA\u4E0D\u4EC5\u4FDD\u969C\u4E86\u6570\u636E\u5BFC\u5165\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\uFF0C\u66F4\u8BA9\u7528\u6237\u80FD\u591F\u7075\u6D3B\u3001\u4FBF\u6377\u8C03\u6574\u8C03\u5EA6\u7B56\u7565\u3002\u540C\u65F6\uFF0C\u56E0\u51CF\u5C11\u4E86\u5BF9\u5916\u90E8\u7CFB\u7EDF\u7684\u4F9D\u8D56\uFF0C\u4E5F\u964D\u4F4E\u4E86\u7CFB\u7EDF\u6545\u969C\u7684\u98CE\u9669\u548C\u8FD0\u7EF4\u6210\u672C\uFF0C\u4E3A\u793E\u533A\u7528\u6237\u5E26\u6765\u66F4\u52A0\u7EDF\u4E00\u3001\u53EF\u9760\u7684\u4F7F\u7528\u4F53\u9A8C\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Doris Job Scheduler \u662F\u4E00\u79CD\u57FA\u4E8E\u9884\u8BBE\u8BA1\u5212\u8FD0\u884C\u7684\u4EFB\u52A1\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u80FD\u591F\u5728\u7279\u5B9A\u65F6\u95F4\u70B9\u6216\u6309\u7167\u6307\u5B9A\u65F6\u95F4\u95F4\u9694\u89E6\u53D1\u9884\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5B9E\u73B0\u4EFB\u52A1\u7684\u81EA\u52A8\u5316\u6267\u884C\u3002Job Scheduler \u5177\u5907\u4EE5\u4E0B\u7279\u70B9\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9AD8\u6548\u8C03\u5EA6\uFF1AJob Scheduler \u53EF\u4EE5\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5185\u5B89\u6392\u4EFB\u52A1\u548C\u4E8B\u4EF6\uFF0C\u786E\u4FDD\u6570\u636E\u5904\u7406\u7684\u9AD8\u6548\u6027\u3002\u91C7\u7528\u65F6\u95F4\u8F6E\u7B97\u6CD5\u4FDD\u8BC1\u4E8B\u4EF6\u80FD\u591F\u7CBE\u51C6\u505A\u5230\u79D2\u7EA7\u89E6\u53D1\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7075\u6D3B\u8C03\u5EA6\uFF1AJob Scheduler \u63D0\u4F9B\u4E86\u591A\u79CD\u8C03\u5EA6\u9009\u9879\uFF0C\u5982\u6309 \u5206\u3001\u5C0F\u65F6\u3001\u5929\u6216\u5468\u7684\u95F4\u9694\u8FDB\u884C\u8C03\u5EA6\uFF0C\u540C\u65F6\u652F\u6301\u4E00\u6B21\u6027\u8C03\u5EA6\u4EE5\u53CA\u5FAA\u73AF\uFF08\u5468\u671F\uFF09\u4E8B\u4EF6\u8C03\u5EA6\uFF0C\u5E76\u4E14\u5468\u671F\u8C03\u5EA6\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\u3001\u7ED3\u675F\u65F6\u95F4\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4E8B\u4EF6\u6C60\u548C\u9AD8\u6027\u80FD\u5904\u7406\u961F\u5217\uFF1AJob Scheduler \u91C7\u7528 Disruptor \u5B9E\u73B0\u9AD8\u6027\u80FD\u7684\u751F\u4EA7\u6D88\u8D39\u8005\u6A21\u578B\uFF0C\u6700\u5927\u53EF\u80FD\u7684\u907F\u514D\u4EFB\u52A1\u6267\u884C\u8FC7\u8F7D\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8C03\u5EA6\u8BB0\u5F55\u53EF\u8FFD\u6EAF\uFF1AJob Scheduler \u4F1A\u5B58\u50A8\u6700\u65B0\u7684 Task \u6267\u884C\u8BB0\u5F55\uFF08\u53EF\u914D\u7F6E\uFF09\uFF0C\u901A\u8FC7\u7B80\u5355\u7684\u547D\u4EE4\u5373\u53EF\u67E5\u770B\u4EFB\u52A1\u6267\u884C\u8BB0\u5F55\uFF0C\u786E\u4FDD\u8FC7\u7A0B\u53EF\u8FFD\u6EAF\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9AD8\u53EF\u7528\uFF1A\u4F9D\u6258\u4E8E Doris \u81EA\u8EAB\u7684\u9AD8\u53EF\u7528\u673A\u5236\uFF0CJob Schedule \u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u505A\u5230\u81EA\u6062\u590D\u3001\u9AD8\u53EF\u7528\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u76F8\u5173\u6587\u6863\uFF1A"})," ",(0,s.jsx)(e.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB.md",children:"CREATE-JOB"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BED\u6CD5\u8BF4\u660E",children:"\u8BED\u6CD5\u8BF4\u660E"}),"\n",(0,s.jsx)(e.p,{children:"\u4E00\u6761\u6709\u6548\u7684 Job \u8BED\u53E5\u9700\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5173\u952E\u5B57 CREATE JOB \u9700\u52A0\u4F5C\u4E1A\u540D\u79F0\uFF0C\u5B83\u5728\u6570\u636E\u5E93\u4E2D\u6807\u8BC6\u552F\u4E00\u4E8B\u4EF6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"ON SCHEDULE \u5B50\u53E5\u7528\u4E8E\u6307\u5B9A Job \u4F5C\u4E1A\u7684\u7C7B\u578B\u3001\u89E6\u53D1\u65F6\u95F4\u548C\u9891\u7387\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"AT timestamp \u7528\u4E8E\u4E00\u6B21\u6027\u4E8B\u4EF6\u3002\u5B83\u6307\u5B9A JOB \u4EC5\u5728\u7ED9\u5B9A\u7684\u65E5\u671F\u548C\u65F6\u95F4\u6267\u884C\u4E00\u6B21\uFF0CAT current_timestamp  \u6307\u5B9A\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u3002\u56E0 JOB \u4E00\u65E6\u521B\u5EFA\u5219\u4F1A\u7ACB\u5373\u8FD0\u884C\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5F02\u6B65\u4EFB\u52A1\u521B\u5EFA\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"EVERY\uFF1A\u7528\u4E8E\u5468\u671F\u6027\u4F5C\u4E1A\uFF0C\u53EF\u6307\u5B9A\u4F5C\u4E1A\u7684\u6267\u884C\u9891\u7387\uFF0C\u5173\u952E\u5B57\u540E\u9700\u6307\u5B9A\u65F6\u95F4\u95F4\u9694\uFF08\u5468\u3001\u5929\u3001\u5C0F\u65F6\u3001\u5206\u949F\uFF09\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Interval\uFF1A\u7528\u4E8E\u6307\u5B9A\u4F5C\u4E1A\u6267\u884C\u9891\u7387\u30021 DAY \u8868\u793A\u6BCF\u5929\u6267\u884C\u4E00\u6B21\uFF0C1 HOUR \u8868\u793A\u6BCF\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\uFF0C1 MINUTE \u8868\u793A\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\uFF0C1 WEEK \u8868\u793A\u6BCF\u5468\u6267\u884C\u4E00\u6B21\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5B50\u53E5 EVERY \u5305\u542B\u53EF\u9009 STARTS \u5B50\u53E5\u3002STARTS \u540E\u9762\u4E3A timestamp \u503C\uFF0C\u8BE5\u503C\u7528\u4E8E\u5B9A\u4E49\u5F00\u59CB\u91CD\u590D\u7684\u65F6\u95F4\uFF0CCURRENT_TIMESTAMP  \u7528\u4E8E\u6307\u5B9A\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u3002JOB \u4E00\u65E6\u521B\u5EFA\u5219\u4F1A\u7ACB\u5373\u8FD0\u884C\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5B50\u53E5 EVERY \u5305\u542B\u53EF\u9009 ENDS \u5B50\u53E5\u3002ENDS \u5173\u952E\u5B57\u540E\u9762\u4E3A timestamp \u503C\uFF0C\u8BE5\u503C\u5B9A\u4E49 JOB \u4E8B\u4EF6\u505C\u6B62\u8FD0\u884C\u7684\u65F6\u95F4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"DO \u5B50\u53E5\u7528\u4E8E\u6307\u5B9A Job \u4F5C\u4E1A\u89E6\u53D1\u65F6\u6240\u9700\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 Insert \u8BED\u53E5\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE\nJOB\n  job_name\n  ON SCHEDULE schedule\n  [COMMENT 'string']\n  DO execute_sql;\n\nschedule: {\n    AT timestamp\n    | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\ninterval:\n    quantity { WEEK |DAY | HOUR | MINUTE}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4E0B\u65B9\u4E3A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A my_job \u7684\u4F5C\u4E1A\uFF0C\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\uFF0C\u6267\u884C\u7684\u64CD\u4F5C\u662F\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,s.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u6B21\u6027\u7684 Job\uFF1A\u5728 2025-01-01 00:00:00 \u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u5C06 db2.tbl2 \u4E2D\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE AT '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u521B\u5EFA\u5468\u671F\u6027\u7684 Job\uFF0C\u672A\u6307\u5B9A\u7ED3\u675F\u65F6\u95F4\uFF1A\u5728 22025-01-01 00:00:00 \u65F6\u5F00\u59CB\u6BCF\u5929\u6267\u884C 1 \u6B21\uFF0C\u5C06 db2.tbl2 \u4E2D\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time >=  days_add(now(),-1);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u521B\u5EFA\u5468\u671F\u6027\u7684 Job\uFF0C\u6307\u5B9A\u7ED3\u675F\u65F6\u95F4\uFF1A\u5728 2025-01-01 00:00:00 \u65F6\u5F00\u59CB\u6BCF\u5929\u6267\u884C 1 \u6B21\uFF0C\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\uFF0C\u5728 2026-01-01 00:10:00 \u65F6\u7ED3\u675F\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' ENDS '2026-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE create_time >=  days_add(now(),-1);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u501F\u52A9 Job \u5B9E\u73B0\u5F02\u6B65\u6267\u884C\uFF1A\u7531\u4E8E Job \u5728 Doris \u4E2D\u662F\u4EE5\u540C\u6B65\u4EFB\u52A1\u7684\u5F62\u5F0F\u521B\u5EFA\u7684\uFF0C\u4F46\u5176\u6267\u884C\u8FC7\u7A0B\u5374\u662F\u5F02\u6B65\u8FDB\u884C\u7684\uFF0C\u8FD9\u4E00\u7279\u6027\u4F7F\u5F97 Job \u975E\u5E38\u9002\u5408\u7528\u4E8E\u5B9E\u73B0\u5F02\u6B65\u4EFB\u52A1\uFF0C\u4F8B\u5982\u5E38\u89C1\u7684 insert into select \u4EFB\u52A1\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8BBE\u9700\u8981\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\uFF0C\u8FD9\u91CC\u53EA\u9700\u8981\u6307\u5B9A JOB \u4E3A\u4E00\u6B21\u6027\u4EFB\u52A1\uFF0C\u4E14\u5F00\u59CB\u65F6\u95F4\u8BBE\u7F6E\u4E3A\u5F53\u524D\u65F6\u95F4\u5373\u53EF\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE AT current_timestamp DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u57FA\u4E8E-catalog-\u4E0E-job-scheduler-\u7684\u6570\u636E\u81EA\u52A8\u540C\u6B65",children:"\u57FA\u4E8E Catalog \u4E0E Job Scheduler \u7684\u6570\u636E\u81EA\u52A8\u540C\u6B65"}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u67D0\u7535\u5546\u573A\u666F\u4E3A\u4F8B\uFF0C\u7528\u6237\u5E38\u5E38\u9700\u8981\u4ECE MySQL \u4E2D\u63D0\u53D6\u4E1A\u52A1\u6570\u636E\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u6570\u636E\u540C\u6B65\u5230 Doris \u4E2D\u8FDB\u884C\u6570\u636E\u5206\u6790\uFF0C\u4ECE\u800C\u652F\u6301\u7CBE\u51C6\u7684\u8425\u9500\u6D3B\u52A8\u3002\u800C Job Scheduler \u53EF\u4E0E\u6570\u636E\u6E56\u80FD\u529B Multi Catalog \u914D\u5408\uFF0C\u9AD8\u6548\u5B8C\u6210\u8DE8\u6570\u636E\u6E90\u7684\u5B9A\u671F\u6570\u636E\u540C\u6B65\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS user.activity (\n    `user_id` INT NOT NULL,\n    `date` DATE NOT NULL,\n    `city` VARCHAR(20),\n    `age` SMALLINT,\n    `sex` TINYINT,\n    `last_visit_date` DATETIME DEFAULT '1970-01-01 00:00:00',\n    `cost` BIGINT DEFAULT '0',\n    `max_dwell_time` INT DEFAULT '0',\n    `min_dwell_time` INT DEFAULT '99999'\n);\nINSERT INTO user.activity VALUES\n    (10000, '2017-10-01', '\u5317\u4EAC', 20, 0, '2017-10-01 06:00:00', 20, 10, 10),\n    (10000, '2017-10-01', '\u5317\u4EAC', 20, 0, '2017-10-01 07:00:00', 15, 2, 2),\n    (10001, '2017-10-01', '\u5317\u4EAC', 30, 1, '2017-10-01 17:05:00', 2, 22, 22),\n    (10002, '2017-10-02', '\u4E0A\u6D77', 20, 1, '2017-10-02 12:59:00', 200, 5, 5),\n    (10003, '2017-10-02', '\u5E7F\u5DDE', 32, 0, '2017-10-02 11:20:00', 30, 11, 11),\n    (10004, '2017-10-01', '\u6DF1\u5733', 35, 0, '2017-10-01 10:00:00', 100, 3, 3),\n    (10004, '2017-10-03', '\u6DF1\u5733', 35, 0, '2017-10-03 10:20:00', 11, 6, 6);\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"user_id"}),(0,s.jsx)(e.th,{children:"date"}),(0,s.jsx)(e.th,{children:"city"}),(0,s.jsx)(e.th,{children:"age"}),(0,s.jsx)(e.th,{children:"sex"}),(0,s.jsx)(e.th,{children:"last_visit_date"}),(0,s.jsx)(e.th,{children:"cost"}),(0,s.jsx)(e.th,{children:"max_dwell_time"}),(0,s.jsx)(e.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017/10/1"}),(0,s.jsx)(e.td,{children:"\u5317\u4EAC"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017/10/1 6:00"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"10"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017/10/1"}),(0,s.jsx)(e.td,{children:"\u5317\u4EAC"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017/10/1 7:00"}),(0,s.jsx)(e.td,{children:"15"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10001"}),(0,s.jsx)(e.td,{children:"2017/10/1"}),(0,s.jsx)(e.td,{children:"\u5317\u4EAC"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017/10/1 17:05"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"22"}),(0,s.jsx)(e.td,{children:"22"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10002"}),(0,s.jsx)(e.td,{children:"2017/10/2"}),(0,s.jsx)(e.td,{children:"\u4E0A\u6D77"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017/10/2 12:59"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10003"}),(0,s.jsx)(e.td,{children:"2017/10/2"}),(0,s.jsx)(e.td,{children:"\u5E7F\u5DDE"}),(0,s.jsx)(e.td,{children:"32"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017/10/2 11:20"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017/10/1"}),(0,s.jsx)(e.td,{children:"\u6DF1\u5733"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017/10/1 10:00"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017/10/3"}),(0,s.jsx)(e.td,{children:"\u6DF1\u5733"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017/10/3 10:20"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"6"}),(0,s.jsx)(e.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0A\u8868\u4E3A\u4F8B\uFF0C\u7528\u6237\u5E0C\u671B\u67E5\u8BE2\u7B26\u5408\u603B\u6D88\u8D39\u91D1\u989D\u3001\u6700\u540E\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4\u3001\u6027\u522B\u3001\u6240\u5728\u57CE\u5E02\u8FD9\u51E0\u4E2A\u6570\u503C\u6761\u4EF6\u7684\u7528\u6237\uFF0C\u5E76\u5C06\u6EE1\u8DB3\u6761\u4EF6\u7684\u7528\u6237\u4FE1\u606F\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u4EE5\u4FBF\u540E\u7EED\u7684\u5B9A\u5411\u63A8\u9001\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u5F20 Doris \u8868"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS user_activity\n  (\n  `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237 id",\n  `date` DATE NOT NULL COMMENT "\u6570\u636E\u704C\u5165\u65E5\u671F\u65F6\u95F4",\n  `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57CE\u5E02",\n  `age` SMALLINT COMMENT "\u7528\u6237\u5E74\u9F84",\n  `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522B",\n  `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "\u7528\u6237\u6700\u540E\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4",\n  `cost` BIGINT SUM DEFAULT "0" COMMENT "\u7528\u6237\u603B\u6D88\u8D39",\n  `max_dwell_time` INT MAX DEFAULT "0" COMMENT "\u7528\u6237\u6700\u5927\u505C\u7559\u65F6\u95F4",\n  `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "\u7528\u6237\u6700\u5C0F\u505C\u7559\u65F6\u95F4"\n  )\n  AGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\n  DISTRIBUTED BY HASH(`user_id`) BUCKETS 1\n  PROPERTIES (\n  "replication_allocation" = "tag.location.default: 1"\n  );\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5176\u6B21\uFF0C\u521B\u5EFA\u5BF9\u5E94 MySQL \u5E93\u7684 Catalog"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE CATALOG activity PROPERTIES (\n  "type"="jdbc",\n  "user"="root",\n  "password"="123456",\n  "jdbc_url" = "jdbc:mysql://127.0.0.1:3306/user?useSSL=false",\n  "driver_url" = "mysql-connector-java-5.1.49.jar",\n  "driver_class" = "com.mysql.jdbc.Driver"\n  );\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6700\u540E\uFF0C\u5C06 MySQL \u6570\u636E\u5BFC\u5165\u5230 Doris \u4E2D\u3002\u91C7\u7528 Catalog + Insert Into \u7684\u65B9\u5F0F\u6765\u5BFC\u5165\u5168\u91CF\u6570\u636E\uFF0C\u7531\u4E8E\u5168\u91CF\u5BFC\u5165\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5F15\u53D1\u7CFB\u7EDF\u670D\u52A1\u6CE2\u52A8\uFF0C\u901A\u5E38\u9009\u62E9\u5728\u4E1A\u52A1\u95F2\u6687\u65F6\u8FDB\u884C\u64CD\u4F5C\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4E00\u6B21\u6027\u8C03\u5EA6\uFF1A\u5982\u4E0B\u65B9\u4EE3\u7801\u6240\u793A\uFF0C\u4F7F\u7528\u4E00\u6B21\u6027\u4EFB\u52A1\u6765\u5B9A\u65F6\u89E6\u53D1\u5168\u91CF\u5BFC\u5165\u4EFB\u52A1\uFF0C\u89E6\u53D1\u65F6\u95F4\u4E3A\u51CC\u6668 3:00\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB one_time_load_job\n  ON SCHEDULE\n  AT '2024-8-10 03:00:00'\n  DO\n  INSERT INTO user_activity SELECT * FROM activity.user.activity\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5468\u671F\u8C03\u5EA6\uFF1A\u7528\u6237\u4E5F\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5468\u671F\u6027\u7684\u8C03\u5EA6\u4EFB\u52A1\uFF0C\u5B9A\u671F\u66F4\u65B0\u6700\u65B0\u7684\u6570\u636E\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE JOB schedule_load\n  ON SCHEDULE EVERY 1 DAY\n  DO\n  INSERT INTO user_activity SELECT * FROM activity.user.activity where last_visit_date >=  days_add(now(),-1)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BBE\u8BA1\u4E0E\u5B9E\u73B0",children:"\u8BBE\u8BA1\u4E0E\u5B9E\u73B0"}),"\n",(0,s.jsx)(e.p,{children:"\u9AD8\u6548\u7684\u8C03\u5EA6\u901A\u5E38\u4F34\u968F\u7740\u5927\u91CF\u7684\u8D44\u6E90\u6D88\u8017\uFF0C\u9AD8\u7CBE\u5EA6\u7684\u8C03\u5EA6\u66F4\u662F\u5982\u6B64\u3002\u4F20\u7EDF\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\u76F4\u63A5\u4F7F\u7528 Java \u5185\u7F6E\u7684\u5B9A\u65F6\u8C03\u5EA6\u80FD\u529B\u2014\u2014\u5B9A\u65F6\u8C03\u5EA6\u7EBF\u7A0B\u5468\u671F\u8BBF\u95EE\uFF0C\u6216\u91C7\u7528\u4E00\u4E9B\u5B9A\u65F6\u8C03\u5EA6\u7684\u5DE5\u5177\u7C7B\u5E93\uFF0C\u4F46\u5176\u5728\u7CBE\u5EA6\u4EE5\u53CA\u5185\u5B58\u5360\u7528\u4E0A\u5B58\u5728\u8F83\u5927\u7684\u95EE\u9898\u3002\u4E3A\u66F4\u597D\u4FDD\u969C\u6027\u80FD\u7684\u524D\u63D0\u4E0B\u964D\u4F4E\u8D44\u6E90\u7684\u5360\u7528\uFF0C\u6211\u4EEC\u9009\u62E9 TimingWheel \u7B97\u6CD5\u4E0E Disruptor \u7ED3\u5408\uFF0C\u5B9E\u73B0\u79D2\u7EA7\u522B\u7684\u4EFB\u52A1\u8C03\u5EA6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5177\u4F53\u6765\u8BF4\uFF0C\u5229\u7528 Netty \u7684 HashedWheelTimer \u5B9E\u73B0\u65F6\u95F4\u8F6E\u7B97\u6CD5\uFF0CJob Manager \u4F1A\u5468\u671F\u6027\uFF08\u9ED8\u8BA4\u5341\u5206\u949F\uFF09\u5730\u5C06\u672A\u6765\u4E8B\u4EF6\u653E\u5165\u65F6\u95F4\u8F6E\u4E2D\u8C03\u5EA6\u3002\u4E3A\u4E86\u4FDD\u8BC1\u4EFB\u52A1\u9AD8\u6548\u89E6\u53D1\u5E76\u907F\u514D\u8D44\u6E90\u8FC7\u5EA6\u5360\u7528\uFF0C\u91C7\u7528 Disruptor \u6784\u5EFA\u5355\u751F\u4EA7\u8005\u591A\u6D88\u8D39\u8005\u6A21\u578B\u3002\u65F6\u95F4\u8F6E\u4EC5\u8D1F\u8D23\u89E6\u53D1\uFF0C\u5E76\u4E0D\u76F4\u63A5\u6267\u884C\u4EFB\u52A1\u3002\u5BF9\u4E8E\u5230\u671F\u9700\u89E6\u53D1\u7684\u4EFB\u52A1\u65F6\uFF0C\u4F1A\u5C06\u5176\u653E\u5165 Diapatch \u7EBF\u7A0B\uFF0C\u7531\u5176\u8D1F\u8D23\u5C06\u4EFB\u52A1\u5206\u53D1\u81F3\u76F8\u5E94\u7684\u6267\u884C\u7EBF\u7A0B\u6C60\uFF0C\u5BF9\u4E8E\u9700\u7ACB\u5373\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5219\u76F4\u63A5\u5C06\u5176\u6295\u9012\u81F3\u76F8\u5E94\u7684\u4EFB\u52A1\u6267\u884C\u7EBF\u7A0B\u6C60\u4E2D\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5BF9\u4E8E\u5355\u6B21\u6267\u884C\u4E8B\u4EF6\uFF0C\u5C06\u5728\u8C03\u5EA6\u5B8C\u6210\u540E\u5220\u9664\u4E8B\u4EF6\u5B9A\u4E49\uFF1B\u5BF9\u4E8E\u5468\u671F\u6027\u4E8B\u4EF6\uFF0C\u65F6\u95F4\u8F6E\u4E2D\u7684\u7CFB\u7EDF\u4E8B\u4EF6\u5C06\u5B9A\u671F\u62C9\u53D6\u4E0B\u4E00\u4E2A\u5468\u671F\u7684\u6267\u884C\u4EFB\u52A1\u3002\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5927\u91CF\u4EFB\u52A1\u96C6\u4E2D\u5728\u4E00\u4E2A Bucket \u4E2D\uFF0C\u51CF\u5C11\u65E0\u610F\u4E49\u7684\u904D\u5386\u3001\u63D0\u9AD8\u5904\u7406\u6548\u7387\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u800C\u5BF9\u4E8E\u4E8B\u52A1\u578B\u4EFB\u52A1\uFF0CJob Scheduler \u80FD\u591F\u901A\u8FC7\u4E0E\u4E8B\u52A1\u7684\u5F3A\u5173\u8054\u4EE5\u53CA\u4E8B\u52A1\u56DE\u8C03\u673A\u5236\uFF0C\u786E\u4FDD\u4E8B\u52A1\u578B\u4EFB\u52A1\u7684\u6267\u884C\u7ED3\u679C\u4E0E\u9884\u671F\u4E00\u81F4\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u672A\u6765\u89C4\u5212",children:"\u672A\u6765\u89C4\u5212"}),"\n",(0,s.jsx)(e.p,{children:"Doris Job Scheduler \u662F\u4E00\u6B3E\u5F3A\u5927\u4E14\u7075\u6D3B\u7684\u4EFB\u52A1\u8C03\u5EA6\u5DE5\u5177\uFF0C\u662F\u6570\u636E\u5904\u7406\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u529F\u80FD\u4E4B\u4E00\u3002\u9664\u4E86\u5728\u6570\u636E\u6E56\u5206\u6790\u3001\u5185\u90E8 ETL \u7B49\u5E38\u89C1\u573A\u666F\u7684\u5E94\u7528\u5916\uFF0CJob Scheduler \u5BF9\u4E8E\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u7684\u5B9E\u73B0\u4E5F\u8D77\u5230\u5173\u952E\u7684\u4F5C\u7528\u3002\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u662F\u4E00\u4E2A\u9884\u5148\u8BA1\u7B97\u5E76\u5B58\u50A8\u7684\u7ED3\u679C\u96C6\uFF0C\u5176\u6570\u636E\u66F4\u65B0\u7684\u9891\u7387\u4E0E\u6E90\u8868\u7684\u53D8\u52A8\u7D27\u5BC6\u76F8\u5173\u3002\u5F53\u6E90\u8868\u6570\u636E\u66F4\u65B0\u9891\u7E41\u65F6\uFF0C\u4E3A\u786E\u4FDD\u7269\u5316\u89C6\u56FE\u4E2D\u6570\u636E\u4FDD\u6301\u6700\u65B0\u72B6\u6001\uFF0C\u5C31\u9700\u8981\u5BF9\u7269\u5316\u89C6\u56FE\u5B9A\u671F\u5237\u65B0\u3002\u56E0\u6B64\u5728 2.1 \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5DE7\u5999\u5730\u5229\u7528 JOB \u5B9A\u65F6\u8C03\u5EA6\u529F\u80FD\uFF0C\u4FDD\u969C\u4E86\u7269\u5316\u89C6\u56FE\u4E0E\u6E90\u8868\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u5927\u5E45\u964D\u4F4E\u4E86\u4EBA\u5DE5\u5E72\u9884\u7684\u6210\u672C\u3002\n\u672A\u6765\uFF0CDoris Job Scheduler \u8FD8\u4F1A\u652F\u6301\u4EE5\u4E0B\u7279\u6027\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652F\u6301\u901A\u8FC7 UI \u754C\u9762\u67E5\u770B\u4E0D\u540C\u65F6\u6BB5\u6267\u884C\u7684\u4EFB\u52A1\u5206\u5E03\u60C5\u51B5\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u652F\u6301 JOB \u6D41\u7A0B\u7F16\u6392\uFF0C\u5373 DAG JOB\u3002\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u5728\u5185\u90E8\u5B9E\u73B0\u6570\u4ED3\u4EFB\u52A1\u7F16\u6392\uFF0C\u4E0E Catalog \u529F\u80FD\u53E0\u52A0\u5C06\u4F1A\u66F4\u9AD8\u6548\u5730\u5B8C\u6210\u6570\u636E\u5904\u7406\u548C\u5206\u6790\u5DE5\u4F5C\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u652F\u6301\u5BF9\u5BFC\u5165\u4EFB\u52A1\u3001UPDATE\u3001DELETE \u64CD\u4F5C\u8FDB\u884C\u5B9A\u65F6\u8C03\u5EA6\u3002"}),"\n"]})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return t},a:function(){return r}});var d=l(667294);let s={},i=d.createContext(s);function r(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);