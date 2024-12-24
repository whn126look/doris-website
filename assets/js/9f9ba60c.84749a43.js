"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["164300"],{463205:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-DATA","title":"SHOW-DATA","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-DATA.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-DATA","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-DATA","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-DATA","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-DELETE","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-DELETE"},"next":{"title":"SHOW-DATA-TYPES","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-DATA-TYPES"}}'),a=t("785893"),l=t("250065");let i={title:"SHOW-DATA",language:"en"},r=void 0,o={},d=[{value:"SHOW-DATA",id:"show-data",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"show-data",children:"SHOW-DATA"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"SHOW DATA"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display the amount of data, the number of replicas, and the number of statistical rows."}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW DATA [FROM [db_name.]table_name] [ORDER BY ...];\n"})}),"\n",(0,a.jsx)(n.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If the FROM clause is not specified, the data volume and number of replicas subdivided into each table under the current db will be displayed. The data volume is the total data volume of all replicas. The number of replicas is the number of replicas for all partitions of the table and all materialized views."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If the FROM clause is specified, the data volume, number of copies and number of statistical rows subdivided into each materialized view under the table will be displayed. The data volume is the total data volume of all replicas. The number of replicas is the number of replicas for all partitions of the corresponding materialized view. The number of statistical rows is the number of statistical rows for all partitions of the corresponding materialized view."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When counting the number of rows, the one with the largest number of rows among the multiple copies shall prevail."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Total"})," row in the result set represents the total row. The ",(0,a.jsx)(n.code,{children:"Quota"})," line represents the quota set by the current database. The ",(0,a.jsx)(n.code,{children:"Left"})," line indicates the remaining quota."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If you want to see the size of each Partition, see ",(0,a.jsx)(n.code,{children:"help show partitions"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You can use ORDER BY to sort on any combination of columns."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display the data size and RecycleBin size of each database by default."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW DATA;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-------+-----------------------------------+--------+------------+-------------+-------------------+\n| DbId  | DbName                            | Size   | RemoteSize | RecycleSize | RecycleRemoteSize |\n+-------+-----------------------------------+--------+------------+-------------+-------------------+\n| 21009 | db1                               | 0      | 0          | 0           | 0                 |\n| 22011 | regression_test_inverted_index_p0 | 72764  | 0          | 0           | 0                 |\n| 0     | information_schema                | 0      | 0          | 0           | 0                 |\n| 22010 | regression_test                   | 0      | 0          | 0           | 0                 |\n| 1     | mysql                             | 0      | 0          | 0           | 0                 |\n| 22017 | regression_test_show_p0           | 0      | 0          | 0           | 0                 |\n| 10002 | __internal_schema                 | 46182  | 0          | 0           | 0                 |\n| Total | NULL                              | 118946 | 0          | 0           | 0                 |\n+-------+-----------------------------------+--------+------------+-------------+-------------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display the data volume, replica number, aggregate data volume and aggregate replica number of each table in a database."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"USE db1;\nSHOW DATA;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display the subdivided data volume, the number of replicas and the number of statistical rows of the specified table under the specified db"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW DATA FROM example_db.test;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"It can be combined and sorted according to the amount of data, the number of copies, the number of statistical rows, etc."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW DATA ORDER BY ReplicaCount desc,Size asc;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| table_c   | 3.102 KB    | 40           |\n| table_d   | .000        | 20           |\n| table_b   | 324.000 B   | 20           |\n| table_a   | 1.266 KB    | 10           |\n| Total     | 4.684 KB    | 90           |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1024.000 GB | 1073741734   |\n+-----------+-------------+--------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, DATA\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);