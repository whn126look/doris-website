"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["875544"],{47109:function(n,s,e){e.r(s),e.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>j,assets:()=>l,toc:()=>r,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-contains","title":"JSON_CONTAINS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/json-functions/json-contains.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-contains","permalink":"/docs/sql-manual/sql-functions/json-functions/json-contains","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"JSON_CONTAINS","language":"en"},"sidebar":"docs","previous":{"title":"JSON_VALID","permalink":"/docs/sql-manual/sql-functions/json-functions/json-valid"},"next":{"title":"JSON_LENGTH","permalink":"/docs/sql-manual/sql-functions/json-functions/json-length"}}'),o=e("785893"),i=e("250065");let c={title:"JSON_CONTAINS",language:"en"},a=void 0,l={},r=[{value:"json_contains",id:"json_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let s={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"json_contains",children:"json_contains"}),"\n",(0,o.jsx)(s.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"BOOLEAN json_contains(JSON json_str, JSON candidate)"}),"\n",(0,o.jsx)(s.code,{children:"BOOLEAN json_contains(JSON json_str, JSON candidate, VARCHAR json_path)"}),"\n",(0,o.jsx)(s.code,{children:"BOOLEAN json_contains(VARCHAR json_str, VARCHAR candidate, VARCHAR json_path)"})]}),"\n",(0,o.jsx)(s.p,{children:"Indicates by returning 1 or 0 whether a given candidate JSON document is contained at a specific path within the json_str JSON document"}),"\n",(0,o.jsx)(s.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"mysql> SET @j = '{\"a\": 1, \"b\": 2, \"c\": {\"d\": 4}}';\nmysql> SET @j2 = '1';\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.a');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.a') |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.b');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.b') |\n+-------------------------------+\n|                             0 |\n+-------------------------------+\n\nmysql> SET @j2 = '{\"d\": 4}';\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.a');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.a') |\n+-------------------------------+\n|                             0 |\n+-------------------------------+\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.c');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.c') |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\n\nmysql> SELECT json_contains('[1, 2, {\"x\": 3}]', '1');\n+----------------------------------------+\n| json_contains('[1, 2, {\"x\": 3}]', '1') |\n+----------------------------------------+\n|                                      1 |\n+----------------------------------------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,o.jsx)(s.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(s.p,{children:"json,json_contains"})]})}function j(n={}){let{wrapper:s}={...(0,i.a)(),...n.components};return s?(0,o.jsx)(s,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},250065:function(n,s,e){e.d(s,{Z:function(){return a},a:function(){return c}});var t=e(667294);let o={},i=t.createContext(o);function c(n){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function a(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(i.Provider,{value:s},n.children)}}}]);