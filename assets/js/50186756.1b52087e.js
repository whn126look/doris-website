"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["817032"],{825906:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/least","title":"LEAST","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/numeric-functions/least.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/least","permalink":"/docs/sql-manual/sql-functions/numeric-functions/least","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"LEAST","language":"en"},"sidebar":"docs","previous":{"title":"GREATEST","permalink":"/docs/sql-manual/sql-functions/numeric-functions/greatest"},"next":{"title":"RANDOM","permalink":"/docs/sql-manual/sql-functions/numeric-functions/random"}}'),t=s("785893"),c=s("250065");let i={title:"LEAST",language:"en"},r=void 0,o={},d=[{value:"least",id:"least",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"least",children:"least"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"least(col_a, col_b, \u2026, col_n)"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"column"})," supports the following types: ",(0,t.jsx)(n.code,{children:"TINYINT"})," ",(0,t.jsx)(n.code,{children:"SMALLINT"})," ",(0,t.jsx)(n.code,{children:"INT"})," ",(0,t.jsx)(n.code,{children:"BIGINT"})," ",(0,t.jsx)(n.code,{children:"LARGEINT"})," ",(0,t.jsx)(n.code,{children:"FLOAT"})," ",(0,t.jsx)(n.code,{children:"DOUBLE"})," ",(0,t.jsx)(n.code,{children:"STRING"})," ",(0,t.jsx)(n.code,{children:"DATETIME"})," ",(0,t.jsx)(n.code,{children:"DECIMAL"})]}),"\n",(0,t.jsxs)(n.p,{children:["Compare the size of ",(0,t.jsx)(n.code,{children:"n columns"})," and return the smallest among them. If there is ",(0,t.jsx)(n.code,{children:"NULL"})," in ",(0,t.jsx)(n.code,{children:"column"}),", return ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select least(-1, 0, 5, 8);\n+--------------------+\n| least(-1, 0, 5, 8) |\n+--------------------+\n|                 -1 |\n+--------------------+\nmysql> select least(-1, 0, 5, NULL);\n+-----------------------+\n| least(-1, 0, 5, NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\nmysql> select least(6.3, 4.29, 7.6876);\n+--------------------------+\n| least(6.3, 4.29, 7.6876) |\n+--------------------------+\n|                     4.29 |\n+--------------------------+\nmysql> select least(\"2022-02-26 20:02:11\",\"2020-01-23 20:02:11\",\"2020-06-22 20:02:11\");\n+----------------------------------------------------------------------------+\n| least('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+----------------------------------------------------------------------------+\n| 2020-01-23 20:02:11                                                        |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"LEAST\n"})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var l=s(667294);let t={},c=l.createContext(t);function i(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);