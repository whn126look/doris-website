"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["540009"],{712741:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/case","title":"CASE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/conditional-functions/case.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/case","permalink":"/docs/sql-manual/sql-functions/conditional-functions/case","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CASE","language":"en"},"sidebar":"docs","previous":{"title":"BIT_SHIFT_RIGHT","permalink":"/docs/sql-manual/sql-functions/bitwise-functions/bitshiftright"},"next":{"title":"COALESCE","permalink":"/docs/sql-manual/sql-functions/conditional-functions/coalesce"}}'),i=s("785893"),r=s("250065");let o={title:"CASE",language:"en"},l=void 0,c={},d=[{value:"case",id:"case",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"case",children:"case"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CASE expression\n    WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,i.jsx)(n.p,{children:"OR"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CASE WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,i.jsx)(n.p,{children:"Compare the expression with multiple possible values, and return the corresponding results when matching"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select user_id, case user_id when 1 then 'user_id = 1' when 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n \nmysql> select user_id, case when user_id = 1 then 'user_id = 1' when user_id = 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"CASE"})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);