"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["990579"],{192258:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/minute","title":"MINUTE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/date-time-functions/minute.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/minute","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/minute","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MINUTE","language":"en"},"sidebar":"docs","previous":{"title":"HOUR","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/hour"},"next":{"title":"SECOND","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/second"}}'),s=t("785893"),l=t("250065");let r={title:"MINUTE",language:"en"},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns minute information in the time type, ranging from 0,59"}),"\n",(0,s.jsx)(n.p,{children:"The parameter is Date or Datetime or Time type"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"INT MINUTE(DATETIME date)"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select minute('2018-12-31 23:59:59');\n+-----------------------------+\n| minute('2018-12-31 23:59:59') |\n+-----------------------------+\n|                          59 |\n+-----------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MINUTE\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);