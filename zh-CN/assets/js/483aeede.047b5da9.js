"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["700200"],{847729:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS","title":"SHOW PARTITIONS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITIONS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW PARTITIONS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-PARTITION-ID","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/SHOW-PARTITION-ID"},"next":{"title":"SHOW DYNAMIC PARTITION TABLES","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/table/SHOW-DYNAMIC-PARTITION-TABLES"}}'),a=l("785893"),s=l("250065");let i={title:"SHOW PARTITIONS",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u5206\u533A\u4FE1\u606F\u3002\u652F\u6301 Internal catalog \u548C Hive Catalog"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:" SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,a.jsx)(n.p,{children:"\u5BF9\u4E8E Internal catalog\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u652F\u6301 PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime \u7B49\u5217\u7684\u8FC7\u6EE4"}),"\n",(0,a.jsx)(n.li,{children:"TEMPORARY \u6307\u5B9A\u5217\u51FA\u4E34\u65F6\u5206\u533A"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5BF9\u4E8E Hive Catalog\uFF1A\n\u652F\u6301\u8FD4\u56DE\u6240\u6709\u5206\u533A\uFF0C\u5305\u62EC\u591A\u7EA7\u5206\u533A"}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A db \u4E0B\u6307\u5B9A\u8868\u7684\u6240\u6709\u975E\u4E34\u65F6\u5206\u533A\u4FE1\u606F"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM example_db.table_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A db \u4E0B\u6307\u5B9A\u8868\u7684\u6240\u6709\u4E34\u65F6\u5206\u533A\u4FE1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SHOW TEMPORARY PARTITIONS FROM example_db.table_name;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A db \u4E0B\u6307\u5B9A\u8868\u7684\u6307\u5B9A\u975E\u4E34\u65F6\u5206\u533A\u7684\u4FE1\u606F"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:' SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A db \u4E0B\u6307\u5B9A\u8868\u7684\u6700\u65B0\u975E\u4E34\u65F6\u5206\u533A\u7684\u4FE1\u606F"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, PARTITIONS\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var t=l(667294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);