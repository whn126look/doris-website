"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["81551"],{320967:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/trim_in","title":"TRIM_IN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/trim_in.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/trim_in","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/trim_in","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TRIM_IN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"RTRIM","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/rtrim"},"next":{"title":"LTRIM_IN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/ltrim_in"}}'),i=t("785893"),r=t("250065");let l={title:"TRIM_IN",language:"zh-CN"},c=void 0,o={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR trim_in(VARCHAR str[, VARCHAR rhs])"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u6CA1\u6709 ",(0,i.jsx)(e.code,{children:"rhs"})," \u53C2\u6570\u65F6\uFF0C\u5C06\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"str"})," \u4E2D\u53F3\u4FA7\u548C\u5DE6\u4FA7\u5F00\u59CB\u90E8\u5206\u8FDE\u7EED\u51FA\u73B0\u7684\u7A7A\u683C\u53BB\u6389\uFF1B\u5F53\u6709 ",(0,i.jsx)(e.code,{children:"rhs"})," \u53C2\u6570\u65F6\uFF0C\u5728\u5B57\u7B26\u4E32\u7684\u4E24\u7AEF\u67E5\u627E\u5E76\u79FB\u9664 ",(0,i.jsx)(e.code,{children:"rhs"})," \u5B57\u7B26\u96C6\u5408\u4E2D\u7684\u4EFB\u4F55\u5B57\u7B26\uFF08\u4E0D\u8003\u8651\u987A\u5E8F\uFF09"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT trim_in('   ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT trim_in('ababccaab','ab') str;\n+------+\n| str  |\n+------+\n| cc   |\n+------+\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,i.jsx)(e.p,{children:"TRIM_IN"})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);