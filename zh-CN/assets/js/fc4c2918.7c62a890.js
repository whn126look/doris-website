"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["53907"],{272320:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>i,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-array","title":"JSON_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/json-functions/json-array.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-array","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/json-functions/json-array","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"JSON_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_TYPE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/json-functions/json-type"},"next":{"title":"JSON_OBJECT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/json-functions/json-object"}}'),a=s("785893"),t=s("250065");let o={title:"JSON_ARRAY",language:"zh-CN"},l=void 0,i={},c=[{value:"json_array",id:"json_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"json_array",children:"json_array"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"VARCHAR json_array(VARCHAR,...)"})}),"\n",(0,a.jsx)(e.p,{children:"\u751F\u6210\u4E00\u4E2A\u5305\u542B\u6307\u5B9A\u5143\u7D20\u7684json\u6570\u7EC4,\u672A\u6307\u5B9A\u65F6\u8FD4\u56DE\u7A7A\u6570\u7EC4"}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'MySQL> select json_array();\n+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n\nMySQL> select json_array(null);\n+--------------------+\n| json_array(\'NULL\') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n\n\nMySQL> SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n+-----------------------------------------------+\n| json_array(1, \'abc\', \'NULL\', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, "abc", NULL, TRUE, "10:41:15"]            |\n+-----------------------------------------------+\n\n\nMySQL> select json_array("a", null, "c");\n+------------------------------+\n| json_array(\'a\', \'NULL\', \'c\') |\n+------------------------------+\n| ["a", NULL, "c"]             |\n+------------------------------+\n'})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"json,array,json_array"})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return o}});var r=s(667294);let a={},t=r.createContext(a);function o(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);