"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["14367"],{350522:function(e,l,t){t.r(l),t.d(l,{metadata:()=>n,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>r});var n=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE","title":"CREATE TABLE LIKE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE TABLE LIKE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE TABLE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE"},"next":{"title":"CREATE TABLE AS SELECT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT"}}'),s=t("785893"),a=t("250065");let r={title:"CREATE TABLE LIKE",language:"zh-CN"},i=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function E(e){let l={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(l.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u8868\u7ED3\u6784\u548C\u53E6\u4E00\u5F20\u8868\u5B8C\u5168\u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u540C\u65F6\u4E5F\u80FD\u591F\u53EF\u9009\u590D\u5236\u4E00\u4E9B rollup\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r1,r2,r3,...)]\n"})}),"\n",(0,s.jsx)(l.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u590D\u5236\u7684\u8868\u7ED3\u6784\u5305\u62EC Column Definition\u3001Partitions\u3001Table Properties \u7B49"}),"\n",(0,s.jsxs)(l.li,{children:["\u7528\u6237\u9700\u8981\u5BF9\u590D\u5236\u7684\u539F\u8868\u6709",(0,s.jsx)(l.code,{children:"SELECT"}),"\u6743\u9650"]}),"\n",(0,s.jsx)(l.li,{children:"\u652F\u6301\u590D\u5236 MySQL \u7B49\u5916\u8868"}),"\n",(0,s.jsx)(l.li,{children:"\u652F\u6301\u590D\u5236 OLAP Table \u7684 rollup"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test1 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test2 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C test1.table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test1 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2\uFF0C\u540C\u65F6\u590D\u5236 table1 \u7684 r1\uFF0Cr2 \u4E24\u4E2A rollup"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test1 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2\uFF0C\u540C\u65F6\u590D\u5236 table1 \u7684\u6240\u6709 rollup"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test2 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C test1.table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2\uFF0C\u540C\u65F6\u590D\u5236 table1 \u7684 r1\uFF0Cr2 \u4E24\u4E2A rollup"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test2 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C test1.table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2\uFF0C\u540C\u65F6\u590D\u5236 table1 \u7684\u6240\u6709 rollup"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n"})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5728 test1 \u5E93\u4E0B\u521B\u5EFA\u4E00\u5F20\u8868\u7ED3\u6784\u548C MySQL \u5916\u8868 table1 \u76F8\u540C\u7684\u7A7A\u8868\uFF0C\u8868\u540D\u4E3A table2"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(l.p,{children:"CREATE, TABLE, LIKE"})]})}function o(e={}){let{wrapper:l}={...(0,a.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(E,{...e})}):E(e)}},250065:function(e,l,t){t.d(l,{Z:function(){return i},a:function(){return r}});var n=t(667294);let s={},a=n.createContext(s);function r(e){let l=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:l},e.children)}}}]);