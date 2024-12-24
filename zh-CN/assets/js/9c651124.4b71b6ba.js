"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["373320"],{254613:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>t,default:()=>A,assets:()=>E,toc:()=>d,frontMatter:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW","title":"ALTER ASYNC MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/materialized-view","slug":"/sql-manual/sql-statements/table-and-view/materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER ASYNC MATERIALIZED VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-MATERIALIZED-VIEW"},"next":{"title":"DROP MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/DROP-MATERIALIZED-VIEW"}}'),s=r("785893"),i=r("250065");let a={title:"ALTER ASYNC MATERIALIZED VIEW",language:"zh-CN"},t=void 0,E={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:4},{value:"\u8BF4\u660E",id:"\u8BF4\u660E",level:4},{value:"RENAME",id:"rename",level:5},{value:"refreshMethod",id:"refreshmethod",level:5},{value:"refreshTrigger",id:"refreshtrigger",level:5},{value:"SET",id:"set",level:5},{value:"REPLACE",id:"replace",level:5},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW mvName=multipartIdentifier ((RENAME newName=identifier)\n       | (REFRESH (refreshMethod | refreshTrigger | refreshMethod refreshTrigger))\n       | REPLACE WITH MATERIALIZED VIEW newName=identifier propertyClause?\n       | (SET  LEFT_PAREN fileProperties=propertyItemList RIGHT_PAREN))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8BF4\u660E",children:"\u8BF4\u660E"}),"\n",(0,s.jsx)(n.h5,{id:"rename",children:"RENAME"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6765\u66F4\u6539\u7269\u5316\u89C6\u56FE\u7684\u540D\u5B57"}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A\u5C06 mv1 \u7684\u540D\u5B57\u6539\u4E3A mv2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW mv1 rename mv2;\n"})}),"\n",(0,s.jsx)(n.h5,{id:"refreshmethod",children:"refreshMethod"}),"\n",(0,s.jsxs)(n.p,{children:["\u540C",(0,s.jsx)(n.a,{href:"../Create/CREATE-ASYNC-MATERIALIZED-VIEW.md",children:"\u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE"})]}),"\n",(0,s.jsx)(n.h5,{id:"refreshtrigger",children:"refreshTrigger"}),"\n",(0,s.jsxs)(n.p,{children:["\u540C",(0,s.jsx)(n.a,{href:"../Create/CREATE-ASYNC-MATERIALIZED-VIEW.md",children:"\u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE"})]}),"\n",(0,s.jsx)(n.h5,{id:"set",children:"SET"}),"\n",(0,s.jsx)(n.p,{children:"\u4FEE\u6539\u7269\u5316\u89C6\u56FE\u7279\u6709\u7684 property"}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\u4FEE\u6539 mv1 \u7684 grace_period \u4E3A 3000ms"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER MATERIALIZED VIEW mv1 set("grace_period"="3000");\n'})}),"\n",(0,s.jsx)(n.h5,{id:"replace",children:"REPLACE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW [db.]mv1 REPLACE WITH MATERIALIZED VIEW mv2\n[PROPERTIES('swap' = 'true')];\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E24\u4E2A\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u539F\u5B50\u7684\u66FF\u6362\u64CD\u4F5C"}),"\n",(0,s.jsx)(n.p,{children:"swap \u9ED8\u8BA4\u4E3A TRUE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679C swap \u53C2\u6570\u4E3A TRUE\uFF0C\u76F8\u5F53\u4E8E\u628A\u7269\u5316\u89C6\u56FE mv1 \u91CD\u547D\u540D\u4E3A mv2 , \u540C\u65F6\u628A mv2 \u91CD\u547D\u540D\u4E3A mv1"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C swap \u53C2\u6570\u4E3A FALSE\uFF0C\u76F8\u5F53\u4E8E\u628A mv2 \u91CD\u547D\u540D\u4E3A mv1\uFF0C\u539F\u6709\u7684 mv1 \u88AB\u5220\u9664"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\u60F3\u628A mv1 \u548C mv2 \u7684\u540D\u5B57\u4E92\u6362"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW db1.mv1 REPLACE WITH MATERIALIZED VIEW mv2;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\u60F3\u628A mv2 \u91CD\u547D\u540D\u4E3A mv1\uFF0C\u5E76\u5220\u9664\u539F\u5148\u7684 mv1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER MATERIALIZED VIEW db1.mv1 REPLACE WITH MATERIALIZED VIEW mv2\nPROPERTIES('swap' = 'false');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ALTER, ASYNC, MATERIALIZED, VIEW\n"})})]})}function A(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var l=r(667294);let s={},i=l.createContext(s);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);