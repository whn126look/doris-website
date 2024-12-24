"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["935347"],{501475:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv6-string-to-num","title":"IPV6_STRING_TO_NUM","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv6-string-to-num.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv6-string-to-num","permalink":"/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IPV6_STRING_TO_NUM","language":"en"},"sidebar":"docs","previous":{"title":"IPV6_NUM_TO_STRING","permalink":"/docs/sql-manual/sql-functions/ip-functions/ipv6-num-to-string"},"next":{"title":"IPV6_STRING_TO_NUM_OR_DEFAULT","permalink":"/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default"}}'),s=t("785893"),r=t("250065");let l={title:"IPV6_STRING_TO_NUM",language:"en"},o=void 0,a={},c=[{value:"IPV6_STRING_TO_NUM",id:"ipv6_string_to_num",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv6_string_to_num",children:"IPV6_STRING_TO_NUM"}),"\n",(0,s.jsx)(e.p,{children:"IPV6_STRING_TO_NUM"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"VARCHAR IPV6_STRING_TO_NUM(VARCHAR ipv6_string)"})}),"\n",(0,s.jsx)(e.p,{children:"The reverse function of IPv6NumToString, it takes an IP address String and returns an IPv6 address in binary format.\nIf the input string contains a valid IPv4 address, returns its IPv6 equivalent."}),"\n",(0,s.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(e.p,{children:["Will return an error if the input string is not a valid IP address or ",(0,s.jsx)(e.code,{children:"NULL"})]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select hex(ipv6_string_to_num('1111::ffff'));\n+---------------------------------------+\n| hex(ipv6_string_to_num('1111::ffff')) |\n+---------------------------------------+\n| 1111000000000000000000000000FFFF      |\n+---------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num('192.168.0.1'));\n+----------------------------------------+\n| hex(ipv6_string_to_num('192.168.0.1')) |\n+----------------------------------------+\n| 00000000000000000000FFFFC0A80001       |\n+----------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num('notaaddress'));\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Invalid IPv6 value\n\nmysql> select addr_src, hex(ipv6_string_to_num(addr_src)) from ipv4_string_test where addr_src is null;\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Null Input, you may consider convert it to a valid default IPv6 value like '::' first\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV6_STRING_TO_NUM, IP"})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);