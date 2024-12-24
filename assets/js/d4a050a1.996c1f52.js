"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["983984"],{855275:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>r,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/SHOW-STATS","title":"SHOW COLUMN STATS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/statistics/SHOW-STATS.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/SHOW-STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-STATS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW COLUMN STATS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TABLE STATS","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-TABLE-STATS"},"next":{"title":"DROP ANALYZE JOB","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/DROP-ANALYZE-JOB"}}'),i=t("785893"),a=t("250065");let l={title:"SHOW COLUMN STATS",language:"en"},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"SHOW COLUMN STATS"})," to view various statistics data for columns."]}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cached: Show statistics information in the current FE memory cache."}),"\n",(0,i.jsxs)(n.li,{children:["table_name: The target table for collecting statistics. It can be in the format ",(0,i.jsx)(n.code,{children:"db_name.table_name"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["column_name: Specifies the target column, which must be an existing column in ",(0,i.jsx)(n.code,{children:"table_name"}),". You can specify multiple column names separated by commas."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.p,{children:"SHOW, TABLE, STATS"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);