"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["141435"],{706027:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-TABLE","title":"DROP-TABLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-TABLE.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Drop","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-TABLE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-TABLE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DROP-TABLE","language":"en"},"sidebar":"docs","previous":{"title":"DROP-DATABASE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE"},"next":{"title":"DROP-INDEX","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"}}'),a=t("785893"),i=t("250065");let s={title:"DROP-TABLE",language:"en"},r=void 0,c={},o=[{value:"DROP-TABLE",id:"drop-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"drop-table",children:"DROP-TABLE"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"DROP TABLE"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to drop a table.\ngrammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE [IF EXISTS] [db_name.]table_name [FORCE];\n"})}),"\n",(0,a.jsx)(n.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["After executing DROP TABLE for a period of time, the dropped table can be recovered through the RECOVER statement. See ",(0,a.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",children:"RECOVER"})," statement for details"]}),"\n",(0,a.jsx)(n.li,{children:"If you execute DROP TABLE FORCE, the system will not check whether there are unfinished transactions in the table, the table will be deleted directly and cannot be recovered, this operation is generally not recommended"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Delete a table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If it exists, delete the table of the specified database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS example_db.my_table;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" DROP, TABLE\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var l=t(667294);let a={},i=l.createContext(a);function s(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);