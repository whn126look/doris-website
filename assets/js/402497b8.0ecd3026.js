"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["453057"],{336575:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/cast","title":"CAST","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/cast.md","sourceDirName":"sql-manual/sql-functions","slug":"/sql-manual/sql-functions/cast","permalink":"/docs/2.0/sql-manual/sql-functions/cast","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CAST","language":"en"},"sidebar":"docs","previous":{"title":"l2_distance","permalink":"/docs/2.0/sql-manual/sql-functions/distance-functions/l2-distance"},"next":{"title":"DIGITAL_MASKING","permalink":"/docs/2.0/sql-manual/sql-functions/digital-masking"}}'),a=t("785893"),i=t("250065");let l={title:"CAST",language:"en"},o=void 0,r={},c=[{value:"CAST",id:"cast",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"cast",children:"CAST"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"T cast (input as Type)"})}),"\n",(0,a.jsx)(e.p,{children:"Converts input to the specified type"}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Turn constant, or a column in a table"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n"})}),"\n",(0,a.jsxs)(e.ol,{start:"2",children:["\n",(0,a.jsx)(e.li,{children:"Transferred raw data"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Note: In the import, because the original type is String, when the original data with floating point value is cast, the data will be converted to NULL, such as 12.0. Doris is currently not truncating raw data. *"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"If you want to force this type of raw data cast to int. Look at the following words:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"curl --location-trusted -u root: -T ~/user_data/bigint -H \"columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)\"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast (\"11.2\" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST('11.2' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n\nFor the DECIMALV3 ,DATETIME type, the cast operation performs rounding half up.\nmysql> select cast (1.115 as DECIMALV3(16, 2));\n+---------------------------------+\n| cast(1.115 as DECIMALV3(16, 2)) |\n+---------------------------------+\n|                            1.12 |\n+---------------------------------+\n\nmysql> select cast('2024-12-29-20:40:50.123500' as datetime(3));\n+-----------------------------------------------------+\n| cast('2024-12-29-20:40:50.123500' as DATETIMEV2(3)) |\n+-----------------------------------------------------+\n| 2024-12-29 20:40:50.124                             |\n+-----------------------------------------------------+\n\nmysql> select cast('2024-12-29-20:40:50.123499' as datetime(3));\n+-----------------------------------------------------+\n| cast('2024-12-29-20:40:50.123499' as DATETIMEV2(3)) |\n+-----------------------------------------------------+\n| 2024-12-29 20:40:50.123                             |\n+-----------------------------------------------------+\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"CAST"})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);