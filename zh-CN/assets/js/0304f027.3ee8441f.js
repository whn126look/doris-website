"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381736"],{448657:function(n,e,r){r.r(e),r.d(e,{metadata:()=>l,contentTitle:()=>s,default:()=>a,assets:()=>u,toc:()=>i,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/round","title":"ROUND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/round.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/round","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ROUND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PMOD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/pmod"},"next":{"title":"ROUND_BANKERS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round-bankers"}}'),o=r("785893"),t=r("250065");let d={title:"ROUND",language:"zh-CN"},s=void 0,u={},i=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"round",children:"round"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"T round(T x[, d])"}),"\n\u5C06",(0,o.jsx)(e.code,{children:"x"}),"\u56DB\u820D\u4E94\u5165\u540E\u4FDD\u7559d\u4F4D\u5C0F\u6570\uFF0Cd\u9ED8\u8BA4\u4E3A0\u3002\u5982\u679Cd\u4E3A\u8D1F\u6570\uFF0C\u5219\u5C0F\u6570\u70B9\u5DE6\u8FB9d\u4F4D\u4E3A0\u3002\u5982\u679Cx\u6216d\u4E3Anull\uFF0C\u8FD4\u56DEnull\u3002\n2.5\u4F1A\u820D\u5165\u52303\uFF0C\u5982\u679C\u60F3\u8981\u820D\u5165\u52302\u7684\u7B97\u6CD5\uFF0C\u8BF7\u4F7F\u7528round_bankers\u51FD\u6570\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679C d \u4E3A\u4E00\u4E2A\u5217\uFF0C\u5E76\u4E14\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A Decimal \u7C7B\u578B\uFF0C\u90A3\u4E48\u7ED3\u679C Decimal \u4F1A\u8DDF\u5165\u53C2 Decimal \u5177\u6709\u76F8\u540C\u7684\u5C0F\u6570\u90E8\u5206\u957F\u5EA6\u3002"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["\u8BE5\u51FD\u6570\u7684\u53E6\u4E00\u4E2A\u522B\u540D\u4E3A ",(0,o.jsx)(e.code,{children:"dround"}),"\u3002"]})}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\nmysql> SELECT number\n    -> , round(number * 2.5, number - 1) AS r_decimal_column\n    -> , round(number * 2.5, 0) AS r_decimal_literal\n    -> , round(cast(number * 2.5 AS DOUBLE), number - 1) AS r_double_column\n    -> , round(cast(number * 2.5 AS DOUBLE), 0) AS r_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+------------------+-------------------+-----------------+------------------+\n| number | r_decimal_column | r_decimal_literal | r_double_column | r_double_literal |\n+--------+------------------+-------------------+-----------------+------------------+\n|      1 |              3.0 |                 3 |               3 |                3 |\n+--------+------------------+-------------------+-----------------+------------------+\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"ROUND, DROUND\n"})})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return s},a:function(){return d}});var l=r(667294);let o={},t=l.createContext(o);function d(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:d(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);