"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["727298"],{322581:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>f,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/milliseconds-diff","title":"MILLISECONDS_DIFF","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/milliseconds-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/milliseconds-diff","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-diff","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MILLISECONDS_DIFF","language":"en"},"sidebar":"docs","previous":{"title":"MILLISECONDS_ADD","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-add"},"next":{"title":"MILLISECONDS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-sub"}}'),t=i("785893"),l=i("250065");let d={title:"MILLISECONDS_DIFF",language:"en"},o=void 0,c={},a=[{value:"milliseconds_diff",id:"milliseconds_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"milliseconds_diff",children:"milliseconds_diff"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"INT milliseconds_diff(DATETIME enddate, DATETIME startdate)"})}),"\n",(0,t.jsx)(n.p,{children:"How many milliseconds is the difference between the start time and the end time?"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select milliseconds_diff('2020-12-25 21:00:00.623000','2020-12-25 21:00:00.123000');\n+-----------------------------------------------------------------------------------------------------------------------------+\n| milliseconds_diff(cast('2020-12-25 21:00:00.623000' as DATETIMEV2(6)), cast('2020-12-25 21:00:00.123000' as DATETIMEV2(6))) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         500 |\n+-----------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"milliseconds_diff\n"})})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var s=i(667294);let t={},l=s.createContext(t);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);