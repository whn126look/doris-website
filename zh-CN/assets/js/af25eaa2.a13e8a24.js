"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["524155"],{406214:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range","title":"IPV6_CIDR_TO_RANGE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IPV6_CIDR_TO_RANGE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_CIDR_TO_RANGE","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range"},"next":{"title":"IS_IP_ADDRESS_IN_RANGE","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/is-ip-address-in-range"}}'),s=i("785893"),r=i("250065");let a={title:"IPV6_CIDR_TO_RANGE",language:"zh-CN"},o=void 0,c={},l=[{value:"IPV6_CIDR_TO_RANGE",id:"ipv6_cidr_to_range",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function f(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv6_cidr_to_range",children:"IPV6_CIDR_TO_RANGE"}),"\n",(0,s.jsx)(e.p,{children:"IPV6_CIDR_TO_RANGE"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"STRUCT<IPV6, IPV6> IPV6_CIDR_TO_RANGE(IPV6 ip_v6, INT16 cidr)"})}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u6536\u4E00\u4E2AIPv6\u548C\u4E00\u4E2A\u5305\u542BCIDR\u7684Int16\u503C\u3002\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5176\u4E2D\u5305\u542B\u4E24\u4E2AIPv6\u5B57\u6BB5\u5206\u522B\u8868\u793A\u5B50\u7F51\u7684\u8F83\u4F4E\u8303\u56F4\uFF08min\uFF09\u548C\u8F83\u9AD8\u8303\u56F4\uFF08max\uFF09\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'mysql> SELECT ipv6_cidr_to_range(ipv6_string_to_num(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32);\n+---------------------------------------------------------------------------------------+\n| ipv6_cidr_to_range(ipv6_string_to_num(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) |\n+---------------------------------------------------------------------------------------+\n| {"min": "2001:db8::", "max": "2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}                |\n+---------------------------------------------------------------------------------------+\n\nmysql> SELECT ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32);\n+----------------------------------------------------------------------------+\n| ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) |\n+----------------------------------------------------------------------------+\n| {"min": "2001:db8::", "max": "2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}     |\n+----------------------------------------------------------------------------+\n\nmysql> SELECT ipv6_cidr_to_range(NULL, NULL);\n+--------------------------------+\n| ipv6_cidr_to_range(NULL, NULL) |\n+--------------------------------+\n| NULL                           |\n+--------------------------------+\n'})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV6_CIDR_TO_RANGE, IP"})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(f,{...n})}):f(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return o},a:function(){return a}});var t=i(667294);let s={},r=t.createContext(s);function a(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);