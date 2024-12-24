"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["814630"],{825567:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/view/CREATE-VIEW","title":"CREATE VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/view","slug":"/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW BUILD INDEX","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/index/SHOW-BUILD-INDEX"},"next":{"title":"ALTER VIEW","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW"}}'),s=l("785893"),a=l("250065");let i={title:"CREATE VIEW",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u903B\u8F91\u89C6\u56FE\n\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u89C6\u56FE\u4E3A\u903B\u8F91\u89C6\u56FE\uFF0C\u6CA1\u6709\u7269\u7406\u5B58\u50A8\u3002\u6240\u6709\u5728\u89C6\u56FE\u4E0A\u7684\u67E5\u8BE2\u76F8\u5F53\u4E8E\u5728\u89C6\u56FE\u5BF9\u5E94\u7684\u5B50\u67E5\u8BE2\u4E0A\u8FDB\u884C\u3002"}),"\n",(0,s.jsx)(n.li,{children:"query_stmt \u4E3A\u4EFB\u610F\u652F\u6301\u7684 SQL"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 example_db \u4E0A\u521B\u5EFA\u89C6\u56FE example_view"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5305\u542B comment \u7684 view"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.p,{children:"CREATE, VIEW"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var t=l(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);