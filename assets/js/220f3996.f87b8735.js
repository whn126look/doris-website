"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["95225"],{795045:function(t,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>c,assets:()=>m,toc:()=>_,frontMatter:()=>s});var o=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap_xor_count","title":"bitmap_xor_count","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"bitmap_xor_count","language":"en"},"sidebar":"docs","previous":{"title":"orthogonal_bitmap_union_count","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"},"next":{"title":"bitmap_or_count","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or_count"}}'),r=i("785893"),e=i("250065");let s={title:"bitmap_xor_count",language:"en"},a=void 0,m={},_=[{value:"bitmap_xor_count",id:"bitmap_xor_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,e.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"bitmap_xor_count",children:"bitmap_xor_count"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"BIGINT BITMAP_XOR_COUNT(BITMAP lhs, BITMAP rhs, ...)"})}),"\n",(0,r.jsx)(n.p,{children:"XOR two or more bitmap sets and return the size of the result set."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          4 |\n+----------------------------------------------------------------------------+\n\nmysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          0 |\n+----------------------------------------------------------------------------+\n\nmysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('4,5,6'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6')) |\n+----------------------------------------------------------------------------+\n|                                                                          6 |\n+----------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5')));\n+-----------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         3 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         3 |\n+---------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------+\n|                                                                                                            NULL |\n+-----------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"BITMAP_XOR_COUNT,BITMAP\n"})})]})}function c(t={}){let{wrapper:n}={...(0,e.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},250065:function(t,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var o=i(667294);let r={},e=o.createContext(r);function s(t){let n=o.useContext(e);return o.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(e.Provider,{value:n},t.children)}}}]);