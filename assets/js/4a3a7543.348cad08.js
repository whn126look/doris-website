"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["800808"],{667104:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME","title":"ALTER TABLE RENAME","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-RENAME","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER TABLE RENAME","language":"en"},"sidebar":"docs","previous":{"title":"ALTER TABLE ROLLUP","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-ROLLUP"},"next":{"title":"ALTER TABLE REPLACE","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE"}}'),a=l("785893"),s=l("250065");let i={title:"ALTER TABLE RENAME",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to rename certain names of existing table properties. This operation is synchronous, and the return of the command indicates the completion of the execution."}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The alter_clause of rename supports modification of the following names"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Modify the table name"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RENAME new_table_name;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Modify the rollup index name"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RENAME ROLLUP old_rollup_name new_rollup_name;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Modify the partition name"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RENAME PARTITION old_partition_name new_partition_name;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Modify the column name"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Tips",type:"tip",children:(0,a.jsx)(n.p,{children:"This feature is supported since the Apache Doris 1.2 version"})}),"\n",(0,a.jsx)(n.p,{children:"Modify the column name"}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RENAME COLUMN old_column_name new_column_name;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notice:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"When creating a table, you need to set 'light_schema_change=true' in the property."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Modify the table named table1 to table2"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 RENAME table2;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Modify the rollup index named rollup1 in the table example_table to rollup2"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Modify the partition named p1 in the table example_table to p2"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_table RENAME PARTITION p1 p2;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Modify the column named c1 in the table example_table to c2"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_table RENAME COLUMN c1 c2;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, RENAME, ALTER TABLE\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var t=l(667294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);