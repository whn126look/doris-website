"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["822808"],{812707:function(t,e,n){n.r(e),n.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/str_to_date","title":"str_to_date","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/str_to_date.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/str_to_date","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/str_to_date","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"str_to_date","language":"zh-CN"},"sidebar":"docs","previous":{"title":"makedate","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/makedate"},"next":{"title":"time_round","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/time_round"}}'),o=n("785893"),a=n("250065");let i={title:"str_to_date",language:"zh-CN"},r=void 0,d={},l=[{value:"str_to_date",id:"str_to_date",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(t){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"str_to_date",children:"str_to_date"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"DATETIME STR_TO_DATE(VARCHAR str, VARCHAR format)"})}),"\n",(0,o.jsx)(e.p,{children:"\u901A\u8FC7format\u6307\u5B9A\u7684\u65B9\u5F0F\u5C06str\u8F6C\u5316\u4E3ADATE\u7C7B\u578B\uFF0C\u5982\u679C\u8F6C\u5316\u7ED3\u679C\u4E0D\u5BF9\u8FD4\u56DENULL\u3002\u6CE8\u610Fformat\u6307\u5B9A\u7684\u662F\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u683C\u5F0F\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u652F\u6301\u7684format\u683C\u5F0F\u4E0E",(0,o.jsx)(e.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/date_format",children:"date_format"}),"\u4E00\u81F4"]}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"mysql> select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n\nmysql> select str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n\nmysql> select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n\nmysql> select str_to_date(\"2020-09-01\", \"%Y-%m-%d %H:%i:%s\");\n+------------------------------------------------+\n| str_to_date('2020-09-01', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------+\n| 2020-09-01 00:00:00                            |\n+------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"STR_TO_DATE,STR,TO,DATE\n"})})]})}function u(t={}){let{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return i}});var s=n(667294);let o={},a=s.createContext(o);function i(t){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);