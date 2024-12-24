"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["104738"],{612963:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>N,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/backends","title":"BACKENDS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/backends.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/backends","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/backends","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BACKENDS","language":"en"},"sidebar":"docs","previous":{"title":"ICEBERG_META","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/iceberg-meta"},"next":{"title":"FRONTENDS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/frontends"}}'),a=s("785893"),i=s("250065");let l={title:"BACKENDS",language:"en"},o=void 0,c={},d=[{value:"<code>backends</code>",id:"backends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"backends",children:(0,a.jsx)(n.code,{children:"backends"})}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"backends"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsxs)(n.p,{children:["Table-Value-Function, generate a temporary table named ",(0,a.jsx)(n.code,{children:"backends"}),". This tvf is used to view the information of BE nodes in the doris cluster."]}),"\n",(0,a.jsxs)(n.p,{children:["This function is used in ",(0,a.jsx)(n.code,{children:"FROM"})," clauses."]}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"backends()"})}),"\n",(0,a.jsxs)(n.p,{children:["The table schema of ",(0,a.jsx)(n.code,{children:"backends()"})," tvf\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> desc function backends();\n+-------------------------+---------+------+-------+---------+-------+\n| Field                   | Type    | Null | Key   | Default | Extra |\n+-------------------------+---------+------+-------+---------+-------+\n| BackendId               | BIGINT  | No   | false | NULL    | NONE  |\n| Host                    | TEXT    | No   | false | NULL    | NONE  |\n| HeartbeatPort           | INT     | No   | false | NULL    | NONE  |\n| BePort                  | INT     | No   | false | NULL    | NONE  |\n| HttpPort                | INT     | No   | false | NULL    | NONE  |\n| BrpcPort                | INT     | No   | false | NULL    | NONE  |\n| LastStartTime           | TEXT    | No   | false | NULL    | NONE  |\n| LastHeartbeat           | TEXT    | No   | false | NULL    | NONE  |\n| Alive                   | BOOLEAN | No   | false | NULL    | NONE  |\n| SystemDecommissioned    | BOOLEAN | No   | false | NULL    | NONE  |\n| TabletNum               | BIGINT  | No   | false | NULL    | NONE  |\n| DataUsedCapacity        | BIGINT  | No   | false | NULL    | NONE  |\n| AvailCapacity           | BIGINT  | No   | false | NULL    | NONE  |\n| TotalCapacity           | BIGINT  | No   | false | NULL    | NONE  |\n| UsedPct                 | DOUBLE  | No   | false | NULL    | NONE  |\n| MaxDiskUsedPct          | DOUBLE  | No   | false | NULL    | NONE  |\n| RemoteUsedCapacity      | BIGINT  | No   | false | NULL    | NONE  |\n| Tag                     | TEXT    | No   | false | NULL    | NONE  |\n| ErrMsg                  | TEXT    | No   | false | NULL    | NONE  |\n| Version                 | TEXT    | No   | false | NULL    | NONE  |\n| Status                  | TEXT    | No   | false | NULL    | NONE  |\n| HeartbeatFailureCounter | INT     | No   | false | NULL    | NONE  |\n| NodeRole                | TEXT    | No   | false | NULL    | NONE  |\n+-------------------------+---------+------+-------+---------+-------+\n23 rows in set (0.002 sec)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The information displayed by the ",(0,a.jsx)(n.code,{children:"backends"})," tvf is basically consistent with the information displayed by the ",(0,a.jsx)(n.code,{children:"show backends"})," statement. However, the types of each field in the ",(0,a.jsx)(n.code,{children:"backends"})," tvf are more specific, and you can use the ",(0,a.jsx)(n.code,{children:"backends"})," tvf to perform operations such as filtering and joining."]}),"\n",(0,a.jsxs)(n.p,{children:["The information displayed by the ",(0,a.jsx)(n.code,{children:"backends"})," tvf is authenticated, which is consistent with the behavior of ",(0,a.jsx)(n.code,{children:"show backends"}),", user must have ADMIN/OPERATOR privelege."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'mysql> select * from backends()\\G\n*************************** 1. row ***************************\n              BackendId: 10002\n                   Host: 10.xx.xx.90\n          HeartbeatPort: 9053\n                 BePort: 9063\n               HttpPort: 8043\n               BrpcPort: 8069\n          LastStartTime: 2023-06-15 16:51:02\n          LastHeartbeat: 2023-06-15 17:09:58\n                  Alive: 1\n   SystemDecommissioned: 0\n              TabletNum: 21\n       DataUsedCapacity: 0\n          AvailCapacity: 5187141550081\n          TotalCapacity: 7750977622016\n                UsedPct: 33.077583202570978\n         MaxDiskUsedPct: 33.077583202583881\n     RemoteUsedCapacity: 0\n                    Tag: {"location" : "default"}\n                 ErrMsg: \n                Version: doris-0.0.0-trunk-4b18cde0c7\n                 Status: {"lastSuccessReportTabletsTime":"2023-06-15 17:09:02","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n1 row in set (0.038 sec)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"backends\n"})})]})}function N(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);