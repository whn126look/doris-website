"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["951663"],{838932:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>f,assets:()=>a,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date_floor","title":"date_floor","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/date-time-functions/date_floor.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date_floor","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/date_floor","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"date_floor","language":"en"},"sidebar":"docs","previous":{"title":"DATEDIFF","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/datediff"},"next":{"title":"second_floor","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/second_floor"}}'),r=o("785893"),l=o("250065");let s={title:"date_floor",language:"en"},i=void 0,a={},d=[{value:"date_floor",id:"date_floor",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"date_floor",children:"date_floor"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DATETIME DATE_FLOOR(DATETIME datetime, INTERVAL period type)"})}),"\n",(0,r.jsx)(n.p,{children:"Converts a date to the nearest rounding down time of a specified time interval period."}),"\n",(0,r.jsx)(n.p,{children:"The datetime parameter is a valid date expression."}),"\n",(0,r.jsx)(n.p,{children:"The period parameter specifies how many units each cycle consists of, starting from 0001-01-01T00:00:00"}),"\n",(0,r.jsx)(n.p,{children:"Type: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql>select date_floor(\"0001-01-01 00:00:16\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:16', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"0001-01-01 00:00:18\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 minute);\n+---------------------------------------------------------------+\n| minute_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 hour);\n+-------------------------------------------------------------+\n| hour_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-07-13 18:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 day);\n+------------------------------------------------------------+\n| day_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-10 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 month);\n+--------------------------------------------------------------+\n| month_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-01 00:00:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 year);\n+-------------------------------------------------------------+\n| year_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2021-01-01 00:00:00                                         |\n+-------------------------------------------------------------+\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"DATE_FLOOR,DATE,FLOOR\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(n.p,{children:"See also"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./second_floor",children:"second_floor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./minute_floor",children:"minute_floor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./hour_floor",children:"hour_floor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./day_floor",children:"day_floor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./month_floor",children:"month_floor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./year_floor",children:"year_floor"})}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return s}});var t=o(667294);let r={},l=t.createContext(r);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);