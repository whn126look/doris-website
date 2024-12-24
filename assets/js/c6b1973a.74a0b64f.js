"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["897181"],{101763:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/weeks-add","title":"WEEKS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/weeks-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/weeks-add","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-add","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WEEKS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"DAYS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/days-sub"},"next":{"title":"WEEKS_DIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-diff"}}'),i=t("785893"),d=t("250065");let a={title:"WEEKS_ADD",language:"en"},l=void 0,r={},o=[{value:"weeks_add",id:"weeks_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"weeks_add",children:"weeks_add"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME WEEKS_ADD(DATETIME date, INT weeks)"})}),"\n",(0,i.jsx)(n.p,{children:"ADD a specified number of weeks from a datetime or date"}),"\n",(0,i.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select weeks_add(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| weeks_add('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-02-09 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WEEKS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},d=s.createContext(i);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);