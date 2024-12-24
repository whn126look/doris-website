"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["617719"],{780351:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>f,assets:()=>d,toc:()=>o,frontMatter:()=>r});var a=JSON.parse('{"id":"admin-manual/rowsets","title":"Using rowsets","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/rowsets.md","sourceDirName":"admin-manual","slug":"/admin-manual/rowsets","permalink":"/docs/2.0/admin-manual/rowsets","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Using rowsets","language":"en"},"sidebar":"docs","previous":{"title":"Compaction","permalink":"/docs/2.0/admin-manual/compaction"},"next":{"title":"Star Schema Benchmark","permalink":"/docs/2.0/benchmark/ssb"}}'),t=s("785893"),c=s("250065");let r={title:"Using rowsets",language:"en"},i=void 0,d={},o=[{value:"rowsets",id:"rowsets",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"KeyWords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function l(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"rowsets",children:"rowsets"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"rowsets"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"rowsets"})," is a built-in system table of doris, which is stored under the information_schema database. You can view the current rowsets information of each ",(0,t.jsx)(n.code,{children:"BE"})," through the ",(0,t.jsx)(n.code,{children:"rowsets"})," system table."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"rowsets"})," table schema is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"MySQL [(none)]> desc information_schema.rowsets;\n+------------------------+------------+------+-------+---------+-------+\n| Field                  | Type       | Null | Key   | Default | Extra |\n+------------------------+------------+------+-------+---------+-------+\n| BACKEND_ID             | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_ID              | VARCHAR(*) | Yes  | false | NULL    |       |\n| TABLET_ID              | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_NUM_ROWS        | BIGINT     | Yes  | false | NULL    |       |\n| TXN_ID                 | BIGINT     | Yes  | false | NULL    |       |\n| NUM_SEGMENTS           | BIGINT     | Yes  | false | NULL    |       |\n| START_VERSION          | BIGINT     | Yes  | false | NULL    |       |\n| END_VERSION            | BIGINT     | Yes  | false | NULL    |       |\n| INDEX_DISK_SIZE        | BIGINT     | Yes  | false | NULL    |       |\n| DATA_DISK_SIZE         | BIGINT     | Yes  | false | NULL    |       |\n| CREATION_TIME          | BIGINT     | Yes  | false | NULL    |       |\n| NEWEST_WRITE_TIMESTAMP | BIGINT     | Yes  | false | NULL    |       |\n+------------------------+------------+------+-------+---------+-------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select * from information_schema.rowsets where BACKEND_ID = 10004 limit 10;\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n| BACKEND_ID | ROWSET_ID                                        | TABLET_ID | ROWSET_NUM_ROWS | TXN_ID | NUM_SEGMENTS | START_VERSION | END_VERSION | INDEX_DISK_SIZE | DATA_DISK_SIZE | CREATION_TIME | OLDEST_WRITE_TIMESTAMP | NEWEST_WRITE_TIMESTAMP |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n|      10004 | 02000000000000994847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      6 |            1 |             3 |           3 |            2894 |         688855 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008d4847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      2 |            1 |             2 |           2 |            2894 |         688855 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000894847fbd41a42297d7c7a57d3bcb46f8c |     10771 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009a4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      6 |            1 |             3 |           3 |            2897 |         686828 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008e4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      2 |            1 |             2 |           2 |            2897 |         686828 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000884847fbd41a42297d7c7a57d3bcb46f8c |     10773 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 02000000000000984847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      6 |            1 |             3 |           3 |            2893 |         685381 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008c4847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      2 |            1 |             2 |           2 |            2893 |         685381 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000874847fbd41a42297d7c7a57d3bcb46f8c |     10757 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009c4847fbd41a42297d7c7a57d3bcb46f8c |     10739 |            1698 |      8 |            1 |             3 |           3 |             454 |          86126 |    1659964582 |             1659964582 |             1659964582 |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"KeyWords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rowsets, information_schema\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function f(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var a=s(667294);let t={},c=a.createContext(t);function r(e){let n=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);