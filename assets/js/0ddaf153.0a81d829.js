"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["919382"],{47769:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/sign","title":"SIGN","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/sign.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/sign","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/sign","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SIGN","language":"en"},"sidebar":"docs","previous":{"title":"RADIANS","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/radians"},"next":{"title":"POSITIVE","permalink":"/docs/2.0/sql-manual/sql-functions/numeric-functions/positive"}}'),t=s("785893"),r=s("250065");let l={title:"SIGN",language:"en"},o=void 0,c={},u=[{value:"sign",id:"sign",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"sign",children:"sign"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"TINYINT sign(DOUBLE x)"}),"\nReturns the sign of ",(0,t.jsx)(e.code,{children:"x"}),". Negative, zero or positive numbers correspond to -1, 0 or 1 respectively."]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select sign(3);\n+-----------+\n| sign(3.0) |\n+-----------+\n|         1 |\n+-----------+\nmysql> select sign(0);\n+-----------+\n| sign(0.0) |\n+-----------+\n|         0 |\nmysql> select sign(-10.0);\n+-------------+\n| sign(-10.0) |\n+-------------+\n|          -1 |\n+-------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"SIGN\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return l}});var i=s(667294);let t={},r=i.createContext(t);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);