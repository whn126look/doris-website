"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["217098"],{134023:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>o,toc:()=>u,frontMatter:()=>t});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-union","title":"ARRAY_UNION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-union.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-union","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-union","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_UNION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_DIFFERENCE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-difference"},"next":{"title":"ARRAY_JOIN","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-join"}}'),l=a("785893"),s=a("250065");let t={title:"ARRAY_UNION",language:"zh-CN"},i=void 0,o={},u=[{value:"array_union",id:"array_union",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"array_union",children:"array_union"}),"\n",(0,l.jsx)(e.p,{children:"array_union"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"ARRAY<T> array_union(ARRAY<T> array1, ARRAY<T> array2)"})}),"\n",(0,l.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542Barray1\u548Carray2\u7684\u5E76\u96C6\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u4E0D\u5305\u542B\u91CD\u590D\u9879\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select k1,k2,k3,array_union(k2,k3) from array_type_table;\n+------+-----------------+--------------+-------------------------+\n| k1   | k2              | k3           | array_union(`k2`, `k3`) |\n+------+-----------------+--------------+-------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 2, 3, 4, 5]         |\n|    2 | [2, 3]          | [1, 5]       | [2, 3, 1, 5]            |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1, 2]                  |\n+------+-----------------+--------------+-------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+-------------------------+\n| k1   | k2              | k3           | array_union(`k2`, `k3`) |\n+------+-----------------+--------------+-------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [1, NULL, 3, 5]         |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | [NULL, 2, 4]            |\n|    3 | NULL            | [1, 2, 3]    | NULL                    |\n+------+-----------------+--------------+-------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n| k1   | k2                         | k3                               | array_union(`k2`, `k3`)                           |\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world', 'c++', 'I', 'am']              |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'equals', 'b1', 'a2', 'b2']                |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL, 'value', 'nohasnull', 'nonull'] |\n|    4 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | ['hasnull', NULL, 'value']                        |\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+----------------------------+\n| k1   | k2               | k3                | array_union(`k2`, `k3`)    |\n+------+------------------+-------------------+----------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 2.1, 3.44, 3.4, 5.4] |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [NULL, 2, 5, 5.4]          |\n|    4 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [1, NULL, 2, 5, 3.1, 5.4]  |\n+------+------------------+-------------------+----------------------------+\n\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"ARRAY,UNION,ARRAY_UNION"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return i},a:function(){return t}});var r=a(667294);let l={},s=r.createContext(l);function t(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);