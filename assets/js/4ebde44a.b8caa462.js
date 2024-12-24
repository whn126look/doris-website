"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["44823"],{489803:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/to-ipv6-or-default","title":"TO_IPV6_OR_DEFAULT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/ip-functions/to-ipv6-or-default.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/to-ipv6-or-default","permalink":"/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv6-or-default","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TO_IPV6_OR_DEFAULT","language":"en"},"sidebar":"docs","previous":{"title":"TO_IPV6","permalink":"/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv6"},"next":{"title":"TO_IPV6_OR_NULL","permalink":"/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv6-or-null"}}'),s=t("785893"),l=t("250065");let o={title:"TO_IPV6_OR_DEFAULT",language:"en"},r=void 0,a={},c=[{value:"TO_IPV6_OR_DEFAULT",id:"to_ipv6_or_default",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"to_ipv6_or_default",children:"TO_IPV6_OR_DEFAULT"}),"\n",(0,s.jsx)(n.p,{children:"TO_IPV6_OR_DEFAULT"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"IPV6 TO_IPV6_OR_DEFAULT(STRING ipv6_str)"})}),"\n",(0,s.jsx)(n.p,{children:"Same as to_ipv6, but if the IPv6 address has an invalid format, it returns :: (0 as IPv6)."}),"\n",(0,s.jsx)(n.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"If input is NULL, return :: (0 as IPv6)."})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select to_ipv6_or_default('.');\n+-------------------------+\n| to_ipv6_or_default('.') |\n+-------------------------+\n| ::                      |\n+-------------------------+\n\nmysql> select to_ipv6_or_default(NULL);\n+--------------------------+\n| to_ipv6_or_default(NULL) |\n+--------------------------+\n| ::                       |\n+--------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"TO_IPV6_OR_DEFAULT, IP"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(667294);let s={},l=i.createContext(s);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);