"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["179855"],{37472:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-valid","title":"JSON_VALID","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-valid.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-valid","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-valid","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_VALID","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_UNQUOTE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-unquote"},"next":{"title":"JSON_CONTAINS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-contains"}}'),l=s("785893"),o=s("250065");let t={title:"JSON_VALID",language:"zh-CN"},r=void 0,d={},c=[{value:"json_valid",id:"json_valid",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"json_valid",children:"json_valid"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.p,{children:"json_valid \u51FD\u6570\u8FD4\u56DE0\u62161\u4EE5\u8868\u660E\u662F\u5426\u4E3A\u6709\u6548\u7684JSON, \u5982\u679C\u53C2\u6570\u662FNULL\u5219\u8FD4\u56DENULL\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"JSONB json_valid(VARCHAR json_str)"})}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u6B63\u5E38JSON\u5B57\u7B26\u4E32"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'MySQL > SELECT json_valid(\'{"k1":"v31","k2":300}\');\n+-------------------------------------+\n| json_valid(\'{"k1":"v31","k2":300}\') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n1 row in set (0.02 sec)\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u65E0\u6548\u7684JSON\u5B57\u7B26\u4E32"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MySQL > SELECT json_valid('invalid json');\n+----------------------------+\n| json_valid('invalid json') |\n+----------------------------+\n|                          0 |\n+----------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsx)(e.li,{children:"NULL\u53C2\u6570"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MySQL > select json_valid(NULL);\n+------------------+\n| json_valid(NULL) |\n+------------------+\n|             NULL |\n+------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"JSON, VALID, JSON_VALID"})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return t}});var i=s(667294);let l={},o=i.createContext(l);function t(n){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);