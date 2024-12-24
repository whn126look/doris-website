"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["446234"],{53773:function(e,f,n){n.r(f),n.d(f,{metadata:()=>t,contentTitle:()=>a,default:()=>c,assets:()=>r,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-data-types/ip/IPV6","title":"IPV6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-data-types/ip/IPV6.md","sourceDirName":"sql-manual/sql-data-types/ip","slug":"/sql-manual/sql-data-types/ip/IPV6","permalink":"/zh-CN/docs/2.0/sql-manual/sql-data-types/ip/IPV6","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"IPV6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4","permalink":"/zh-CN/docs/2.0/sql-manual/sql-data-types/ip/IPV4"},"next":{"title":"ARRAY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array"}}'),i=n("785893"),s=n("250065");let l={title:"IPV6",language:"zh-CN"},a=void 0,r={},d=[{value:"IPV6",id:"ipv6",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let f={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.h2,{id:"ipv6",children:"IPV6"}),"\n",(0,i.jsx)(f.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(f.p,{children:"IPv6 \u7C7B\u578B\uFF0C\u4EE5 UInt128 \u7684\u5F62\u5F0F\u5B58\u50A8\u5728 16 \u4E2A\u5B57\u8282\u4E2D\uFF0C\u7528\u4E8E\u8868\u793A IPv6 \u5730\u5740\u3002\n\u53D6\u503C\u8303\u56F4\u662F ['::', 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff']\u3002"}),"\n",(0,i.jsx)(f.p,{children:(0,i.jsx)(f.code,{children:"\u8D85\u51FA\u53D6\u503C\u8303\u56F4\u6216\u8005\u683C\u5F0F\u975E\u6CD5\u7684\u8F93\u5165\u5C06\u8FD4\u56DENULL"})}),"\n",(0,i.jsx)(f.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(f.p,{children:"\u5EFA\u8868\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(f.pre,{children:(0,i.jsx)(f.code,{children:'CREATE TABLE ipv6_test (\n  `id` int,\n  `ip_v6` ipv6\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,i.jsx)(f.p,{children:"\u63D2\u5165\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(f.pre,{children:(0,i.jsx)(f.code,{children:"insert into ipv6_test values(1, '::');\ninsert into ipv6_test values(2, '2001:16a0:2:200a::2');\ninsert into ipv6_test values(3, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');\ninsert into ipv6_test values(4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg'); // invalid data\n"})}),"\n",(0,i.jsx)(f.p,{children:"\u67E5\u8BE2\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(f.pre,{children:(0,i.jsx)(f.code,{children:"mysql> select * from ipv6_test order by id;\n+------+-----------------------------------------+\n| id   | ip_v6                                   |\n+------+-----------------------------------------+\n|    1 | ::                                      |\n|    2 | 2001:16a0:2:200a::2                     |\n|    3 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff |\n|    4 | NULL                                    |\n+------+-----------------------------------------+\n"})}),"\n",(0,i.jsx)(f.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(f.p,{children:"IPV6"})]})}function c(e={}){let{wrapper:f}={...(0,s.a)(),...e.components};return f?(0,i.jsx)(f,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,f,n){n.d(f,{Z:function(){return a},a:function(){return l}});var t=n(667294);let i={},s=t.createContext(i);function l(e){let f=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(f):{...f,...e}},[f,e])}function a(e){let f;return f=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:f},e.children)}}}]);