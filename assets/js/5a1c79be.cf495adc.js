"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["556744"],{30734:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/repeat","title":"REPEAT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/repeat.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/repeat","permalink":"/docs/sql-manual/sql-functions/string-functions/repeat","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REPEAT","language":"en"},"sidebar":"docs","previous":{"title":"INITCAP","permalink":"/docs/sql-manual/sql-functions/string-functions/initcap"},"next":{"title":"REVERSE","permalink":"/docs/sql-manual/sql-functions/string-functions/reverse"}}'),r=t("785893"),i=t("250065");let a={title:"REPEAT",language:"en"},l=void 0,o={},c=[{value:"repeat",id:"repeat",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"repeat",children:"repeat"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"VARCHAR repeat (VARCHAR str, INT count)"})}),"\n",(0,r.jsx)(n.p,{children:"Repeat the str of the string count times, return empty string when count is less than 1, return NULL when str, count is any NULL"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> SELECT repeat(\"a\", 3);\n+----------------+\n| repeat('a', 3) |\n+----------------+\n| aaa            |\n+----------------+\n\nmysql> SELECT repeat(\"a\", -1);\n+-----------------+\n| repeat('a', -1) |\n+-----------------+\n|                 |\n+-----------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"REPEAT\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);