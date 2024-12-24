"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["776251"],{938494:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>c,assets:()=>a,toc:()=>o,frontMatter:()=>u});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/minutes-sub","title":"MINUTES_SUB","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/minutes-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/minutes-sub","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/minutes-sub","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MINUTES_SUB","language":"en"},"sidebar":"docs","previous":{"title":"MINUTES_DIFF","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/minutes-diff"},"next":{"title":"SECONDS_ADD","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/seconds-add"}}'),i=t("785893"),l=t("250065");let u={title:"MINUTES_SUB",language:"en"},r=void 0,a={},o=[{value:"minutes_sub",id:"minutes_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"minutes_sub",children:"minutes_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME MINUTES_SUB(DATETIME date, INT minutes)"})}),"\n",(0,i.jsx)(n.p,{children:"Subtracts a specified number of minutes from a datetime or date"}),"\n",(0,i.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is DATETIME."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select minutes_sub(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| minutes_sub('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:01:02                   |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MINUTES_SUB\n"})})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return u}});var s=t(667294);let i={},l=s.createContext(i);function u(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:u(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);