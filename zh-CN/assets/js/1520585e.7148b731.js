"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["364974"],{68514:function(a,n,r){r.r(n),r.d(n,{metadata:()=>e,contentTitle:()=>i,default:()=>x,assets:()=>d,toc:()=>c,frontMatter:()=>l});var e=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-last-index","title":"ARRAY_LAST_INDEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-last-index.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-last-index","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-last-index","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_LAST_INDEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_FIRST_INDEX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-first-index"},"next":{"title":"ARRAY_FIRST","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-first"}}'),s=r("785893"),t=r("250065");let l={title:"ARRAY_LAST_INDEX",language:"zh-CN"},i=void 0,d={},c=[{value:"array_last_index",id:"array_last_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(a){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"array_last_index",children:"array_last_index"}),"\n",(0,s.jsx)(n.p,{children:"array_last_index"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ARRAY<T> array_last_index(lambda, ARRAY<T> array1, ...)"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0C\u5BF9\u5176\u4ED6\u8F93\u5165 ARRAY \u53C2\u6570\u7684\u5185\u90E8\u6570\u636E\u8FDB\u884C\u76F8\u5E94\u7684\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u4F7F\u5F97 ",(0,s.jsx)(n.code,{children:"lambda(array1[i], ...)"})," \u8FD4\u56DE\u503C\u4E0D\u4E3A 0 \u7684\u7D22\u5F15\u3002\u5982\u679C\u6CA1\u627E\u5230\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u7D22\u5F15\uFF0C\u5219\u8FD4\u56DE 0\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728 lambda \u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u6240\u6709\u8F93\u5165\u7684 array \u7684\u5143\u7D20\u6570\u91CF\u5FC5\u987B\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"array_last_index(x->x>1, array1);\narray_last_index(x->(x%2 = 0), array1);\narray_last_index(x->(abs(x)-1), array1);\narray_last_index((x,y)->(x = y), array1, array2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select array_last_index(x->x+1>3, [2, 3, 4]);\n+-------------------------------------------------------------------+\n| array_last_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 3 |\n+-------------------------------------------------------------------+\n\nmysql> select array_last_index(x -> x is null, [null, 1, 2]);\n+----------------------------------------------------------------------+\n| array_last_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n\nmysql> select array_last_index(x->power(x,2)>10, [1, 2, 3, 4]);\n+---------------------------------------------------------------------------------+\n| array_last_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n\nmysql> select c_array1, c_array2, array_last_index((x,y)->x>y, c_array1, c_array2) from array_index_table order by id;\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_last_index(array_map([x, y] -> x > y, `c_array1`, `c_array2`)) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                    5 |\n| [6, 7, 8]       | [10, 12, 13]            |                                                                    0 |\n| [1]             | [-100]                  |                                                                    1 |\n| [1, NULL, 2]    | [NULL, 3, 1]            |                                                                    3 |\n| []              | []                      |                                                                    0 |\n| NULL            | NULL                    |                                                                    0 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY,FIRST_INDEX,array_last_index"})]})}function x(a={}){let{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(o,{...a})}):o(a)}},250065:function(a,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var e=r(667294);let s={},t=e.createContext(s);function l(a){let n=e.useContext(t);return e.useMemo(function(){return"function"==typeof a?a(n):{...n,...a}},[n,a])}function i(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:l(a.components),e.createElement(t.Provider,{value:n},a.children)}}}]);