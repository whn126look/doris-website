"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["614796"],{87259:function(n,r,e){e.r(r),e.d(r,{metadata:()=>a,contentTitle:()=>l,default:()=>x,assets:()=>d,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-first-index","title":"ARRAY_FIRST_INDEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-first-index.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-first-index","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-first-index","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_FIRST_INDEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_EXISTS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-exists"},"next":{"title":"ARRAY_LAST_INDEX","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-last-index"}}'),i=e("785893"),s=e("250065");let t={title:"ARRAY_FIRST_INDEX",language:"zh-CN"},l=void 0,d={},c=[{value:"array_first_index",id:"array_first_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let r={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"array_first_index",children:"array_first_index"}),"\n",(0,i.jsx)(r.p,{children:"array_first_index"}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(r.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"ARRAY<T> array_first_index(lambda, ARRAY<T> array1, ...)"})}),"\n",(0,i.jsxs)(r.p,{children:["\u4F7F\u7528 lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0C\u5BF9\u5176\u4ED6\u8F93\u5165 ARRAY \u53C2\u6570\u7684\u5185\u90E8\u6570\u636E\u8FDB\u884C\u76F8\u5E94\u7684\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u4F7F\u5F97 ",(0,i.jsx)(r.code,{children:"lambda(array1[i], ...)"})," \u8FD4\u56DE\u503C\u4E0D\u4E3A 0 \u7684\u7D22\u5F15\u3002\u5982\u679C\u6CA1\u627E\u5230\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u7D22\u5F15\uFF0C\u5219\u8FD4\u56DE 0\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u5728 lambda \u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u6240\u6709\u8F93\u5165\u7684 array \u7684\u5143\u7D20\u6570\u91CF\u5FC5\u987B\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"array_first_index(x->x>1, array1);\narray_first_index(x->(x%2 = 0), array1);\narray_first_index(x->(abs(x)-1), array1);\narray_first_index((x,y)->(x = y), array1, array2);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"mysql> select array_first_index(x->x+1>3, [2, 3, 4]);\n+-------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 2 |\n+-------------------------------------------------------------------+\n\nmysql> select array_first_index(x -> x is null, [null, 1, 2]);\n+----------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n\nmysql> select array_first_index(x->power(x,2)>10, [1, 2, 3, 4]);\n+---------------------------------------------------------------------------------+\n| array_first_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n\nmysql> select col2, col3, array_first_index((x,y)->x>y, col2, col3) from array_test;\n+--------------+--------------+---------------------------------------------------------------------+\n| col2         | col3         | array_first_index(array_map([x, y] -> x(0) > y(1), `col2`, `col3`)) |\n+--------------+--------------+---------------------------------------------------------------------+\n| [1, 2, 3]    | [3, 4, 5]    |                                                                   0 |\n| [1, NULL, 2] | [NULL, 3, 1] |                                                                   3 |\n| [1, 2, 3]    | [9, 8, 7]    |                                                                   0 |\n| NULL         | NULL         |                                                                   0 |\n+--------------+--------------+---------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(r.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(r.p,{children:"ARRAY,FIRST_INDEX,ARRAY_FIRST_INDEX"})]})}function x(n={}){let{wrapper:r}={...(0,s.a)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,r,e){e.d(r,{Z:function(){return l},a:function(){return t}});var a=e(667294);let i={},s=a.createContext(i);function t(n){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(r):{...r,...n}},[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),a.createElement(s.Provider,{value:r},n.children)}}}]);