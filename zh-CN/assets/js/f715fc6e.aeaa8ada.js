"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["998670"],{882892:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/to-ipv6-or-null","title":"TO_IPV6_OR_NULL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/ip-functions/to-ipv6-or-null.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/to-ipv6-or-null","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-null","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TO_IPV6_OR_NULL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TO_IPV6_OR_DEFAULT","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-default"},"next":{"title":"cosine_distance","permalink":"/zh-CN/docs/sql-manual/sql-functions/distance-functions/cosine-distance"}}'),l=t("785893"),s=t("250065");let o={title:"TO_IPV6_OR_NULL",language:"zh-CN"},r=void 0,c={},u=[{value:"TO_IPV6_OR_NULL",id:"to_ipv6_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"to_ipv6_or_null",children:"TO_IPV6_OR_NULL"}),"\n",(0,l.jsx)(e.p,{children:"TO_IPV6_OR_NULL"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"IPV6 TO_IPV6_OR_NULL(STRING ipv6_str)"})}),"\n",(0,l.jsx)(e.p,{children:"\u4E0Eto_ipv6\u51FD\u6570\u7C7B\u4F3C\uFF0C\u4F46\u5982\u679CIPv6\u5730\u5740\u7684\u683C\u5F0F\u975E\u6CD5\uFF0C\u5219\u8FD4\u56DENULL\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> select to_ipv6_or_null('.');\n+----------------------+\n| to_ipv6_or_null('.') |\n+----------------------+\n| NULL                 |\n+----------------------+\n\nmysql> select to_ipv6_or_null(NULL);\n+-----------------------+\n| to_ipv6_or_null(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(e.p,{children:"TO_IPV6_OR_NULL, IP"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return o}});var i=t(667294);let l={},s=i.createContext(l);function o(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);