"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["411472"],{442188:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-SQL-BLOCK-RULE","title":"SHOW-SQL-BLOCK-RULE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Show-Statements/SHOW-SQL-BLOCK-RULE.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-SQL-BLOCK-RULE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-SQL-BLOCK-RULE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-SQL-BLOCK-RULE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-SNAPSHOT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-SNAPSHOT"},"next":{"title":"SHOW-ROUTINE-LOAD","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD"}}'),l=t("785893"),a=t("250065");let r={title:"SHOW-SQL-BLOCK-RULE",language:"zh-CN"},i=void 0,c={},o=[{value:"SHOW-SQL-BLOCK-RULE",id:"show-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-sql-block-rule",children:"SHOW-SQL-BLOCK-RULE"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW SQL  BLOCK RULE"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u5DF2\u914D\u7F6E\u7684SQL\u963B\u6B62\u89C4\u5219\uFF0C\u4E0D\u6307\u5B9A\u89C4\u5219\u540D\u5219\u4E3A\u67E5\u770B\u6240\u6709\u89C4\u5219\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW SQL_BLOCK_RULE [FOR RULE_NAME];\n"})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u6240\u6709\u89C4\u5219\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW SQL_BLOCK_RULE;\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql                    | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule  | select * from order_analysis | NULL    | 0            | 0         | 0           | true   | true   |\n| test_rule2 | NULL                   | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6307\u5B9A\u89C4\u5219\u540D\u67E5\u8BE2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW SQL_BLOCK_RULE FOR test_rule2;\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql  | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule2 | NULL | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n1 row in set (0.00 sec)\n\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, SQL_BLOCK_RULE\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},a=s.createContext(l);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);