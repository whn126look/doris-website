"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["391450"],{592347:function(t,n,i){i.r(n),i.d(n,{metadata:()=>e,contentTitle:()=>a,default:()=>_,assets:()=>m,toc:()=>p,frontMatter:()=>o});var e=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-xor","title":"BITMAP_XOR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-xor.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-xor","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-xor","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_XOR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_UNION","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-union"},"next":{"title":"BITMAP_NOT","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-not"}}'),r=i("785893"),s=i("250065");let o={title:"BITMAP_XOR",language:"zh-CN"},a=void 0,m={},p=[{value:"bitmap_xor",id:"bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function l(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"bitmap_xor",children:"bitmap_xor"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"BITMAP BITMAP_XOR(BITMAP lhs, BITMAP rhs, ...)"})}),"\n",(0,r.jsx)(n.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u8F93\u5165bitmap\u7684\u5DEE\u96C6\uFF0C\u8FD4\u56DE\u65B0\u7684bitmap."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select bitmap_count(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n| 1,4                                                                                    |\n+----------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5')));\n+---------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))) |\n+---------------------------------------------------------------------------------------------------------------------+\n| 1,3,5                                                                                                               |\n+---------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),bitmap_empty()));\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| 1,3,5                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),NULL));\n+---------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)) |\n+---------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                      |\n+---------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"BITMAP_XOR,BITMAP\n"})})]})}function _(t={}){let{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},250065:function(t,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var e=i(667294);let r={},s=e.createContext(r);function o(t){let n=e.useContext(s);return e.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),e.createElement(s.Provider,{value:n},t.children)}}}]);