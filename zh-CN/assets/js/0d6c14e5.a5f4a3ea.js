"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["553345"],{917490:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-data-types/ip/IPV4","title":"IPV4","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-data-types/ip/IPV4.md","sourceDirName":"sql-manual/sql-data-types/ip","slug":"/sql-manual/sql-data-types/ip/IPV4","permalink":"/zh-CN/docs/sql-manual/sql-data-types/ip/IPV4","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IPV4","language":"zh-CN"},"sidebar":"docs","previous":{"title":"AGG_STATE","permalink":"/zh-CN/docs/sql-manual/sql-data-types/aggregate/AGG-STATE"},"next":{"title":"IPV6","permalink":"/zh-CN/docs/sql-manual/sql-data-types/ip/IPV6"}}'),s=t("785893"),l=t("250065");let r={title:"IPV4",language:"zh-CN"},a=void 0,d={},o=[{value:"IPV4",id:"ipv4",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"ipv4",children:"IPV4"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.p,{children:"IPv4 \u7C7B\u578B\uFF0C\u4EE5 UInt32 \u7684\u5F62\u5F0F\u5B58\u50A8\u5728 4 \u4E2A\u5B57\u8282\u4E2D\uFF0C\u7528\u4E8E\u8868\u793A IPv4 \u5730\u5740\u3002\n\u53D6\u503C\u8303\u56F4\u662F ['0.0.0.0', '255.255.255.255']\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\u8D85\u51FA\u53D6\u503C\u8303\u56F4\u6216\u8005\u683C\u5F0F\u975E\u6CD5\u7684\u8F93\u5165\u5C06\u8FD4\u56DENULL"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"\u5EFA\u8868\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'CREATE TABLE ipv4_test (\n  `id` int,\n  `ip_v4` ipv4\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u63D2\u5165\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"insert into ipv4_test values(1, '0.0.0.0');\ninsert into ipv4_test values(2, '127.0.0.1');\ninsert into ipv4_test values(3, '59.50.185.152');\ninsert into ipv4_test values(4, '255.255.255.255');\ninsert into ipv4_test values(5, '255.255.255.256'); // invalid data\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select * from ipv4_test order by id;\n+------+-----------------+\n| id   | ip_v4           |\n+------+-----------------+\n|    1 | 0.0.0.0         |\n|    2 | 127.0.0.1       |\n|    3 | 59.50.185.152   |\n|    4 | 255.255.255.255 |\n|    5 | NULL            |\n+------+-----------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"IPV4"})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);