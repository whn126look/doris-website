"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["852645"],{762562:function(h,i,e){e.r(i),e.d(i,{metadata:()=>l,contentTitle:()=>r,default:()=>o,assets:()=>a,toc:()=>n,frontMatter:()=>c});var l=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.2","title":"Release 2.0.2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/v2.0/release-2.0.2.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.2","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.2","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.0.2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 2.0.3","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.3"},"next":{"title":"Release 2.0.1","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.1"}}'),s=e("785893"),t=e("250065");let c={title:"Release 2.0.2",language:"zh-CN"},r=void 0,a={},n=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"\u529F\u80FD\u4F18\u5316",id:"\u529F\u80FD\u4F18\u5316",level:2},{value:"\u6613\u7528\u6027\u63D0\u5347",id:"\u6613\u7528\u6027\u63D0\u5347",level:3},{value:"\u6539\u8FDB\u67E5\u8BE2\u4F18\u5316\u5668 Nereids \u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6",id:"\u6539\u8FDB\u67E5\u8BE2\u4F18\u5316\u5668-nereids-\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6",level:3},{value:"Multi-Catalog \u529F\u80FD\u4F18\u5316",id:"multi-catalog-\u529F\u80FD\u4F18\u5316",level:3},{value:"\u5012\u6392\u7D22\u5F15\u6027\u80FD\u4F18\u5316",id:"\u5012\u6392\u7D22\u5F15\u6027\u80FD\u4F18\u5316",level:3},{value:"Array \u51FD\u6570\u4F18\u5316",id:"array-\u51FD\u6570\u4F18\u5316",level:3},{value:"Bug \u4FEE\u590D",id:"bug-\u4FEE\u590D",level:2},{value:"\u81F4\u8C22",id:"\u81F4\u8C22",level:2}];function p(h){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...h.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0CApache Doris 2.0.2  \u7248\u672C\u5DF2\u4E8E 2023 \u5E74 10 \u6708 6 \u65E5\u6B63\u5F0F\u53D1\u5E03\uFF0C\u8BE5\u7248\u672C\u5BF9\u591A\u4E2A\u529F\u80FD\u8FDB\u884C\u4E86\u66F4\u65B0\u4F18\u5316\uFF0C\u65E8\u5728\u66F4\u597D\u5730\u6EE1\u8DB3\u7528\u6237\u7684\u9700\u6C42\u3002\u6709 92 \u4F4D\u8D21\u732E\u8005\u4E3A Apache Doris 2.0.2 \u7248\u672C\u63D0\u4EA4\u4E86\u529F\u80FD\u4F18\u5316\u9879\u4EE5\u53CA\u95EE\u9898\u4FEE\u590D\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4E86\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u6027\u80FD\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GitHub \u4E0B\u8F7D"}),"\uFF1A",(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/releases/tag/2.0.2-rc05",children:"https://github.com/apache/doris/releases/tag/2.0.2-rc05"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\u9875"}),"\uFF1A",(0,s.jsx)(i.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,s.jsx)(i.h2,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24679",children:"https://github.com/apache/doris/pull/24679"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u5220\u9664\u4E0E lambda \u51FD\u6570\u8BED\u6CD5\u51B2\u7A81\u7684  json\u201C->\u201D\u8FD0\u7B97\u7B26\uFF0C\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570 json_extract \u4EE3\u66FF\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24308",children:"https://github.com/apache/doris/pull/24308"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u5C06 ",(0,s.jsx)(i.code,{children:"metadata_failure_recovery"})," \u4ECE fe.conf \u79FB\u52A8\u5230 start_fe.sh \u53C2\u6570\uFF0C\u4EE5\u907F\u514D\u5F02\u5E38\u64CD\u4F5C\u3002"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24207",children:"https://github.com/apache/doris/pull/24207"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u5BF9\u4E8E\u666E\u901A\u7C7B\u578B\u4E2D\u7684 null \u503C\u4F7F\u7528 ",(0,s.jsx)(i.code,{children:"\\n"})," \u6765\u8868\u793A\uFF0C\u5BF9\u4E8E\u590D\u6742\u7C7B\u578B\u6216\u5D4C\u5957\u7C7B\u578B\u7684 null \u503C\uFF0C\u8DDF JSON \u7C7B\u578B\u4FDD\u6301\u4E00\u81F4\u3001\u91C7\u53D6 null \u6765\u8868\u793A\u3002"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23795",children:"https://github.com/apache/doris/pull/23795"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23784",children:"https://github.com/apache/doris/pull/23784"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4F18\u5316 BE \u8282\u70B9 priority_network \u914D\u7F6E\u9879\u7684\u7ED1\u5B9A\u7B56\u7565\uFF0C\u5982\u679C\u7528\u6237\u914D\u7F6E\u4E86\u9519\u8BEF\u7684 priority_network \u5219\u76F4\u63A5\u542F\u52A8\u5931\u8D25\uFF0C\u4EE5\u907F\u514D\u7528\u6237\u9519\u8BEF\u5730\u8BA4\u4E3A\u914D\u7F6E\u662F\u6B63\u786E\u7684\u3002\u5982\u679C\u7528\u6237\u6CA1\u6709\u914D\u7F6E priority_network\uFF0C\u5219\u4EC5\u4ECE IPv4 \u5217\u8868\u4E2D\u9009\u62E9\u7B2C\u4E00\u4E2A IP\uFF0C\u800C\u4E0D\u662F\u4ECE\u6240\u6709 IP \u4E2D\u9009\u62E9\uFF0C\u4EE5\u907F\u514D\u7528\u6237\u7684\u670D\u52A1\u5668\u4E0D\u652F\u6301 IPv4\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/17730",children:"https://github.com/apache/doris/pull/17730"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u652F\u6301\u53D6\u6D88\u6B63\u5728\u91CD\u8BD5\u7684\u5BFC\u5165\u4EFB\u52A1\uFF0C\u4FEE\u590D\u53D6\u6D88\u52A0\u8F7D\u5931\u8D25\u7684\u95EE\u9898\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u529F\u80FD\u4F18\u5316",children:"\u529F\u80FD\u4F18\u5316"}),"\n",(0,s.jsx)(i.h3,{id:"\u6613\u7528\u6027\u63D0\u5347",children:"\u6613\u7528\u6027\u63D0\u5347"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23887",children:"https://github.com/apache/doris/pull/23887"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u7528\u6237\u9700\u8981\u5411\u96C6\u7FA4\u4E2D\u6DFB\u52A0\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u5E93\uFF0C\u5982 lzo.jar\u3001orai18n.jar \u7B49\u3002\u5728\u8FC7\u53BB\u7684\u7248\u672C\u4E2D\uFF0C\u8FD9\u4E9B lib \u6587\u4EF6\u4F4D\u4E8E fe/lib \u6216 be/lib \u4E2D\uFF0C\u4F46\u5728\u5347\u7EA7\u96C6\u7FA4\u65F6\uFF0Clib \u5E93\u5C06\u88AB\u65B0\u7684 lib \u5E93\u66FF\u6362\uFF0C\u5BFC\u81F4\u6240\u6709\u81EA\u5B9A\u4E49\u7684 lib \u5E93\u90FD\u4F1A\u4E22\u5931\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u65B0\u7248\u672C\u4E2D\uFF0C\u4E3A FE \u548C BE \u6DFB\u52A0\u4E86\u65B0\u7684\u81EA\u5B9A\u4E49\u76EE\u5F55 custom_lib\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u5176\u4E2D\u653E\u7F6E\u81EA\u5B9A\u4E49 lib \u6587\u4EF6\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23022",children:"https://github.com/apache/doris/pull/23022"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u652F\u6301\u57FA\u4E8E\u7528\u6237\u89D2\u8272\u7684\u6743\u9650\u8BBF\u95EE\u63A7\u5236\uFF0C\u5B9E\u73B0\u4E86\u884C\u7EA7\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236\u7B56\u7565\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"\u6539\u8FDB\u67E5\u8BE2\u4F18\u5316\u5668-nereids-\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6",children:"\u6539\u8FDB\u67E5\u8BE2\u4F18\u5316\u5668 Nereids \u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23663",children:"https://github.com/apache/doris/pull/23663"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8FD0\u884C Analysis \u4EFB\u52A1\u65F6\u7981\u7528 File Cache\uFF0CAnalysis \u4EFB\u52A1\u662F\u540E\u53F0\u4EFB\u52A1\uFF0C\u4E0D\u5E94\u5F71\u54CD\u7528\u6237\u672C\u5730 File Cache \u6570\u636E\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23703",children:"https://github.com/apache/doris/pull/23703"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8FC7\u53BB\u7248\u672C\u4E2D\uFF0C\u67E5\u770B\u5217\u7684\u7EDF\u8BA1\u4FE1\u606F\u65F6\u5C06\u5FFD\u7565\u51FA\u73B0\u9519\u8BEF\u7684\u5217\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u65B0\u7248\u672C\u4E2D\uFF0C\u5F53 min \u6216 max \u503C\u672A\u80FD\u53CD\u5E8F\u5217\u5316\u65F6\uFF0C\u67E5\u770B\u5217\u7684\u7EDF\u8BA1\u4FE1\u606F\u65F6\u5C06\u4F7F\u7528 N/A \u4F5C\u4E3A min \u6216 max \u7684\u503C\u5E76\u4ECD\u663E\u793A\u5176\u4F59\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u5305\u62EC count\u3001null_count\u3001ndv \u7B49\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23965",children:"https://github.com/apache/doris/pull/23965"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u652F\u6301 JDBC \u5916\u90E8\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24625",children:"https://github.com/apache/doris/pull/24625"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u8DF3\u8FC7 ",(0,s.jsx)(i.code,{children:"__internal_schema"})," \u548C ",(0,s.jsx)(i.code,{children:"information_schema"})," \u4E0A\u672A\u77E5\u5217\u7684\u7EDF\u8BA1\u4FE1\u606F\u68C0\u67E5\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"multi-catalog-\u529F\u80FD\u4F18\u5316",children:"Multi-Catalog \u529F\u80FD\u4F18\u5316"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24168",children:"https://github.com/apache/doris/pull/24168"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u652F\u6301 Hadoop viewfs\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22369",children:"https://github.com/apache/doris/pull/22369"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4F18\u5316 JDBC Catalog Checksum Replay \u548C Range \u76F8\u5173\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23868",children:"https://github.com/apache/doris/pull/23868"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4F18\u5316\u4E86 JDBC Catalog \u7684 Property \u68C0\u67E5\u548C\u9519\u8BEF\u6D88\u606F\u63D0\u793A\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24242",children:"https://github.com/apache/doris/pull/24242"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4FEE\u590D\u4E86 MaxCompute Catalog Decimal \u7C7B\u578B\u89E3\u6790\u95EE\u9898\u4EE5\u53CA\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8\u5730\u5740\u9519\u8BEF\u7684\u95EE\u9898\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23391",children:"https://github.com/apache/doris/pull/23391"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u652F\u6301 Hive Metastore Catalog \u7684 SQL Cache\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22869",children:"https://github.com/apache/doris/pull/22869"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u63D0\u9AD8\u4E86 Hive Metastore Catalog \u7684\u5143\u6570\u636E\u540C\u6B65\u6027\u80FD\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22702",children:"https://github.com/apache/doris/pull/22702"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u6DFB\u52A0 metadata_name_ids \u4EE5\u5FEB\u901F\u83B7\u53D6 Catalogs\u3001DB\u3001Table\uFF0C\u5728\u521B\u5EFA\u6216\u5220\u9664 Catalog \u548C Table \u65F6\u65E0\u9700 Refresh Catalog\uFF0C\u5E76\u6DFB\u52A0 Profiling \u8868\u4ECE\u800C\u4E0E MySQL \u517C\u5BB9\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"\u5012\u6392\u7D22\u5F15\u6027\u80FD\u4F18\u5316",children:"\u5012\u6392\u7D22\u5F15\u6027\u80FD\u4F18\u5316"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23952",children:"https://github.com/apache/doris/pull/23952"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u589E\u52A0 bkd \u7D22\u5F15\u7684\u67E5\u8BE2\u7F13\u5B58\uFF0C\u901A\u8FC7\u7F13\u5B58\u53EF\u4EE5\u52A0\u901F\u5728\u547D\u4E2D bkd \u7D22\u5F15\u65F6\u7684\u67E5\u8BE2\u6027\u80FD\uFF0C\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E2D\u6548\u679C\u66F4\u4E3A\u660E\u663E\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24678",children:"https://github.com/apache/doris/pull/24678"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u63D0\u5347\u5012\u6392\u7D22\u5F15\u5728 Count \u7B97\u5B50\u4E0A\u7684\u67E5\u8BE2\u6027\u80FD\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24751",children:"https://github.com/apache/doris/pull/24751"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u63D0\u5347\u4E86 Match \u7B97\u5B50\u5728\u672A\u547D\u4E2D\u7D22\u5F15\u65F6\u7684\u6548\u7387\uFF0C\u5728\u6D4B\u8BD5\u8868\u73B0\u4E2D\u6027\u80FD\u6700\u9AD8\u63D0\u5347 60 \u500D\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23871",children:"https://github.com/apache/doris/pull/23871"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24389",children:"https://github.com/apache/doris/pull/24389"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u63D0\u5347\u4E86 MATCH \u548C MATCH_ALL \u5728\u5012\u6392\u7D22\u5F15\u4E0A\u7684\u67E5\u8BE2\u6027\u80FD\uFF1B"}),"\n",(0,s.jsx)(i.h3,{id:"array-\u51FD\u6570\u4F18\u5316",children:"Array \u51FD\u6570\u4F18\u5316"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23630",children:"https://github.com/apache/doris/pull/23630"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4F18\u5316\u4E86\u8001\u7248\u672C\u67E5\u8BE2\u4F18\u5316\u5668 Array \u51FD\u6570\u65E0\u6CD5\u5904\u7406 Decimal \u7C7B\u578B\u7684\u95EE\u9898\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24327",children:"https://github.com/apache/doris/pull/24327"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u4F18\u5316\u4E86 ",(0,s.jsx)(i.code,{children:"array_union"})," \u6570\u7EC4\u51FD\u6570\u5BF9\u591A\u4E2A\u53C2\u6570\u7684\u652F\u6301\uFF1B"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24455",children:"https://github.com/apache/doris/pull/24455"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u652F\u6301\u901A\u8FC7 explode \u51FD\u6570\u6765\u5904\u7406\u6570\u7EC4\u5D4C\u5957\u590D\u6742\u7C7B\u578B\uFF1B"}),"\n",(0,s.jsx)(i.h2,{id:"bug-\u4FEE\u590D",children:"Bug \u4FEE\u590D"}),"\n",(0,s.jsx)(i.p,{children:"\u4FEE\u590D\u4E86\u4E4B\u524D\u7248\u672C\u5B58\u5728\u7684\u90E8\u5206 Bug\uFF0C\u4F7F\u7CFB\u7EDF\u6574\u4F53\u7A33\u5B9A\u6027\u8868\u73B0\u5F97\u5230\u5927\u5E45\u63D0\u5347\uFF0C\u5B8C\u6574 BugFix \u5217\u8868\u8BF7\u53C2\u8003 GitHub Commits \u8BB0\u5F55\uFF1B"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23601",children:"https://github.com/apache/doris/pull/23601"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23630",children:"https://github.com/apache/doris/pull/23630"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23555",children:"https://github.com/apache/doris/pull/23555"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/17644",children:"https://github.com/apache/doris/pull/17644"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23779",children:"https://github.com/apache/doris/pull/23779"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23940",children:"https://github.com/apache/doris/pull/23940"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23860",children:"https://github.com/apache/doris/pull/23860"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23973",children:"https://github.com/apache/doris/pull/23973"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24020",children:"https://github.com/apache/doris/pull/24020"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24039",children:"https://github.com/apache/doris/pull/24039"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23958",children:"https://github.com/apache/doris/pull/23958"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24104",children:"https://github.com/apache/doris/pull/24104"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24097",children:"https://github.com/apache/doris/pull/24097"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23852",children:"https://github.com/apache/doris/pull/23852"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24139",children:"https://github.com/apache/doris/pull/24139"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24165",children:"https://github.com/apache/doris/pull/24165"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24164",children:"https://github.com/apache/doris/pull/24164"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24369",children:"https://github.com/apache/doris/pull/24369"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24372",children:"https://github.com/apache/doris/pull/24372"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24381",children:"https://github.com/apache/doris/pull/24381"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24385",children:"https://github.com/apache/doris/pull/24385"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24290",children:"https://github.com/apache/doris/pull/24290"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24207",children:"https://github.com/apache/doris/pull/24207"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24521",children:"https://github.com/apache/doris/pull/24521"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24460",children:"https://github.com/apache/doris/pull/24460"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24568",children:"https://github.com/apache/doris/pull/24568"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24610",children:"https://github.com/apache/doris/pull/24610"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24595",children:"https://github.com/apache/doris/pull/24595"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24616",children:"https://github.com/apache/doris/pull/24616"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24635",children:"https://github.com/apache/doris/pull/24635"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24625",children:"https://github.com/apache/doris/pull/24625"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24572",children:"https://github.com/apache/doris/pull/24572"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24578",children:"https://github.com/apache/doris/pull/24578"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23943",children:"https://github.com/apache/doris/pull/23943"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24697",children:"https://github.com/apache/doris/pull/24697"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24681",children:"https://github.com/apache/doris/pull/24681"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24617",children:"https://github.com/apache/doris/pull/24617"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24692",children:"https://github.com/apache/doris/pull/24692"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24700",children:"https://github.com/apache/doris/pull/24700"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24389",children:"https://github.com/apache/doris/pull/24389"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24698",children:"https://github.com/apache/doris/pull/24698"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24778",children:"https://github.com/apache/doris/pull/24778"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24782",children:"https://github.com/apache/doris/pull/24782"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24800",children:"https://github.com/apache/doris/pull/24800"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24808",children:"https://github.com/apache/doris/pull/24808"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24636",children:"https://github.com/apache/doris/pull/24636"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24981",children:"https://github.com/apache/doris/pull/24981"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24949",children:"https://github.com/apache/doris/pull/24949"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,s.jsx)(i.p,{children:"\u611F\u8C22\u6240\u6709\u5728 2.0.2 \u7248\u672C\u4E2D\u53C2\u4E0E\u529F\u80FD\u5F00\u53D1\u4E0E\u4F18\u5316\u4EE5\u53CA\u95EE\u9898\u4FEE\u590D\u7684\u6240\u6709\u8D21\u732E\u8005\uFF0C\u4ED6\u4EEC\u5206\u522B\u662F\uFF1A"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/adonis0147",children:"@adonis0147"})," ",(0,s.jsx)(i.a,{href:"https://github.com/airborne12",children:"@airborne12"})," ",(0,s.jsx)(i.a,{href:"https://github.com/amorynan",children:"@amorynan"})," ",(0,s.jsx)(i.a,{href:"https://github.com/AshinGau",children:"@AshinGau"})," ",(0,s.jsx)(i.a,{href:"https://github.com/BePPPower",children:"@BePPPower"})," ",(0,s.jsx)(i.a,{href:"https://github.com/BiteTheDDDDt",children:"@BiteTheDDDDt"})," ",(0,s.jsx)(i.a,{href:"https://github.com/bobhan1",children:"@bobhan1"})," ",(0,s.jsx)(i.a,{href:"https://github.com/ByteYue",children:"@ByteYue"})," ",(0,s.jsx)(i.a,{href:"https://github.com/caiconghui",children:"@caiconghui"})," ",(0,s.jsx)(i.a,{href:"https://github.com/CalvinKirs",children:"@CalvinKirs"})," ",(0,s.jsx)(i.a,{href:"https://github.com/cambyzju",children:"@cambyzju"})," ",(0,s.jsx)(i.a,{href:"https://github.com/ChengDaqi2023",children:"@ChengDaqi2023"})," ",(0,s.jsx)(i.a,{href:"https://github.com/ChinaYiGuan",children:"@ChinaYiGuan"})," ",(0,s.jsx)(i.a,{href:"https://github.com/CodeCooker17",children:"@CodeCooker17"})," ",(0,s.jsx)(i.a,{href:"https://github.com/csun5285",children:"@csun5285"})," ",(0,s.jsx)(i.a,{href:"https://github.com/dataroaring",children:"@dataroaring"})," ",(0,s.jsx)(i.a,{href:"https://github.com/deadlinefen",children:"@deadlinefen"})," ",(0,s.jsx)(i.a,{href:"https://github.com/DongLiang-0",children:"@DongLiang-0"})," ",(0,s.jsx)(i.a,{href:"https://github.com/Doris-Extras",children:"@Doris-Extras"})," ",(0,s.jsx)(i.a,{href:"https://github.com/dutyu",children:"@dutyu"})," ",(0,s.jsx)(i.a,{href:"https://github.com/eldenmoon",children:"@eldenmoon"})," ",(0,s.jsx)(i.a,{href:"https://github.com/englefly",children:"@englefly"})," ",(0,s.jsx)(i.a,{href:"https://github.com/freemandealer",children:"@freemandealer"})," ",(0,s.jsx)(i.a,{href:"https://github.com/Gabriel39",children:"@Gabriel39"})," ",(0,s.jsx)(i.a,{href:"https://github.com/gnehil",children:"@gnehil"})," ",(0,s.jsx)(i.a,{href:"https://github.com/GoGoWen",children:"@GoGoWen"})," ",(0,s.jsx)(i.a,{href:"https://github.com/gohalo",children:"@gohalo"})," ",(0,s.jsx)(i.a,{href:"https://github.com/HappenLee",children:"@HappenLee"})," ",(0,s.jsx)(i.a,{href:"https://github.com/hello-stephen",children:"@hello-stephen"})," ",(0,s.jsx)(i.a,{href:"https://github.com/HHoflittlefish777",children:"@HHoflittlefish777"})," ",(0,s.jsx)(i.a,{href:"https://github.com/hubgeter",children:"@hubgeter"})," ",(0,s.jsx)(i.a,{href:"https://github.com/hust-hhb",children:"@hust-hhb"})," ",(0,s.jsx)(i.a,{href:"https://github.com/ixzc",children:"@ixzc"})," ",(0,s.jsx)(i.a,{href:"https://github.com/JackDrogon",children:"@JackDrogon"})," ",(0,s.jsx)(i.a,{href:"https://github.com/jacktengg",children:"@jacktengg"})," ",(0,s.jsx)(i.a,{href:"https://github.com/jackwener",children:"@jackwener"})," ",(0,s.jsx)(i.a,{href:"https://github.com/Jibing-Li",children:"@Jibing-Li"})," ",(0,s.jsx)(i.a,{href:"https://github.com/JNSimba",children:"@JNSimba"})," ",(0,s.jsx)(i.a,{href:"https://github.com/kaijchen",children:"@kaijchen"})," ",(0,s.jsx)(i.a,{href:"https://github.com/kaka11chen",children:"@kaka11chen"})," ",(0,s.jsx)(i.a,{href:"https://github.com/Kikyou1997",children:"@Kikyou1997"})," ",(0,s.jsx)(i.a,{href:"https://github.com/Lchangliang",children:"@Lchangliang"})," ",(0,s.jsx)(i.a,{href:"https://github.com/LemonLiTree",children:"@LemonLiTree"})," ",(0,s.jsx)(i.a,{href:"https://github.com/liaoxin01",children:"@liaoxin01"})," ",(0,s.jsx)(i.a,{href:"https://github.com/LiBinfeng-01",children:"@LiBinfeng-01"})," ",(0,s.jsx)(i.a,{href:"https://github.com/liugddx",children:"@liugddx"})," ",(0,s.jsx)(i.a,{href:"https://github.com/luwei16",children:"@luwei16"})," ",(0,s.jsx)(i.a,{href:"https://github.com/mongo360",children:"@mongo360"})," ",(0,s.jsx)(i.a,{href:"https://github.com/morningman",children:"@morningman"})," ",(0,s.jsx)(i.a,{href:"https://github.com/morrySnow",children:"@morrySnow"})," @mrhhsg @Mryange @mymeiyi @neuyilan @pingchunzhang @platoneko @qidaye @realize096 @RYH61 @shuke987 @sohardforaname @starocean999 @SWJTU-ZhangLei @TangSiyang2001 @Tech-Circle-48 @w41ter @wangbo @wsjz @wuwenchi @wyx123654 @xiaokang @XieJiann @xinyiZzz @XuJianxu @xutaoustc @xy720 @xyfsjq @xzj7019 @yiguolei @yujun777 @Yukang-Lian @Yulei-Yang @zclllyybb @zddr @zhangguoqiang666 @zhangstar333 @ZhangYu0123 @zhannngchen @zxealous @zy-kkk @zzzxl1993 @zzzzzzzs"]})]})}function o(h={}){let{wrapper:i}={...(0,t.a)(),...h.components};return i?(0,s.jsx)(i,{...h,children:(0,s.jsx)(p,{...h})}):p(h)}},250065:function(h,i,e){e.d(i,{Z:function(){return r},a:function(){return c}});var l=e(667294);let s={},t=l.createContext(s);function c(h){let i=l.useContext(t);return l.useMemo(function(){return"function"==typeof h?h(i):{...i,...h}},[i,h])}function r(h){let i;return i=h.disableParentContext?"function"==typeof h.components?h.components(s):h.components||s:c(h.components),l.createElement(t.Provider,{value:i},h.children)}}}]);