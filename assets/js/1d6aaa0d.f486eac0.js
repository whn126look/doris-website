"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["807365"],{796459:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var o=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/second-floor","title":"second_floor","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/second-floor.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/second-floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/second-floor","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"second_floor","language":"en"},"sidebar":"docs","previous":{"title":"date_floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/date-floor"},"next":{"title":"minute_floor","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/minute-floor"}}'),s=t("785893"),i=t("250065");let l={title:"second_floor",language:"en"},r=void 0,c={},d=[{value:"second_floor",id:"second_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"second_floor",children:"second_floor"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DATETIME SECOND_FLOOR(DATETIME datetime)\nDATETIME SECOND_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME SECOND_FLOOR(DATETIME datetime, INT period)\nDATETIME SECOND_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert the date to the nearest rounding down time of the specified time interval period."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,s.jsx)(n.li,{children:"period: specifies how many seconds each cycle consists of."}),"\n",(0,s.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select second_floor(\"2023-07-13 22:28:18\", 5);\n+---------------------------------------------------------------+\n| second_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+---------------------------------------------------------------+\n| 2023-07-13 22:28:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.10 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SECOND_FLOOR, SECOND, FLOOR\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"./date_floor",children:"date_floor"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var o=t(667294);let s={},i=o.createContext(s);function l(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);