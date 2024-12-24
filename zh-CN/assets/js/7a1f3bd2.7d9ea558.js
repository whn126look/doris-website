"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["372526"],{229434:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-sum","title":"ARRAY_SUM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-sum.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-sum","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-sum","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_SUM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_AVG","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-avg"},"next":{"title":"ARRAY_SIZE","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-size"}}'),s=r("785893"),t=r("250065");let l={title:"ARRAY_SUM",language:"zh-CN"},i=void 0,c={},o=[{value:"array_sum",id:"array_sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"array_sum",children:"array_sum"}),"\n",(0,s.jsx)(n.p,{children:"array_sum"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"T array_sum(ARRAY<T> src, Array<T> key)\nT array_sum(lambda, Array<T> arr1, Array<T> arr2 ....)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u4E4B\u548C\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,s.jsx)(n.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,s.jsx)(n.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,s.jsx)(n.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_sum(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_sum(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               6 |\n| [1, NULL, 3] |               4 |\n+--------------+-----------------+\n4 rows in set (0.01 sec)\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY,SUM,ARRAY_SUM"})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let s={},t=a.createContext(s);function l(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);