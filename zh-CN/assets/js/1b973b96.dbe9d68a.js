"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["262906"],{672171:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>t});var a=JSON.parse('{"id":"advanced/best-practice/import-analysis","title":"\u5BFC\u5165\u5206\u6790","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/advanced/best-practice/import-analysis.md","sourceDirName":"advanced/best-practice","slug":"/advanced/best-practice/import-analysis","permalink":"/zh-CN/docs/1.2/advanced/best-practice/import-analysis","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"\u5BFC\u5165\u5206\u6790","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u67E5\u8BE2\u5206\u6790","permalink":"/zh-CN/docs/1.2/advanced/best-practice/query-analysis"},"next":{"title":"\u5982\u4F55\u5F00\u542FDebug\u65E5\u5FD7","permalink":"/zh-CN/docs/1.2/advanced/best-practice/debug-log"}}'),r=s("785893"),i=s("250065");let t={title:"\u5BFC\u5165\u5206\u6790",language:"zh-CN"},c="\u5BFC\u5165\u5206\u6790",l={},d=[{value:"\u5BFC\u5165\u8BA1\u5212\u6811",id:"\u5BFC\u5165\u8BA1\u5212\u6811",level:2},{value:"\u67E5\u770B\u5BFC\u5165 Profile",id:"\u67E5\u770B\u5BFC\u5165-profile",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5BFC\u5165\u5206\u6790",children:"\u5BFC\u5165\u5206\u6790"})}),"\n",(0,r.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E86\u4E00\u4E2A\u56FE\u5F62\u5316\u7684\u547D\u4EE4\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u65B9\u4FBF\u7684\u5206\u6790\u4E00\u4E2A\u5177\u4F53\u7684\u5BFC\u5165\u3002\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u8BE5\u529F\u80FD\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u76EE\u524D\u4EC5\u9488\u5BF9 Broker Load \u7684\u5206\u6790\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5BFC\u5165\u8BA1\u5212\u6811",children:"\u5BFC\u5165\u8BA1\u5212\u6811"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u5BF9 Doris \u7684\u67E5\u8BE2\u8BA1\u5212\u6811\u8FD8\u4E0D\u592A\u4E86\u89E3\uFF0C\u8BF7\u5148\u9605\u8BFB\u4E4B\u524D\u7684\u6587\u7AE0 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/advanced/best-practice/query-analysis",children:"DORIS/\u6700\u4F73\u5B9E\u8DF5/\u67E5\u8BE2\u5206\u6790"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E00\u4E2A ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/1.2/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})," \u8BF7\u6C42\u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u4E5F\u662F\u57FA\u4E8E Doris \u7684\u67E5\u8BE2\u6846\u67B6\u7684\u3002\u4E00\u4E2ABroker Load \u4F5C\u4E1A\u4F1A\u6839\u636E\u5BFC\u5165\u8BF7\u6C42\u4E2D DATA INFILE \u5B50\u53E5\u7684\u4E2A\u6570\u8BB2\u4F5C\u4E1A\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u4EFB\u52A1\u3002\u6BCF\u4E2A\u5B50\u4EFB\u52A1\u53EF\u4EE5\u89C6\u4E3A\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BFC\u5165\u6267\u884C\u8BA1\u5212\u3002\u4E00\u4E2A\u5BFC\u5165\u8BA1\u5212\u7684\u7EC4\u6210\u53EA\u4F1A\u6709\u4E00\u4E2A Fragment\uFF0C\u5176\u7EC4\u6210\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502OlapTableSink\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502BrokerScanNode\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(n.p,{children:"BrokerScanNode \u4E3B\u8981\u8D1F\u8D23\u53BB\u8BFB\u6E90\u6570\u636E\u5E76\u53D1\u9001\u7ED9 OlapTableSink\uFF0C\u800C OlapTableSink \u8D1F\u8D23\u5C06\u6570\u636E\u6309\u7167\u5206\u533A\u5206\u6876\u89C4\u5219\u53D1\u9001\u5230\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u7531\u5BF9\u5E94\u7684\u8282\u70B9\u8D1F\u8D23\u5B9E\u9645\u7684\u6570\u636E\u5199\u5165\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u800C\u8FD9\u4E2A\u5BFC\u5165\u6267\u884C\u8BA1\u5212\u7684 Fragment \u4F1A\u6839\u636E\u5BFC\u5165\u6E90\u6587\u4EF6\u7684\u6570\u91CF\u3001BE\u8282\u70B9\u7684\u6570\u91CF\u7B49\u53C2\u6570\uFF0C\u5212\u5206\u6210\u4E00\u4E2A\u6216\u591A\u4E2A Instance\u3002\u6BCF\u4E2A Instance \u8D1F\u8D23\u4E00\u90E8\u5206\u6570\u636E\u5BFC\u5165\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u591A\u4E2A\u5B50\u4EFB\u52A1\u7684\u6267\u884C\u8BA1\u5212\u662F\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u800C\u4E00\u4E2A\u6267\u884C\u8BA1\u5212\u7684\u591A\u4E2A Instance \u4E5F\u662F\u5E76\u884C\u6267\u884C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67E5\u770B\u5BFC\u5165-profile",children:"\u67E5\u770B\u5BFC\u5165 Profile"}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6253\u5F00\u4F1A\u8BDD\u53D8\u91CF ",(0,r.jsx)(n.code,{children:"is_report_success"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET is_report_success=true;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540E\u63D0\u4EA4\u4E00\u4E2A Broker Load \u5BFC\u5165\u8BF7\u6C42\uFF0C\u5E76\u7B49\u5230\u5BFC\u5165\u6267\u884C\u5B8C\u6210\u3002Doris \u4F1A\u4EA7\u751F\u8BE5\u5BFC\u5165\u7684\u4E00\u4E2A Profile\u3002Profile \u5305\u542B\u4E86\u4E00\u4E2A\u5BFC\u5165\u5404\u4E2A\u5B50\u4EFB\u52A1\u3001Instance \u7684\u6267\u884C\u8BE6\u60C5\uFF0C\u6709\u52A9\u4E8E\u6211\u4EEC\u5206\u6790\u5BFC\u5165\u74F6\u9888\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u76EE\u524D\u4E0D\u652F\u6301\u67E5\u770B\u672A\u6267\u884C\u6210\u529F\u7684\u5BFC\u5165\u4F5C\u4E1A\u7684 Profile\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u5148\u83B7\u53D6 Profile \u5217\u8868\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n                 JobId: 20010\n               QueryId: 980014623046410a-af5d36f23381017f\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: LOAD LABEL xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:48:24\n               EndTime: 2023-03-07 19:50:45\n             TotalTime: 2m21s\n            QueryState: N/A\n               TraceId:\n          AnalysisTime: NULL\n              PlanTime: NULL\n          ScheduleTime: NULL\n       FetchResultTime: NULL\n       WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n                 JobId: N/A\n               QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: insert into xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:49:15\n               EndTime: 2023-03-07 19:49:15\n             TotalTime: 102ms\n            QueryState: OK\n               TraceId:\n          AnalysisTime: 825.277us\n              PlanTime: 4.126ms\n          ScheduleTime: N/A\n       FetchResultTime: 0ns\n       WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5217\u51FA\u5F53\u524D\u4FDD\u5B58\u7684\u6240\u6709\u5BFC\u5165 Profile\u3002\u6BCF\u884C\u5BF9\u5E94\u4E00\u4E2A\u5BFC\u5165\u3002\u5176\u4E2D QueryId \u5217\u4E3A\u5BFC\u5165\u4F5C\u4E1A\u7684 ID\u3002\u8FD9\u4E2A ID \u4E5F\u53EF\u4EE5\u901A\u8FC7 SHOW LOAD \u8BED\u53E5\u67E5\u770B\u62FF\u5230\u3002\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u6211\u4EEC\u60F3\u770B\u7684 Profile \u5BF9\u5E94\u7684 QueryId\uFF0C\u67E5\u770B\u5177\u4F53\u60C5\u51B5\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67E5\u770B\u4E00\u4E2AProfile\u5206\u4E3A3\u4E2A\u6B65\u9AA4\uFF1A"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B\u5B50\u4EFB\u52A1\u603B\u89C8"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u6709\u5BFC\u5165\u4F5C\u4E1A\u7684\u5B50\u4EFB\u52A1\u6982\u51B5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u4E0A\u56FE\uFF0C\u8868\u793A ",(0,r.jsx)(n.code,{children:"980014623046410a-af5d36f23381017f"})," \u8FD9\u4E2A\u5BFC\u5165\u4F5C\u4E1A\u603B\u5171\u6709\u4E00\u4E2A\u5B50\u4EFB\u52A1\uFF0C\u5176\u4E2D ActiveTime \u8868\u793A\u8FD9\u4E2A\u5B50\u4EFB\u52A1\u4E2D\u8017\u65F6\u6700\u957F\u7684 Instance \u7684\u6267\u884C\u65F6\u95F4\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B\u6307\u5B9A\u5B50\u4EFB\u52A1\u7684 Instance \u6982\u51B5"}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u6211\u4EEC\u53D1\u73B0\u4E00\u4E2A\u5B50\u4EFB\u52A1\u8017\u65F6\u8F83\u957F\u65F6\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u67E5\u770B\u8BE5\u5B50\u4EFB\u52A1\u7684\u5404\u4E2A Instance \u7684\u6267\u884C\u8017\u65F6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u91CC\u5C55\u793A\u4E86 980014623046410a-af5d36f23381017f \u8FD9\u4E2A\u5B50\u4EFB\u52A1\u7684\u56DB\u4E2A Instance \u8017\u65F6\uFF0C\u5E76\u4E14\u8FD8\u5C55\u793A\u4E86 Instance \u6240\u5728\u7684\u6267\u884C\u8282\u70B9\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B\u5177\u4F53 Instance"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u7EE7\u7EED\u67E5\u770B\u67D0\u4E00\u4E2A\u5177\u4F53\u7684 Instance \u4E0A\u5404\u4E2A\u7B97\u5B50\u7684\u8BE6\u7EC6 Profile\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/980014623046410a-88e260f0c43031f5"\\G\n*************************** 1. row ***************************\nInstance:\n      \u250C-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink]                      \u2502\n      \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n      \u2502  - Counters:                            \u2502\n      \u2502      - CloseWaitTime: 1m53s             \u2502\n      \u2502      - ConvertBatchTime: 0ns            \u2502\n      \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n      \u2502      - NonBlockingSendTime: 3m11s       \u2502\n      \u2502      - NumberBatchAdded: 782            \u2502\n      \u2502      - NumberNodeChannels: 1            \u2502\n      \u2502      - OpenTime: 743.822us              \u2502\n      \u2502      - RowsFiltered: 0                  \u2502\n      \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n      \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502      - SendDataTime: 11s761ms           \u2502\n      \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n      \u2502      - ValidateDataTime: 9s802ms        \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250C-----------------------------------------------------\u2510\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\u2502  - Counters:                                        \u2502\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\u2502      - DecompressTime: 0ns                          \u2502\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\u2502      - NumDiskAccess: 0                             \u2502\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\u2502      - RowsReturnedRate: 28.295K /sec               \u2502\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\u2514-----------------------------------------------------\u2518\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4E0A\u56FE\u5C55\u793A\u4E86\u5B50\u4EFB\u52A1 980014623046410a-af5d36f23381017f \u4E2D\uFF0CInstance 980014623046410a-88e260f0c43031f5 \u7684\u5404\u4E2A\u7B97\u5B50\u7684\u5177\u4F53 Profile\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0A3\u4E2A\u6B65\u9AA4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9010\u6B65\u6392\u67E5\u4E00\u4E2A\u5BFC\u5165\u4EFB\u52A1\u7684\u6267\u884C\u74F6\u9888\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var a=s(667294);let r={},i=a.createContext(r);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);